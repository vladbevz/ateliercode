'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, X, AlertTriangle } from 'lucide-react';
import type { AuditResult } from '../api/audit/route';

type Status = 'good' | 'warning' | 'bad';

// ─────────────────────────────────────────────────────────────────────────
// Thresholds
// ─────────────────────────────────────────────────────────────────────────

function scoreStatus(score: number): Status {
  if (score >= 90) return 'good';
  if (score >= 50) return 'warning';
  return 'bad';
}
function lcpStatus(seconds: number): Status {
  if (seconds <= 2.5) return 'good';
  if (seconds <= 4) return 'warning';
  return 'bad';
}
function clsStatus(value: number): Status {
  if (value <= 0.1) return 'good';
  if (value <= 0.25) return 'warning';
  return 'bad';
}
function fcpStatus(seconds: number): Status {
  if (seconds <= 1.8) return 'good';
  if (seconds <= 3) return 'warning';
  return 'bad';
}
function tbtStatus(ms: number): Status {
  if (ms <= 200) return 'good';
  if (ms <= 600) return 'warning';
  return 'bad';
}
function ttiStatus(seconds: number): Status {
  if (seconds <= 3.8) return 'good';
  if (seconds <= 7.3) return 'warning';
  return 'bad';
}
function h1Status(count: number): 'good' | 'missing' | 'multiple' {
  if (count === 0) return 'missing';
  if (count > 1) return 'multiple';
  return 'good';
}
function securityStatus(grade: string): Status {
  if (grade === 'A' || grade === 'A+' || grade === 'B') return 'good';
  if (grade === 'C') return 'warning';
  return 'bad';
}

// ─────────────────────────────────────────────────────────────────────────
// Formatting
// ─────────────────────────────────────────────────────────────────────────

function displayUrl(raw: string): string {
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(withProtocol).hostname.replace(/^www\./, '');
  } catch {
    return raw;
  }
}

function formatAuditDate(date: Date): string {
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatMB(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function scoreVerdict(score: number): string {
  if (score >= 90) return "C'est excellent.";
  if (score >= 75) return "C'est bien, mais perfectible.";
  if (score >= 50) return "C'est moyen.";
  return "C'est insuffisant.";
}

function cardStatusLabel(score: number): { label: string; className: string } {
  if (score >= 90) return { label: 'Excellent', className: 'text-green-600' };
  if (score >= 75) return { label: 'Bien', className: 'text-green-600' };
  if (score >= 50) return { label: 'Moyen', className: 'text-orange-500' };
  return { label: 'Insuffisant', className: 'text-red-600' };
}

// ─────────────────────────────────────────────────────────────────────────
// Small shared UI bits
// ─────────────────────────────────────────────────────────────────────────

function StatusIcon({ status }: { status: Status }) {
  if (status === 'good') return <Check className="w-4 h-4 text-green-600 shrink-0" />;
  if (status === 'warning') return <AlertTriangle className="w-4 h-4 text-orange-500 shrink-0" />;
  return <X className="w-4 h-4 text-red-500 shrink-0" />;
}

function ScoreCard({ label, score }: { label: string; score: number }) {
  const status = cardStatusLabel(score);
  const barColor = score >= 90 ? '#16a34a' : score >= 50 ? '#ea580c' : '#dc2626';
  const numberClass = score >= 90 ? 'text-green-600' : score >= 50 ? 'text-orange-600' : 'text-red-600';
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <p className="font-mono text-xs uppercase tracking-wide text-gray-400 mb-4">{label}</p>
      <div className="flex items-baseline gap-1 mb-4">
        <span className={`text-4xl font-bold ${numberClass}`}>{score}</span>
        <span className="text-lg text-gray-400">/100</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden w-full mb-3">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${score}%`, backgroundColor: barColor }} />
      </div>
      <p className={`text-sm font-medium ${status.className}`}>{status.label}</p>
    </div>
  );
}

function SectionTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full text-sm border-collapse min-w-125">{children}</table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wide whitespace-nowrap">{children}</th>;
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="py-3 px-4 text-gray-600 whitespace-nowrap">{children}</td>;
}

// ─────────────────────────────────────────────────────────────────────────
// Problems & good-things aggregation
// ─────────────────────────────────────────────────────────────────────────

type Priority = 1 | 2 | 3;
type Problem = { key: string; priority: Priority; title: string; description: string; cause: string };

function buildProblems(result: AuditResult): Problem[] {
  const problems: Problem[] = [];
  const mobile = result.pagespeed?.mobile;
  const desktop = result.pagespeed?.desktop;

  // Priorité 1 — impact critique
  if (mobile && mobile.performance < 50) {
    problems.push({
      key: 'perf_critical',
      priority: 1,
      title: 'Performance mobile critique',
      description: `Votre site obtient ${mobile.performance}/100 sur mobile — largement sous le seuil acceptable. Cela affecte directement votre classement Google et le taux d'abandon des visiteurs.`,
      cause: 'Généralement causé par des images non optimisées, un hébergement lent ou trop de scripts chargés au démarrage.',
    });
  }
  if (mobile && mobile.lcp > 4) {
    problems.push({
      key: 'lcp_critical_mobile',
      priority: 1,
      title: 'Chargement très lent sur mobile',
      description: `Le plus grand élément de la page met ${mobile.lcp} s à s'afficher sur mobile. Google pénalise fortement tout ce qui dépasse 2.5 s.`,
      cause: 'Images non optimisées, hébergement lent, ou ressources bloquantes chargées avant le contenu principal.',
    });
  }
  if (desktop && desktop.lcp > 4) {
    problems.push({
      key: 'lcp_critical_desktop',
      priority: 1,
      title: 'Chargement très lent sur ordinateur',
      description: `Le plus grand élément de la page met ${desktop.lcp} s à s'afficher sur ordinateur — bien au-dessus du seuil de 2.5 s recommandé par Google.`,
      cause: 'Images non optimisées, hébergement lent, ou ressources bloquantes chargées avant le contenu principal.',
    });
  }
  if (result.local && !result.local.hasHTTPS) {
    problems.push({
      key: 'no_https',
      priority: 1,
      title: 'Site non sécurisé (HTTPS absent)',
      description: "Votre site n'est pas servi en HTTPS. Les navigateurs affichent un avertissement « Non sécurisé », et Google déclasse les sites sans certificat SSL.",
      cause: "Absence de certificat SSL configuré sur l'hébergement.",
    });
  }
  if (result.safeBrowsing && !result.safeBrowsing.isSafe) {
    problems.push({
      key: 'safe_browsing_threat',
      priority: 1,
      title: 'Menace de sécurité détectée par Google',
      description: `Google Safe Browsing signale ce site : ${result.safeBrowsing.threats.join(', ')}. Les navigateurs peuvent bloquer l'accès et Google peut le retirer des résultats de recherche.`,
      cause: 'Site probablement compromis (piratage, injection de code malveillant) ou hébergeant du contenu trompeur.',
    });
  }

  // Priorité 2 — important
  if (result.content && result.content.metaDescStatus === 'missing') {
    problems.push({
      key: 'meta_desc_missing',
      priority: 2,
      title: 'Description SEO absente',
      description: "Votre site n'a pas de meta description. C'est le texte qui apparaît sous votre lien dans Google — sans lui, Google génère quelque chose d'aléatoire.",
      cause: 'À ajouter sur chaque page : une phrase de 140 à 160 caractères qui décrit le contenu.',
    });
  }
  if (mobile && mobile.seo < 70) {
    problems.push({
      key: 'seo_low',
      priority: 2,
      title: 'Score SEO insuffisant',
      description: `Votre score SEO technique est de ${mobile.seo}/100. Google a du mal à comprendre et à classer votre site correctement.`,
      cause: 'Éléments manquants ou mal configurés qui aident Google à identifier votre contenu.',
    });
  }
  if (result.security && securityStatus(result.security.grade) === 'bad') {
    problems.push({
      key: 'security_low',
      priority: 2,
      title: 'Protections de sécurité insuffisantes',
      description: `Le grade de sécurité de votre site est ${result.security.grade} (${result.security.score}/100). Des en-têtes de sécurité importants sont absents.`,
      cause: 'En-têtes comme Content-Security-Policy ou Strict-Transport-Security non configurés sur le serveur.',
    });
  }
  if (result.content && result.content.totalImages > 0 && result.content.imagesWithoutAlt / result.content.totalImages > 0.5) {
    problems.push({
      key: 'images_alt',
      priority: 2,
      title: 'Trop d\'images sans texte alternatif',
      description: `${result.content.imagesWithoutAlt} images sur ${result.content.totalImages} n'ont pas d'attribut alt. Cela nuit à votre référencement et à l'accessibilité du site.`,
      cause: "Attribut alt oublié lors de l'ajout des images au site.",
    });
  }

  // Priorité 3 — recommandé
  if (result.content && !result.content.hasSchema) {
    problems.push({
      key: 'schema_missing',
      priority: 3,
      title: 'Données structurées absentes (Schema.org)',
      description: "Votre site n'utilise pas de données structurées. Google ne peut pas afficher de rich snippets (étoiles, prix, horaires) dans les résultats de recherche.",
      cause: 'Balisage Schema.org (JSON-LD) non intégré aux pages.',
    });
  }
  if (result.content && !result.content.canonical) {
    problems.push({
      key: 'canonical_missing',
      priority: 3,
      title: 'Balise canonical absente',
      description: 'Sans balise canonical, Google peut indexer plusieurs versions de la même page et diluer votre référencement.',
      cause: 'Balise <link rel="canonical"> non ajoutée dans le <head> des pages.',
    });
  }
  if (result.dns && !result.dns.hasDMARC) {
    problems.push({
      key: 'dmarc_missing',
      priority: 3,
      title: 'Protection DMARC absente',
      description: "Sans DMARC, votre nom de domaine peut être utilisé pour usurper votre identité dans des emails frauduleux.",
      cause: 'Enregistrement DNS DMARC (_dmarc.votredomaine) non configuré.',
    });
  }
  if (result.content && result.content.pageSize > 2 * 1024 * 1024) {
    problems.push({
      key: 'page_size',
      priority: 3,
      title: 'Page trop lourde',
      description: `Votre page pèse ${formatMB(result.content.pageSize)} — au-delà de 2 MB recommandés, chaque visite consomme plus de données et met plus de temps à charger.`,
      cause: 'Images non compressées, polices ou scripts trop nombreux.',
    });
  }

  return problems.sort((a, b) => a.priority - b.priority);
}

function buildGoodMetrics(result: AuditResult): string[] {
  const good: string[] = [];
  const mobile = result.pagespeed?.mobile;
  const desktop = result.pagespeed?.desktop;
  const content = result.content;
  const local = result.local;

  if (mobile && scoreStatus(mobile.performance) === 'good') good.push(`Performance mobile excellente (${mobile.performance}/100)`);
  if (desktop && scoreStatus(desktop.performance) === 'good') good.push(`Performance desktop excellente (${desktop.performance}/100)`);
  if (mobile && scoreStatus(mobile.accessibility) === 'good') good.push(`Accessibilité solide (${mobile.accessibility}/100)`);
  if (mobile && scoreStatus(mobile.bestPractices) === 'good') good.push(`Bonnes pratiques respectées (${mobile.bestPractices}/100)`);
  if (mobile && scoreStatus(mobile.seo) === 'good') good.push(`Score SEO technique solide (${mobile.seo}/100)`);

  if (content?.titleStatus === 'good') good.push('Titre SEO bien dimensionné');
  if (content?.metaDescStatus === 'good') good.push('Description SEO bien dimensionnée');
  if (content && h1Status(content.h1Count) === 'good') good.push('Un seul titre H1, comme recommandé');
  if (content?.canonical) good.push('Balise canonical présente');
  if (content?.hasSchema) good.push('Données structurées Schema.org présentes');
  if (content && content.totalImages > 0 && content.imagesWithoutAlt === 0) good.push('Toutes les images ont un texte alternatif');
  if (content?.hasFavicon) good.push('Favicon présent');
  if (content?.hasGA) good.push('Suivi analytique configuré');
  if (content && content.pageSize <= 2 * 1024 * 1024) good.push('Poids de page raisonnable');

  if (local?.hasHTTPS) good.push('Site servi en HTTPS');
  if (local?.hasPhone) good.push('Numéro de téléphone détecté sur le site');
  if (local?.hasAddress) good.push('Adresse détectée sur le site');

  if (result.robots?.hasRobots && !result.robots.robotsBlocked) good.push('Fichier robots.txt présent et non bloquant');
  if (result.sitemap?.hasSitemap) good.push('Sitemap XML présent');
  if (result.security && securityStatus(result.security.grade) === 'good') good.push(`Bon niveau de sécurité (grade ${result.security.grade})`);
  if (result.safeBrowsing?.isSafe) good.push('Aucune menace détectée par Google Safe Browsing');
  if (result.dns?.hasSPF) good.push('Protection SPF configurée');
  if (result.dns?.hasDMARC) good.push('Protection DMARC configurée');

  return good;
}

// ─────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────

export default function Audit() {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'results'>('idle');
  const [submittedUrl, setSubmittedUrl] = useState('');
  const [result, setResult] = useState<AuditResult | null>(null);
  const [analyzedAt, setAnalyzedAt] = useState<Date | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setSubmittedUrl(inputValue.trim());
    setErrorMessage(null);
    setStatus('loading');

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: inputValue.trim() }),
      });
      const data = await res.json();

      if (!res.ok || data.error) {
        setErrorMessage(data.error || 'Une erreur est survenue. Réessayez.');
        setStatus('idle');
        return;
      }

      setResult(data);
      setAnalyzedAt(new Date());
      setStatus('results');
    } catch {
      setErrorMessage('Impossible de contacter le serveur. Réessayez.');
      setStatus('idle');
    }
  }

  function handleReset() {
    setStatus('idle');
    setResult(null);
    setErrorMessage(null);
    setInputValue('');
    window.scrollTo(0, 0);
  }

  return (
    <section className="bg-white min-h-screen pt-16 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">

        {status !== 'results' && (
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-wide text-gray-400 mb-5">
              Outil gratuit · AtelierCode
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Mon site est-il efficace ?
            </h1>
            <p className="text-lg text-gray-500 mb-8">
              Entrez l&apos;URL de votre site pour obtenir un audit complet : vitesse, SEO, sécurité, mobile. Résultat en quelques secondes.
            </p>

            {status === 'idle' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <p className="text-sm text-red-600">{errorMessage}</p>
                )}
                <input
                  type="url"
                  required
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="https://votresite.fr"
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150 btn-sweep"
                >
                  Analyser mon site
                </button>
                <p className="font-mono text-xs uppercase tracking-wide text-gray-400">
                  Gratuit · Aucune inscription · Résultats instantanés
                </p>
              </form>
            )}

            {status === 'loading' && (
              <div className="flex items-center gap-3 py-12 justify-center">
                <div className="w-4 h-4 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
                <span className="text-sm text-gray-500">
                  Analyse de {displayUrl(submittedUrl)} en cours...
                </span>
              </div>
            )}
          </div>
        )}

        {status === 'results' && result && (
          <ResultsView result={result} analyzedAt={analyzedAt} onReset={handleReset} />
        )}

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Results view
// ─────────────────────────────────────────────────────────────────────────

const TABS = ['Performance', 'SEO & Contenu', 'Sécurité', 'CO₂'];

function ResultsView({
  result,
  analyzedAt,
  onReset,
}: {
  result: AuditResult;
  analyzedAt: Date | null;
  onReset: () => void;
}) {
  const problems = buildProblems(result);
  const goodMetrics = buildGoodMetrics(result);
  const mobileScore = result.pagespeed?.mobile.performance ?? null;

  return (
    <div>
      {/* En-tête */}
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-wide text-gray-400 mb-4">
          Résultats pour {displayUrl(result.url)}
          {analyzedAt && <> · Analysé le {formatAuditDate(analyzedAt)}</>}
        </p>
        {mobileScore !== null ? (
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Votre site obtient un score de {mobileScore}/100 sur mobile. {scoreVerdict(mobileScore)}
          </h2>
        ) : (
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Voici les résultats de votre audit.
          </h2>
        )}
      </div>

      {/* Navigation par ancre */}
      <nav className="flex gap-4 border-b border-gray-200 mb-8 overflow-x-auto">
        {TABS.map((tab) => (
          <a
            key={tab}
            href={`#${tab}`}
            className="text-sm text-gray-600 pb-3 whitespace-nowrap hover:text-gray-900 transition-colors border-b-2 border-transparent hover:border-gray-900"
          >
            {tab}
          </a>
        ))}
      </nav>

      <div className="space-y-16">
        <PerformanceSection result={result} />
        <SeoContentSection result={result} />
        <SecuritySection result={result} />
        <CarbonSection result={result} />

        {/* Ce qu'il faut corriger */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Ce qu&apos;il faut corriger</h3>
          {problems.length === 0 ? (
            <div className="border border-gray-200 rounded-lg p-5 flex items-center gap-3">
              <Check className="w-5 h-5 text-green-600 shrink-0" />
              <p className="text-sm text-gray-600">Votre site est bien optimisé.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {problems.map((p) => (
                <div key={p.key} className="border border-gray-200 rounded-lg p-5 space-y-3">
                  <div className="flex items-start gap-3">
                    {p.priority === 1 ? (
                      <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    ) : p.priority === 2 ? (
                      <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    )}
                    <h4 className="font-bold text-gray-900">{p.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.cause}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Ce qui fonctionne */}
        {goodMetrics.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Ce qui fonctionne</h3>
            <ul className="space-y-2">
              {goodMetrics.map((m) => (
                <li key={m} className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-600 shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA final */}
        <div className="border-t border-gray-200 pt-8 flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p className="font-medium text-gray-900 mb-1">Ces problèmes peuvent être corrigés.</p>
            <p className="text-sm text-gray-500">AtelierCode développe des sites rapides et bien référencés à Nîmes.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="text-sm bg-gray-900 text-white px-5 py-2.5 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Décrire mon projet
            </Link>
            <button
              onClick={onReset}
              className="text-sm border border-gray-200 text-gray-600 px-5 py-2.5 rounded-md hover:border-gray-300 transition-colors"
            >
              Analyser un autre site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Section 1 — Performance
// ─────────────────────────────────────────────────────────────────────────

function PerformanceSection({ result }: { result: AuditResult }) {
  const ps = result.pagespeed;

  return (
    <div id="Performance" className="scroll-mt-24">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Performance</h3>

      {!ps ? (
        <p className="text-sm text-gray-500 border border-gray-200 rounded-lg p-5">
          Données de performance indisponibles pour ce site.
        </p>
      ) : (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <ScoreCard label="Mobile" score={ps.mobile.performance} />
            <ScoreCard label="Desktop" score={ps.desktop.performance} />
            <ScoreCard label="Accessibilité" score={ps.mobile.accessibility} />
            <ScoreCard label="Bonnes pratiques" score={ps.mobile.bestPractices} />
          </div>

          <SectionTable>
            <thead>
              <tr className="border-b border-gray-200">
                <Th>Métrique</Th>
                <Th>Mobile</Th>
                <Th>Desktop</Th>
                <Th>Référence</Th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">LCP</span></Td>
                <Td><span className="inline-flex items-center gap-1.5">{ps.mobile.lcp} s <StatusIcon status={lcpStatus(ps.mobile.lcp)} /></span></Td>
                <Td><span className="inline-flex items-center gap-1.5">{ps.desktop.lcp} s <StatusIcon status={lcpStatus(ps.desktop.lcp)} /></span></Td>
                <Td>&lt; 2.5 s</Td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">CLS</span></Td>
                <Td><span className="inline-flex items-center gap-1.5">{ps.mobile.cls} <StatusIcon status={clsStatus(ps.mobile.cls)} /></span></Td>
                <Td><span className="inline-flex items-center gap-1.5">{ps.desktop.cls} <StatusIcon status={clsStatus(ps.desktop.cls)} /></span></Td>
                <Td>&lt; 0.1</Td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">FCP</span></Td>
                <Td><span className="inline-flex items-center gap-1.5">{ps.mobile.fcp} s <StatusIcon status={fcpStatus(ps.mobile.fcp)} /></span></Td>
                <Td><span className="inline-flex items-center gap-1.5">{ps.desktop.fcp} s <StatusIcon status={fcpStatus(ps.desktop.fcp)} /></span></Td>
                <Td>&lt; 1.8 s</Td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">TBT</span></Td>
                <Td><span className="inline-flex items-center gap-1.5">{ps.mobile.tbt} ms <StatusIcon status={tbtStatus(ps.mobile.tbt)} /></span></Td>
                <Td><span className="inline-flex items-center gap-1.5">{ps.desktop.tbt} ms <StatusIcon status={tbtStatus(ps.desktop.tbt)} /></span></Td>
                <Td>&lt; 200 ms</Td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">TTI</span></Td>
                <Td><span className="inline-flex items-center gap-1.5">{ps.mobile.tti} s <StatusIcon status={ttiStatus(ps.mobile.tti)} /></span></Td>
                <Td><span className="inline-flex items-center gap-1.5">{ps.desktop.tti} s <StatusIcon status={ttiStatus(ps.desktop.tti)} /></span></Td>
                <Td>&lt; 3.8 s</Td>
              </tr>
            </tbody>
          </SectionTable>

          {ps.mobile.opportunities.length > 0 && (
            <div>
              <p className="text-sm font-bold text-gray-900 mb-2">Opportunités d&apos;amélioration</p>
              <div>
                {ps.mobile.opportunities.map((opp) => (
                  <div key={opp} className="flex items-start gap-3 text-sm py-2 border-b border-gray-100 last:border-b-0">
                    <AlertTriangle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{opp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Section 2 — SEO & Contenu
// ─────────────────────────────────────────────────────────────────────────

function ogCompleteness(result: AuditResult): { status: Status; value: string } {
  const c = result.content;
  if (!c) return { status: 'bad', value: '—' };
  const present = [c.ogTitle, c.ogDescription, c.ogImage].filter(Boolean).length;
  if (present === 3) return { status: 'good', value: 'Complet' };
  if (present === 0) return { status: 'bad', value: 'Absent' };
  return { status: 'warning', value: c.ogImage ? 'Incomplet' : "Pas d'image" };
}

function SeoContentSection({ result }: { result: AuditResult }) {
  const c = result.content;
  const l = result.local;

  return (
    <div id="SEO & Contenu" className="scroll-mt-24">
      <h3 className="text-lg font-bold text-gray-900 mb-4">SEO &amp; Contenu</h3>

      {!c ? (
        <p className="text-sm text-gray-500 border border-gray-200 rounded-lg p-5">
          Contenu de la page indisponible pour ce site.
        </p>
      ) : (
        <div className="space-y-8">
          <SectionTable>
            <thead>
              <tr className="border-b border-gray-200">
                <Th>Élément</Th>
                <Th>Statut</Th>
                <Th>Valeur</Th>
                <Th>Recommandation</Th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">Titre</span></Td>
                <Td>
                  <span className="inline-flex items-center gap-1.5">
                    <StatusIcon status={c.titleStatus === 'good' ? 'good' : c.titleStatus === 'missing' ? 'bad' : 'warning'} />
                    {c.titleStatus === 'good' ? 'Bon' : c.titleStatus === 'missing' ? 'Absent' : c.titleStatus === 'too_short' ? 'Trop court' : 'Trop long'} ({c.titleLength} car.)
                  </span>
                </Td>
                <Td><span className="truncate block max-w-50">{c.title || '—'}</span></Td>
                <Td>Idéal 50-65 car.</Td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">Meta description</span></Td>
                <Td>
                  <span className="inline-flex items-center gap-1.5">
                    <StatusIcon status={c.metaDescStatus === 'good' ? 'good' : c.metaDescStatus === 'missing' ? 'bad' : 'warning'} />
                    {c.metaDescStatus === 'good' ? 'Bonne' : c.metaDescStatus === 'missing' ? 'Absente' : c.metaDescStatus === 'too_short' ? 'Trop courte' : 'Trop longue'} ({c.metaDescLength} car.)
                  </span>
                </Td>
                <Td><span className="truncate block max-w-50">{c.metaDesc || '—'}</span></Td>
                <Td>Idéal 140-160 car.</Td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">H1</span></Td>
                <Td>
                  <span className="inline-flex items-center gap-1.5">
                    <StatusIcon status={h1Status(c.h1Count) === 'good' ? 'good' : h1Status(c.h1Count) === 'missing' ? 'bad' : 'warning'} />
                    {h1Status(c.h1Count) === 'good' ? 'Un seul' : h1Status(c.h1Count) === 'missing' ? 'Absent' : `${c.h1Count} détectés`}
                  </span>
                </Td>
                <Td><span className="truncate block max-w-50">{c.h1Text || '—'}</span></Td>
                <Td>Un seul H1 par page</Td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">Canonical</span></Td>
                <Td><span className="inline-flex items-center gap-1.5"><StatusIcon status={c.canonical ? 'good' : 'warning'} />{c.canonical ? 'Présent' : 'Absent'}</span></Td>
                <Td><span className="truncate block max-w-50">{c.canonical || '—'}</span></Td>
                <Td>Recommandé</Td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">Open Graph</span></Td>
                <Td><span className="inline-flex items-center gap-1.5"><StatusIcon status={ogCompleteness(result).status} />{ogCompleteness(result).value}</span></Td>
                <Td>{c.ogImage ? 'Image présente' : "Pas d'image"}</Td>
                <Td>Pour partage réseaux</Td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">Schema.org</span></Td>
                <Td><span className="inline-flex items-center gap-1.5"><StatusIcon status={c.hasSchema ? 'good' : 'bad'} />{c.hasSchema ? 'Présent' : 'Absent'}</span></Td>
                <Td>{c.schemaTypes.length > 0 ? c.schemaTypes.join(', ') : '—'}</Td>
                <Td>Pour rich snippets Google</Td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">Images sans alt</span></Td>
                <Td>
                  <span className="inline-flex items-center gap-1.5">
                    <StatusIcon status={c.imagesWithoutAlt === 0 ? 'good' : c.totalImages > 0 && c.imagesWithoutAlt / c.totalImages > 0.5 ? 'bad' : 'warning'} />
                    {c.imagesWithoutAlt}/{c.totalImages}
                  </span>
                </Td>
                <Td>{c.totalImages > 0 ? `${Math.round((c.imagesWithoutAlt / c.totalImages) * 100)}% manquants` : '—'}</Td>
                <Td>Impact SEO + accessibilité</Td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">Sitemap</span></Td>
                <Td><span className="inline-flex items-center gap-1.5"><StatusIcon status={result.sitemap?.hasSitemap ? 'good' : 'warning'} />{result.sitemap?.hasSitemap ? 'Présent' : 'Absent'}</span></Td>
                <Td>{result.sitemap?.hasSitemap ? '/sitemap.xml' : '—'}</Td>
                <Td>Recommandé</Td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <Td><span className="font-medium text-gray-900">Robots.txt</span></Td>
                <Td>
                  <span className="inline-flex items-center gap-1.5">
                    <StatusIcon status={!result.robots?.hasRobots ? 'warning' : result.robots.robotsBlocked ? 'bad' : 'good'} />
                    {!result.robots?.hasRobots ? 'Absent' : result.robots.robotsBlocked ? 'Bloque les moteurs' : 'Présent'}
                  </span>
                </Td>
                <Td>—</Td>
                <Td>Recommandé</Td>
              </tr>
            </tbody>
          </SectionTable>

          {l && (
            <div>
              <p className="text-sm font-bold text-gray-900 mb-2">Local SEO</p>
              <SectionTable>
                <thead>
                  <tr className="border-b border-gray-200">
                    <Th>Signal</Th>
                    <Th>Statut</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <Td><span className="font-medium text-gray-900">Numéro de téléphone</span></Td>
                    <Td><StatusIcon status={l.hasPhone ? 'good' : 'bad'} /></Td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <Td><span className="font-medium text-gray-900">Adresse / code postal</span></Td>
                    <Td><StatusIcon status={l.hasAddress ? 'good' : 'bad'} /></Td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <Td><span className="font-medium text-gray-900">Google Analytics</span></Td>
                    <Td><StatusIcon status={c.hasGA ? 'good' : 'bad'} /></Td>
                  </tr>
                </tbody>
              </SectionTable>
            </div>
          )}

          {c.ogImage && (
            <div>
              <p className="text-sm font-bold text-gray-900 mb-2">Aperçu du partage sur les réseaux</p>
              <div className="border border-gray-200 rounded-lg overflow-hidden max-w-sm">
                <div className="relative aspect-video">
                  <Image src={c.ogImage} alt="" fill className="object-cover" unoptimized />
                </div>
                <div className="p-3 bg-gray-50">
                  <p className="text-xs text-gray-400 uppercase">{displayUrl(result.url)}</p>
                  <p className="text-sm font-medium text-gray-900 truncate">{c.ogTitle || c.title}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">{c.ogDescription || c.metaDesc}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Section 3 — Sécurité & Technique
// ─────────────────────────────────────────────────────────────────────────

function SecuritySection({ result }: { result: AuditResult }) {
  const c = result.content;
  const l = result.local;
  const sec = result.security;

  return (
    <div id="Sécurité" className="scroll-mt-24">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Sécurité &amp; Technique</h3>

      <SectionTable>
        <thead>
          <tr className="border-b border-gray-200">
            <Th>Check</Th>
            <Th>Statut</Th>
            <Th>Détail</Th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <Td><span className="font-medium text-gray-900">HTTPS</span></Td>
            <Td><StatusIcon status={l?.hasHTTPS ? 'good' : 'bad'} /></Td>
            <Td>{l?.hasHTTPS ? 'SSL actif' : 'Non sécurisé'}</Td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <Td><span className="font-medium text-gray-900">Safe Browsing Google</span></Td>
            <Td>{result.safeBrowsing ? <StatusIcon status={result.safeBrowsing.isSafe ? 'good' : 'bad'} /> : <span className="text-gray-300">—</span>}</Td>
            <Td>{result.safeBrowsing ? (result.safeBrowsing.isSafe ? 'Aucune menace détectée' : result.safeBrowsing.threats.join(', ')) : 'Non vérifié'}</Td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <Td><span className="font-medium text-gray-900">En-têtes de sécurité</span></Td>
            <Td>{sec ? <StatusIcon status={securityStatus(sec.grade)} /> : <span className="text-gray-300">—</span>}</Td>
            <Td>{sec ? `Grade ${sec.grade} (${sec.score}/100)` : 'Non disponible'}</Td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <Td><span className="font-medium text-gray-900">SPF (email)</span></Td>
            <Td>{result.dns ? <StatusIcon status={result.dns.hasSPF ? 'good' : 'warning'} /> : <span className="text-gray-300">—</span>}</Td>
            <Td>Protège contre l&apos;usurpation</Td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <Td><span className="font-medium text-gray-900">DMARC (email)</span></Td>
            <Td>{result.dns ? <StatusIcon status={result.dns.hasDMARC ? 'good' : 'warning'} /> : <span className="text-gray-300">—</span>}</Td>
            <Td>Protection email</Td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <Td><span className="font-medium text-gray-900">Favicon</span></Td>
            <Td>{c ? <StatusIcon status={c.hasFavicon ? 'good' : 'warning'} /> : <span className="text-gray-300">—</span>}</Td>
            <Td>—</Td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <Td><span className="font-medium text-gray-900">Scripts externes</span></Td>
            <Td>{c ? <StatusIcon status={c.externalScripts > 10 ? 'warning' : 'good'} /> : <span className="text-gray-300">—</span>}</Td>
            <Td>{c ? `${c.externalScripts}${c.externalScripts > 10 ? ' — risque performance' : ''}` : '—'}</Td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <Td><span className="font-medium text-gray-900">Taille de page</span></Td>
            <Td>{c ? <StatusIcon status={c.pageSize > 2 * 1024 * 1024 ? 'warning' : 'good'} /> : <span className="text-gray-300">—</span>}</Td>
            <Td>{c ? `${formatMB(c.pageSize)} — recommandé < 2 MB` : '—'}</Td>
          </tr>
        </tbody>
      </SectionTable>

      {sec && (
        <p className="text-sm text-gray-500 mt-4">
          Le grade de sécurité ({sec.grade}) est calculé à partir des en-têtes de sécurité renvoyés par votre serveur —
          chiffrement, politique de contenu, protection contre les attaques courantes. Un grade inférieur à B peut
          signaler votre site comme peu fiable.
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Section 4 — CO₂ & Impact
// ─────────────────────────────────────────────────────────────────────────

function CarbonSection({ result }: { result: AuditResult }) {
  const carbon = result.carbon;

  return (
    <div id="CO₂" className="scroll-mt-24">
      <h3 className="text-lg font-bold text-gray-900 mb-4">CO₂ &amp; Impact</h3>

      {!carbon ? (
        <p className="text-sm text-gray-500 border border-gray-200 rounded-lg p-5">
          Estimation carbone indisponible pour ce site.
        </p>
      ) : (
        <div className="border border-gray-200 rounded-lg p-6">
          <p className="text-3xl font-bold text-gray-900 mb-1">{carbon.gramsPerVisit}g</p>
          <p className="text-sm text-gray-500 mb-4">de CO₂ par visite</p>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
            <div style={{ width: `${carbon.cleanerThan}%` }} className="h-full bg-gray-900 rounded-full" />
          </div>
          <p className="text-sm text-gray-600">
            Votre site est plus propre que <strong>{carbon.cleanerThan}%</strong> des sites testés.
            {carbon.cleanerThan < 50
              ? " Des images lourdes et des scripts nombreux augmentent l'empreinte carbone de chaque visite."
              : ' C\'est un bon score — votre site est relativement léger.'}
          </p>
        </div>
      )}
    </div>
  );
}
