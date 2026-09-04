import { NextRequest, NextResponse } from 'next/server';

const PSI_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

type Strategy = {
  score: number;
  lcp: number;
  cls: number;
  fcp: number;
  tbt: number;
};

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

async function fetchPsiOnce(url: string, strategy: 'mobile' | 'desktop', categories: string[]) {
  const params = new URLSearchParams();
  params.set('url', url);
  params.set('strategy', strategy);
  categories.forEach((category) => params.append('category', category));
  if (process.env.PAGESPEED_API_KEY) {
    params.set('key', process.env.PAGESPEED_API_KEY);
  }

  const res = await fetch(`${PSI_ENDPOINT}?${params.toString()}`);
  const data = await res.json();

  if (!res.ok) {
    const message = data?.error?.message || 'Erreur PageSpeed Insights';
    throw new Error(message);
  }

  return data;
}

// The PSI Lighthouse runner occasionally fails transiently with a generic
// "Something went wrong" 500, unrelated to the request itself — retrying
// once resolves the vast majority of these.
async function fetchPsi(url: string, strategy: 'mobile' | 'desktop', categories: string[]) {
  try {
    return await fetchPsiOnce(url, strategy, categories);
  } catch {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return fetchPsiOnce(url, strategy, categories);
  }
}

const round1 = (n: number) => Math.round(n * 10) / 10;
const round2 = (n: number) => Math.round(n * 100) / 100;

function extractStrategy(data: any): Strategy {
  const audits = data?.lighthouseResult?.audits ?? {};
  const categories = data?.lighthouseResult?.categories ?? {};

  return {
    score: Math.round((categories.performance?.score ?? 0) * 100),
    lcp: round1((audits['largest-contentful-paint']?.numericValue ?? 0) / 1000),
    cls: round2(audits['cumulative-layout-shift']?.numericValue ?? 0),
    fcp: round1((audits['first-contentful-paint']?.numericValue ?? 0) / 1000),
    tbt: Math.round(audits['total-blocking-time']?.numericValue ?? 0),
  };
}

function extractSeo(data: any) {
  const audits = data?.lighthouseResult?.audits ?? {};
  const categories = data?.lighthouseResult?.categories ?? {};

  return {
    score: Math.round((categories.seo?.score ?? 0) * 100),
    hasTitle: audits['document-title']?.score === 1,
    hasDescription: audits['meta-description']?.score === 1,
    isIndexable: audits['is-crawlable']?.score === 1,
    hasViewport: audits['viewport-insight']?.score === 1,
  };
}

function extractAccessibility(data: any) {
  const categories = data?.lighthouseResult?.categories ?? {};
  return { score: Math.round((categories.accessibility?.score ?? 0) * 100) };
}

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

  try {
    const [mobileData, desktopData] = await Promise.all([
      fetchPsi(normalized, 'mobile', ['performance', 'seo', 'accessibility']),
      fetchPsi(normalized, 'desktop', ['performance']),
    ]);

    return NextResponse.json({
      mobile: extractStrategy(mobileData),
      desktop: extractStrategy(desktopData),
      seo: extractSeo(mobileData),
      accessibility: extractAccessibility(mobileData),
      url: normalized,
    });
  } catch (error) {
    console.error('Erreur audit PageSpeed:', error);
    return NextResponse.json(
      { error: "Impossible d'analyser ce site. Vérifiez que l'URL est correcte et accessible publiquement." },
      { status: 502 }
    );
  }
}
