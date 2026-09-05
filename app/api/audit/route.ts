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

type CruxMetric = { category: string | null; percentile: number | null };

type CruxData = {
  hasData: boolean;
  lcp: CruxMetric;
  fid: CruxMetric;
  cls: CruxMetric;
  inp: CruxMetric;
  overallCategory: string | null;
};

type RedirectChainResult = {
  finalUrl: string;
  hops: number;
  chain: string[];
  hasWWWIssue: boolean;
  hasHTTPSIssue: boolean;
};

type BrokenLinksResult = {
  checked: number;
  ok: number;
  broken: { url: string; status: number | 'error' }[];
};

type MixedContentResult = { hasMixedContent: boolean; examples: string[] };

type HreflangResult = {
  hasHreflang: boolean;
  links: { lang: string; href: string }[];
  hasSelfReferencing: boolean;
};

type W3CResult = {
  errors: number;
  warnings: number;
  grade: 'perfect' | 'good' | 'issues' | 'poor';
};

type GbpSignals = {
  hasMapsLink: boolean;
  hasLocalBusinessSchema: boolean;
  hasGPageLink: boolean;
  confidence: 'high' | 'medium' | 'low' | 'none';
};

type GbpPlaces = {
  found: boolean;
  placeId?: string;
  name?: string;
  rating?: number;
  reviewCount?: number;
};

type GbpResult = { signals: GbpSignals; places: GbpPlaces | null };

export type AuditResult = {
  url: string;
  timestamp: string;
  pagespeed: { mobile: PagespeedMobile; desktop: PagespeedDesktop } | null;
  crux: CruxData | null;
  content: AuditContent | null;
  local: AuditLocal | null;
  robots: { hasRobots: boolean; robotsBlocked: boolean } | null;
  sitemap: { hasSitemap: boolean } | null;
  security: AuditSecurity | null;
  safeBrowsing: { isSafe: boolean; threats: string[] } | null;
  carbon: { gramsPerVisit: number; cleanerThan: number } | null;
  dns: { hasSPF: boolean; hasDMARC: boolean } | null;
  redirectChain: RedirectChainResult | null;
  brokenLinks: BrokenLinksResult | null;
  mixedContent: MixedContentResult | null;
  hreflang: HreflangResult | null;
  w3c: W3CResult | null;
  gbp: GbpResult | null;
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

// CrUX (Chrome User Experience Report) field data — real Chrome users, not
// a lab simulation. Only present when the origin has enough Chrome
// traffic; FID has been fully retired from this API in favour of INP, so
// it will always come back null now (kept for API-shape completeness).
function extractCrux(data: any): CruxData {
  const metrics = data?.loadingExperience?.metrics;
  const metric = (key: string): CruxMetric => ({
    category: metrics?.[key]?.category ?? null,
    percentile: metrics?.[key]?.percentile ?? null,
  });

  return {
    hasData: !!metrics,
    lcp: metric('LARGEST_CONTENTFUL_PAINT_MS'),
    fid: metric('FIRST_INPUT_DELAY_MS'),
    cls: metric('CUMULATIVE_LAYOUT_SHIFT_SCORE'),
    inp: metric('INTERACTION_TO_NEXT_PAINT'),
    overallCategory: data?.loadingExperience?.overall_category ?? null,
  };
}

async function checkPagespeed(url: string): Promise<{ mobile: PagespeedMobile; desktop: PagespeedDesktop; crux: CruxData } | null> {
  try {
    const [mobileData, desktopData] = await Promise.all([
      fetchPsi(url, 'mobile', ['performance', 'seo', 'accessibility', 'best-practices']),
      fetchPsi(url, 'desktop', ['performance']),
    ]);
    return { mobile: extractMobile(mobileData), desktop: extractDesktop(desktopData), crux: extractCrux(mobileData) };
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

function detectMixedContent($: cheerio.CheerioAPI, hasHTTPS: boolean): MixedContentResult {
  const found: string[] = [];
  if (hasHTTPS) {
    $('img[src], script[src], link[href], iframe[src], source[src], video[src], audio[src]').each((_, el) => {
      const attr = $(el).attr('src') || $(el).attr('href') || '';
      if (attr.startsWith('http://')) found.push(attr);
    });
    $('[style]').each((_, el) => {
      const style = $(el).attr('style') || '';
      const matches = style.match(/url\(['"]?(http:\/\/[^'")\s]+)['"]?\)/g) || [];
      found.push(...matches);
    });
  }
  return { hasMixedContent: found.length > 0, examples: found.slice(0, 3) };
}

function detectHreflang($: cheerio.CheerioAPI, hostname: string): HreflangResult {
  const links: { lang: string; href: string }[] = [];
  $('link[rel="alternate"][hreflang]').each((_, el) => {
    links.push({ lang: $(el).attr('hreflang') || '', href: $(el).attr('href') || '' });
  });
  return {
    hasHreflang: links.length > 0,
    links,
    hasSelfReferencing: links.some((l) => l.lang === 'x-default' || l.href.includes(hostname)),
  };
}

const GBP_SCHEMA_TYPES = new Set(['LocalBusiness', 'Restaurant', 'Store', 'MedicalBusiness', 'Dentist', 'LegalService']);

function detectGBPSignals($: cheerio.CheerioAPI): GbpSignals {
  const hasMapsLink = $('a[href*="maps.google.com"], a[href*="goo.gl/maps"], a[href*="g.page"]').length > 0;
  const hasGPageLink = $('a[href*="g.page/"]').length > 0;

  const hasLocalBusinessSchema = $('script[type="application/ld+json"]').toArray().some((el) => {
    try {
      const parsed = JSON.parse($(el).contents().text() || '{}');
      // A JSON-LD block can be a single object or an array of several
      // (e.g. a LocalBusiness entry alongside an unrelated Person entry).
      const items = Array.isArray(parsed) ? parsed : [parsed];
      return items.some((data) => {
        const type = data?.['@type'];
        if (typeof type === 'string') return GBP_SCHEMA_TYPES.has(type) || type.includes('Business');
        if (Array.isArray(type)) return type.some((t) => typeof t === 'string' && (GBP_SCHEMA_TYPES.has(t) || t.includes('Business')));
        return false;
      });
    } catch {
      return false;
    }
  });

  const confidence: GbpSignals['confidence'] = hasGPageLink
    ? 'high'
    : hasMapsLink && hasLocalBusinessSchema
    ? 'high'
    : hasMapsLink || hasLocalBusinessSchema
    ? 'medium'
    : 'none';

  return { hasMapsLink, hasLocalBusinessSchema, hasGPageLink, confidence };
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

async function checkPage(url: string): Promise<{
  content: AuditContent;
  local: AuditLocal;
  security: AuditSecurity;
  mixedContent: MixedContentResult;
  hreflang: HreflangResult;
  gbpSignals: GbpSignals;
  html: string;
} | null> {
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
    const mixedContent = detectMixedContent($, hasHTTPS);
    const hreflang = detectHreflang($, hostname);
    const gbpSignals = detectGBPSignals($);

    return { content, local, security, mixedContent, hreflang, gbpSignals, html };
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

// `ENODATA`/`ENOTFOUND` mean the record genuinely doesn't exist — not
// worth retrying. Anything else (ESERVFAIL, ETIMEOUT, connection resets)
// is treated as a transient resolver hiccup and retried once, since
// running in a serverless function means every invocation can hit DNS
// with a cold resolver.
async function resolveTxtWithRetry(hostname: string): Promise<string[]> {
  try {
    return (await dns.resolveTxt(hostname)).flat();
  } catch (error: any) {
    if (error?.code === 'ENODATA' || error?.code === 'ENOTFOUND') return [];
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return (await dns.resolveTxt(hostname)).flat();
    } catch {
      return [];
    }
  }
}

async function checkDns(url: string): Promise<{ hasSPF: boolean; hasDMARC: boolean } | null> {
  try {
    const hostname = new URL(url).hostname;
    const run = async () => {
      const txtRecords = await resolveTxtWithRetry(hostname);
      const hasSPF = txtRecords.some((r) => r.startsWith('v=spf1'));
      const dmarcRecords = await resolveTxtWithRetry(`_dmarc.${hostname}`);
      return { hasSPF, hasDMARC: dmarcRecords.length > 0 };
    };
    return await withTimeout(run(), 8000, null);
  } catch (error) {
    console.error('Audit — DNS check failed:', error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 7. Redirect chain
// ─────────────────────────────────────────────────────────────────────────

async function checkRedirectChain(url: string): Promise<RedirectChainResult | null> {
  try {
    const chain: string[] = [url];
    let current = url;
    let hops = 0;
    const maxHops = 10;

    while (hops < maxHops) {
      const res = await fetch(current, {
        redirect: 'manual',
        signal: AbortSignal.timeout(5000),
      });

      if (res.status >= 300 && res.status < 400) {
        const location = res.headers.get('location');
        if (!location) break;
        current = location.startsWith('http') ? location : new URL(location, current).href;
        chain.push(current);
        hops++;
      } else {
        break;
      }
    }

    const hasWWWIssue =
      chain.some((u) => u.startsWith('http://www.')) ||
      (chain[0].includes('www.') && !chain[chain.length - 1].includes('www.')) ||
      (!chain[0].includes('www.') && chain[chain.length - 1].includes('www.'));

    const hasHTTPSIssue = chain.some((u) => u.startsWith('http://'));

    return { finalUrl: chain[chain.length - 1], hops, chain, hasWWWIssue, hasHTTPSIssue };
  } catch (error) {
    console.error('Audit — redirect chain check failed:', error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 8. Broken links — checks the first 15 unique internal links via HEAD
// ─────────────────────────────────────────────────────────────────────────

async function checkBrokenLinks(html: string, baseUrl: string): Promise<BrokenLinksResult | null> {
  try {
    const $ = cheerio.load(html);
    const hostname = new URL(baseUrl).hostname;

    const internalLinks = $('a[href]')
      .map((_, el) => $(el).attr('href'))
      .get()
      .filter((href): href is string => !!href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:'))
      .map((href) => {
        try {
          const abs = href.startsWith('http') ? href : new URL(href, baseUrl).href;
          return new URL(abs).hostname === hostname ? abs : null;
        } catch {
          return null;
        }
      })
      .filter((u): u is string => !!u)
      .filter((u, i, arr) => arr.indexOf(u) === i)
      .slice(0, 15);

    const results = await Promise.allSettled(
      internalLinks.map(async (link) => {
        const res = await fetch(link, {
          method: 'HEAD',
          redirect: 'follow',
          signal: AbortSignal.timeout(5000),
        });
        return { url: link, status: res.status };
      })
    );

    const broken = results
      .map((r, i) => {
        if (r.status === 'rejected') return { url: internalLinks[i], status: 'error' as const };
        if (r.value.status >= 400) return { url: internalLinks[i], status: r.value.status };
        return null;
      })
      .filter((r): r is { url: string; status: number | 'error' } => !!r);

    return { checked: internalLinks.length, broken, ok: internalLinks.length - broken.length };
  } catch (error) {
    console.error('Audit — broken links check failed:', error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 9. W3C HTML validation
// ─────────────────────────────────────────────────────────────────────────

async function checkW3C(url: string): Promise<W3CResult | null> {
  try {
    const res = await fetch(`https://validator.w3.org/nu/?doc=${encodeURIComponent(url)}&out=json`, {
      headers: { 'User-Agent': 'AtelierCode-Audit/1.0' },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return null;

    const data = await res.json();
    const messages: any[] = data.messages ?? [];
    const errors = messages.filter((m) => m.type === 'error').length;
    const warnings = messages.filter((m) => m.type === 'info' && m.subType === 'warning').length;

    return {
      errors,
      warnings,
      grade: errors === 0 ? 'perfect' : errors <= 5 ? 'good' : errors <= 20 ? 'issues' : 'poor',
    };
  } catch (error) {
    console.error('Audit — W3C validation check failed:', error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 10. Google Business Profile — Places API (optional, paid)
// ─────────────────────────────────────────────────────────────────────────

async function checkGBPViaPlaces(hostname: string): Promise<GbpPlaces | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const query = hostname.replace(/^www\./, '').replace(/\.(fr|com|net|org)$/, '');
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}`,
      { signal: AbortSignal.timeout(8000) }
    );
    if (!res.ok) return null;

    const data = await res.json();
    const place = data.results?.[0];
    if (!place) return { found: false };

    return {
      found: true,
      placeId: place.place_id,
      name: place.name,
      rating: place.rating,
      reviewCount: place.user_ratings_total,
    };
  } catch (error) {
    console.error('Audit — GBP Places check failed:', error);
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

  // The page fetch feeds content, local SEO signals, security headers,
  // mixed content, hreflang, GBP heuristics and (via pageSize) the carbon
  // check — everything else is independent and starts immediately, so the
  // whole audit runs in parallel rather than as a sequential chain.
  const pagePromise = checkPage(normalized);
  const carbonPromise = pagePromise.then((page) => checkCarbon(normalized, page?.content.pageSize ?? null));
  const brokenLinksPromise = pagePromise.then((page) => (page ? checkBrokenLinks(page.html, normalized) : null));
  const hostname = new URL(normalized).hostname;

  const [
    pagespeedR,
    pageR,
    robotsR,
    sitemapR,
    safeBrowsingR,
    carbonR,
    dnsR,
    redirectChainR,
    brokenLinksR,
    w3cR,
    gbpPlacesR,
  ] = await Promise.allSettled([
    checkPagespeed(normalized),
    pagePromise,
    checkRobots(normalized),
    checkSitemap(normalized),
    checkSafeBrowsing(normalized),
    carbonPromise,
    checkDns(normalized),
    checkRedirectChain(normalized),
    brokenLinksPromise,
    checkW3C(normalized),
    checkGBPViaPlaces(hostname),
  ]);

  const page = pageR.status === 'fulfilled' ? pageR.value : null;
  const pagespeed = pagespeedR.status === 'fulfilled' ? pagespeedR.value : null;

  const result: AuditResult = {
    url: normalized,
    timestamp: new Date().toISOString(),
    pagespeed: pagespeed ? { mobile: pagespeed.mobile, desktop: pagespeed.desktop } : null,
    crux: pagespeed?.crux ?? null,
    content: page?.content ?? null,
    local: page?.local ?? null,
    robots: robotsR.status === 'fulfilled' ? robotsR.value : null,
    sitemap: sitemapR.status === 'fulfilled' ? sitemapR.value : null,
    security: page?.security ?? null,
    safeBrowsing: safeBrowsingR.status === 'fulfilled' ? safeBrowsingR.value : null,
    carbon: carbonR.status === 'fulfilled' ? carbonR.value : null,
    dns: dnsR.status === 'fulfilled' ? dnsR.value : null,
    redirectChain: redirectChainR.status === 'fulfilled' ? redirectChainR.value : null,
    brokenLinks: brokenLinksR.status === 'fulfilled' ? brokenLinksR.value : null,
    mixedContent: page?.mixedContent ?? null,
    hreflang: page?.hreflang ?? null,
    w3c: w3cR.status === 'fulfilled' ? w3cR.value : null,
    gbp: page ? { signals: page.gbpSignals, places: gbpPlacesR.status === 'fulfilled' ? gbpPlacesR.value : null } : null,
  };

  return NextResponse.json(result);
}
