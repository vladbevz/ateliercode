import { NextRequest, NextResponse } from 'next/server';
import dns from 'dns/promises';
import * as cheerio from 'cheerio';

const PSI_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

// ─────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────

type FieldStatus = 'good' | 'too_short' | 'too_long' | 'missing';

type PagespeedMobile = {
  performance: number;
  lcp: number;
  cls: number;
  fcp: number;
  tbt: number;
  tti: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  opportunities: string[];
};

type PagespeedDesktop = {
  performance: number;
  lcp: number;
  cls: number;
  fcp: number;
  tbt: number;
  tti: number;
};

type AuditContent = {
  title: string;
  titleLength: number;
  titleStatus: FieldStatus;
  metaDesc: string;
  metaDescLength: number;
  metaDescStatus: FieldStatus;
  h1Count: number;
  h1Text: string;
  canonical: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  hasSchema: boolean;
  schemaTypes: string[];
  totalImages: number;
  imagesWithoutAlt: number;
  hasFavicon: boolean;
  externalScripts: number;
  pageSize: number;
  hasGA: boolean;
  hasPixel: boolean;
};

type AuditLocal = {
  hasPhone: boolean;
  hasAddress: boolean;
  hasHTTPS: boolean;
};

type AuditSecurity = {
  grade: string;
  score: number;
  passed: number;
  failed: number;
};

export type AuditResult = {
  url: string;
  timestamp: string;
  pagespeed: { mobile: PagespeedMobile; desktop: PagespeedDesktop } | null;
  content: AuditContent | null;
  local: AuditLocal | null;
  robots: { hasRobots: boolean; robotsBlocked: boolean } | null;
  sitemap: { hasSitemap: boolean } | null;
  security: AuditSecurity | null;
  safeBrowsing: { isSafe: boolean; threats: string[] } | null;
  carbon: { gramsPerVisit: number; cleanerThan: number } | null;
  dns: { hasSPF: boolean; hasDMARC: boolean } | null;
};

// ─────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────

function normalizeUrl(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const parsed = new URL(withProtocol);
    if (!parsed.hostname.includes('.')) return null;
    // Avoid forcing a bare trailing slash (e.g. "https://example.com/")
    // for root URLs — the PSI Lighthouse runner can fail on some sites
    // when the root is requested with an explicit trailing slash.
    if (parsed.pathname === '/' && !parsed.search && !parsed.hash) {
      return parsed.origin;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

const round1 = (n: number) => Math.round(n * 10) / 10;
const round2 = (n: number) => Math.round(n * 100) / 100;
const pct = (score: number | undefined) => Math.round((score ?? 0) * 100);
const seconds = (ms: number | undefined) => round1((ms ?? 0) / 1000);

function withTimeout<T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(fallback), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      () => {
        clearTimeout(timer);
        resolve(fallback);
      }
    );
  });
}

// ─────────────────────────────────────────────────────────────────────────
// 1. Google PageSpeed Insights (mobile + desktop)
// ─────────────────────────────────────────────────────────────────────────

async function fetchPsiOnce(url: string, strategy: 'mobile' | 'desktop', categories: string[]) {
  const params = new URLSearchParams();
  params.set('url', url);
  params.set('strategy', strategy);
  categories.forEach((category) => params.append('category', category));
  if (process.env.PAGESPEED_API_KEY) {
    params.set('key', process.env.PAGESPEED_API_KEY);
  }

  // PSI runs a full Lighthouse audit remotely on a cold (uncached) URL,
  // which can genuinely take 40-50+ seconds — far beyond the 8s cap used
  // for the other checks — so it gets a much larger budget of its own.
  const res = await fetch(`${PSI_ENDPOINT}?${params.toString()}`, {
    signal: AbortSignal.timeout(55000),
  });
  const data = await res.json();

  if (!res.ok) {
    const message = data?.error?.message || 'Erreur PageSpeed Insights';
    throw new Error(message);
  }

  return data;
}

// The PSI Lighthouse runner occasionally fails transiently with a generic
// "Something went wrong" 500, unrelated to the request itself — retrying
// once resolves the vast majority of these. A genuine timeout is not
// retried: the request was already slow, and retrying would just double
// the wait for no better odds of success.
async function fetchPsi(url: string, strategy: 'mobile' | 'desktop', categories: string[]) {
  try {
    return await fetchPsiOnce(url, strategy, categories);
  } catch (error) {
    if (error instanceof DOMException && error.name === 'TimeoutError') {
      throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return fetchPsiOnce(url, strategy, categories);
  }
}

function extractOpportunities(audits: Record<string, any>): string[] {
  return Object.values(audits)
    .filter((audit: any) => audit?.details?.type === 'opportunity' && typeof audit.score === 'number' && audit.score < 1)
    .map((audit: any) => audit.title as string);
}

function extractMobile(data: any): PagespeedMobile {
  const audits = data?.lighthouseResult?.audits ?? {};
  const categories = data?.lighthouseResult?.categories ?? {};

  return {
    performance: pct(categories.performance?.score),
    lcp: seconds(audits['largest-contentful-paint']?.numericValue),
    cls: round2(audits['cumulative-layout-shift']?.numericValue ?? 0),
    fcp: seconds(audits['first-contentful-paint']?.numericValue),
    tbt: Math.round(audits['total-blocking-time']?.numericValue ?? 0),
    tti: seconds(audits['interactive']?.numericValue),
    accessibility: pct(categories.accessibility?.score),
    bestPractices: pct(categories['best-practices']?.score),
    seo: pct(categories.seo?.score),
    opportunities: extractOpportunities(audits),
  };
}

function extractDesktop(data: any): PagespeedDesktop {
  const audits = data?.lighthouseResult?.audits ?? {};
  const categories = data?.lighthouseResult?.categories ?? {};

  return {
    performance: pct(categories.performance?.score),
    lcp: seconds(audits['largest-contentful-paint']?.numericValue),
    cls: round2(audits['cumulative-layout-shift']?.numericValue ?? 0),
    fcp: seconds(audits['first-contentful-paint']?.numericValue),
    tbt: Math.round(audits['total-blocking-time']?.numericValue ?? 0),
    tti: seconds(audits['interactive']?.numericValue),
  };
}

async function checkPagespeed(url: string): Promise<{ mobile: PagespeedMobile; desktop: PagespeedDesktop } | null> {
  try {
    const [mobileData, desktopData] = await Promise.all([
      fetchPsi(url, 'mobile', ['performance', 'seo', 'accessibility', 'best-practices']),
      fetchPsi(url, 'desktop', ['performance']),
    ]);
    return { mobile: extractMobile(mobileData), desktop: extractDesktop(desktopData) };
  } catch (error) {
    console.error('Audit — PageSpeed check failed:', error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 2. HTML parsing (content + local SEO signals + security headers)
//    — a single page fetch feeds all three, to avoid hitting the target
//    site three times for what is fundamentally one page load.
// ─────────────────────────────────────────────────────────────────────────

function titleStatus(title: string): FieldStatus {
  if (!title) return 'missing';
  if (title.length < 50) return 'too_short';
  if (title.length > 65) return 'too_long';
  return 'good';
}

function metaDescStatus(desc: string): FieldStatus {
  if (!desc) return 'missing';
  if (desc.length < 140) return 'too_short';
  if (desc.length > 160) return 'too_long';
  return 'good';
}

function extractSchemaTypes($: cheerio.CheerioAPI): string[] {
  const types: string[] = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const parsed = JSON.parse($(el).contents().text() || '{}');
      const items = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of items) {
        const t = item?.['@type'];
        if (Array.isArray(t)) types.push(...t.filter((x) => typeof x === 'string'));
        else if (typeof t === 'string') types.push(t);
      }
    } catch {
      // ignore malformed JSON-LD blocks
    }
  });
  return types;
}

function computeSecurityGrade(headers: Headers, isHttps: boolean): AuditSecurity {
  // The original Mozilla HTTP Observatory public API was retired in 2025
  // (the check now lives behind an authenticated MDN feature with no
  // public REST endpoint). This computes an equivalent grade directly
  // from the response's own security headers instead.
  const csp = headers.get('content-security-policy') || '';
  const checks = [
    { present: isHttps && headers.has('strict-transport-security'), weight: 20 },
    { present: headers.has('content-security-policy'), weight: 25 },
    { present: headers.has('x-frame-options') || csp.includes('frame-ancestors'), weight: 15 },
    { present: headers.has('x-content-type-options'), weight: 15 },
    { present: headers.has('referrer-policy'), weight: 15 },
    { present: headers.has('permissions-policy'), weight: 10 },
  ];

  const score = checks.reduce((sum, c) => sum + (c.present ? c.weight : 0), 0);
  const passed = checks.filter((c) => c.present).length;
  const failed = checks.length - passed;
  const grade = score >= 90 ? 'A' : score >= 75 ? 'B' : score >= 60 ? 'C' : score >= 40 ? 'D' : 'F';

  return { grade, score, passed, failed };
}

async function checkPage(url: string): Promise<{ content: AuditContent; local: AuditLocal; security: AuditSecurity } | null> {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(8000),
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AtelierCodeAudit/1.0; +https://www.ateliercode.fr/audit)' },
    });
    if (!res.ok) return null;

    const html = await res.text();
    const $ = cheerio.load(html);
    const hostname = new URL(url).hostname;
    const hasHTTPS = url.startsWith('https://');

    const title = $('title').first().text().trim();
    const metaDesc = ($('meta[name="description"]').attr('content') || '').trim();
    const pageText = $('body').text();

    const totalImages = $('img').length;
    const imagesWithoutAlt = $('img:not([alt]), img[alt=""]').length;

    const externalScripts = $('script[src]').filter((_, el) => {
      const src = $(el).attr('src') || '';
      return src.startsWith('http') && !src.includes(hostname);
    }).length;

    const content: AuditContent = {
      title,
      titleLength: title.length,
      titleStatus: titleStatus(title),
      metaDesc,
      metaDescLength: metaDesc.length,
      metaDescStatus: metaDescStatus(metaDesc),
      h1Count: $('h1').length,
      h1Text: $('h1').first().text().trim(),
      canonical: $('link[rel="canonical"]').attr('href') || null,
      ogTitle: $('meta[property="og:title"]').attr('content') || null,
      ogDescription: $('meta[property="og:description"]').attr('content') || null,
      ogImage: $('meta[property="og:image"]').attr('content') || null,
      hasSchema: $('script[type="application/ld+json"]').length > 0,
      schemaTypes: extractSchemaTypes($),
      totalImages,
      imagesWithoutAlt,
      hasFavicon: !!$('link[rel="icon"], link[rel="shortcut icon"]').attr('href'),
      externalScripts,
      pageSize: Buffer.byteLength(html, 'utf8'),
      hasGA: html.includes('google-analytics.com') || html.includes('googletagmanager.com') || html.includes('gtag('),
      hasPixel: html.includes('connect.facebook.net'),
    };

    const local: AuditLocal = {
      hasPhone: /(\+33|0\d)[\s.-]?\d{2}[\s.-]?\d{2}[\s.-]?\d{2}[\s.-]?\d{2}/.test(pageText),
      hasAddress: /\b\d{5}\b/.test(pageText),
      hasHTTPS,
    };

    const security = computeSecurityGrade(res.headers, hasHTTPS);

    return { content, local, security };
  } catch (error) {
    console.error('Audit — page fetch/parse failed:', error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 3. Robots.txt & Sitemap
// ─────────────────────────────────────────────────────────────────────────

type RobotsGroup = { agents: string[]; disallows: string[] };

function parseRobotsGroups(text: string): RobotsGroup[] {
  const groups: RobotsGroup[] = [];
  let current: RobotsGroup | null = null;
  let sawDirectiveSinceLastAgent = false;

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.split('#')[0].trim();
    if (!line) continue;
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim().toLowerCase();
    const value = line.slice(idx + 1).trim();

    if (key === 'user-agent') {
      if (!current || sawDirectiveSinceLastAgent) {
        current = { agents: [], disallows: [] };
        groups.push(current);
        sawDirectiveSinceLastAgent = false;
      }
      current.agents.push(value.toLowerCase());
    } else if (key === 'disallow' && current) {
      current.disallows.push(value);
      sawDirectiveSinceLastAgent = true;
    } else {
      sawDirectiveSinceLastAgent = true;
    }
  }

  return groups;
}

// Whether general crawlers (Googlebot, or the wildcard `*` group) are
// blocked from the whole site — not whether some specific bot (Baidu,
// Ahrefs, etc.) happens to be disallowed, which is common and harmless.
function isBlockedForGeneralCrawlers(text: string): boolean {
  const groups = parseRobotsGroups(text);
  const relevant = groups.filter((g) => g.agents.includes('*') || g.agents.includes('googlebot'));
  return relevant.some((g) => g.disallows.some((d) => d === '/'));
}

async function checkRobots(url: string): Promise<{ hasRobots: boolean; robotsBlocked: boolean } | null> {
  try {
    const robotsUrl = new URL('/robots.txt', url).href;
    const res = await fetch(robotsUrl, { signal: AbortSignal.timeout(5000) });
    const hasRobots = res.ok;
    const text = hasRobots ? await res.text() : '';
    const robotsBlocked = hasRobots && isBlockedForGeneralCrawlers(text);
    return { hasRobots, robotsBlocked };
  } catch (error) {
    console.error('Audit — robots.txt check failed:', error);
    return null;
  }
}

async function checkSitemap(url: string): Promise<{ hasSitemap: boolean } | null> {
  try {
    const sitemapUrl = new URL('/sitemap.xml', url).href;
    const res = await fetch(sitemapUrl, { signal: AbortSignal.timeout(5000) });
    return { hasSitemap: res.ok };
  } catch (error) {
    console.error('Audit — sitemap.xml check failed:', error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 4. Google Safe Browsing
// ─────────────────────────────────────────────────────────────────────────

async function checkSafeBrowsing(url: string): Promise<{ isSafe: boolean; threats: string[] } | null> {
  const apiKey = process.env.SAFE_BROWSING_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(8000),
      body: JSON.stringify({
        client: { clientId: 'ateliercode-audit', clientVersion: '1.0' },
        threatInfo: {
          threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING', 'UNWANTED_SOFTWARE'],
          platformTypes: ['ANY_PLATFORM'],
          threatEntryTypes: ['URL'],
          threatEntries: [{ url }],
        },
      }),
    });
    if (!res.ok) return null;

    const data = await res.json();
    const matches: any[] = data.matches ?? [];
    return { isSafe: matches.length === 0, threats: matches.map((m) => m.threatType as string) };
  } catch (error) {
    console.error('Audit — Safe Browsing check failed:', error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 5. Website Carbon (+ Green Web Foundation for hosting status)
//    — websitecarbon.com's old `/site?url=` endpoint was retired in July
//    2025; the current free `/data` endpoint takes a byte size + green
//    hosting flag instead, which we already have from the page fetch.
// ─────────────────────────────────────────────────────────────────────────

async function checkCarbon(url: string, pageSizeBytes: number | null): Promise<{ gramsPerVisit: number; cleanerThan: number } | null> {
  if (pageSizeBytes == null) return null;

  try {
    const hostname = new URL(url).hostname;
    let isGreen = false;
    try {
      const greenRes = await fetch(`https://api.thegreenwebfoundation.org/greencheck/${hostname}`, {
        signal: AbortSignal.timeout(5000),
      });
      if (greenRes.ok) {
        const greenData = await greenRes.json();
        isGreen = !!greenData.green;
      }
    } catch {
      // default to non-green hosting if the check itself fails
    }

    const params = new URLSearchParams({ bytes: String(pageSizeBytes), green: isGreen ? '1' : '0' });
    const res = await fetch(`https://api.websitecarbon.com/data?${params.toString()}`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;

    const data = await res.json();
    return {
      gramsPerVisit: round2(data.gco2e ?? 0),
      cleanerThan: Math.round((data.cleanerThan ?? 0) * 100),
    };
  } catch (error) {
    console.error('Audit — carbon check failed:', error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 6. DNS — SPF / DMARC
// ─────────────────────────────────────────────────────────────────────────

async function checkDns(url: string): Promise<{ hasSPF: boolean; hasDMARC: boolean } | null> {
  try {
    const hostname = new URL(url).hostname;
    const run = async () => {
      const txtRecords = await dns.resolveTxt(hostname).catch(() => []);
      const hasSPF = txtRecords.flat().some((r) => r.startsWith('v=spf1'));
      const dmarcRecords = await dns.resolveTxt(`_dmarc.${hostname}`).catch(() => []);
      return { hasSPF, hasDMARC: dmarcRecords.length > 0 };
    };
    return await withTimeout(run(), 5000, null);
  } catch (error) {
    console.error('Audit — DNS check failed:', error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// Route handler
// ─────────────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  let body: { url?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  const normalized = body.url ? normalizeUrl(body.url) : null;
  if (!normalized) {
    return NextResponse.json(
      { error: 'URL invalide. Vérifiez le format (ex : https://votresite.fr).' },
      { status: 400 }
    );
  }

  // The page fetch feeds content, local SEO signals, security headers and
  // (via pageSize) the carbon check — everything else is independent and
  // starts immediately, so the whole audit runs in parallel rather than
  // as a sequential chain.
  const pagePromise = checkPage(normalized);
  const carbonPromise = pagePromise.then((page) => checkCarbon(normalized, page?.content.pageSize ?? null));

  const [pagespeedR, pageR, robotsR, sitemapR, safeBrowsingR, carbonR, dnsR] = await Promise.allSettled([
    checkPagespeed(normalized),
    pagePromise,
    checkRobots(normalized),
    checkSitemap(normalized),
    checkSafeBrowsing(normalized),
    carbonPromise,
    checkDns(normalized),
  ]);

  const page = pageR.status === 'fulfilled' ? pageR.value : null;

  const result: AuditResult = {
    url: normalized,
    timestamp: new Date().toISOString(),
    pagespeed: pagespeedR.status === 'fulfilled' ? pagespeedR.value : null,
    content: page?.content ?? null,
    local: page?.local ?? null,
    robots: robotsR.status === 'fulfilled' ? robotsR.value : null,
    sitemap: sitemapR.status === 'fulfilled' ? sitemapR.value : null,
    security: page?.security ?? null,
    safeBrowsing: safeBrowsingR.status === 'fulfilled' ? safeBrowsingR.value : null,
    carbon: carbonR.status === 'fulfilled' ? carbonR.value : null,
    dns: dnsR.status === 'fulfilled' ? dnsR.value : null,
  };

  return NextResponse.json(result);
}
