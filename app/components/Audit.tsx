'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Check, X, AlertTriangle } from 'lucide-react';

type Strategy = { score: number; lcp: number; cls: number; fcp: number; tbt: number };

type AuditResult = {
  mobile: Strategy;
  desktop: Strategy;
  seo: { score: number; hasTitle: boolean; hasDescription: boolean; isIndexable: boolean; hasViewport: boolean };
  accessibility: { score: number };
  url: string;
};

type Status = 'good' | 'warning' | 'bad';

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
function boolStatus(value: boolean): Status {
  return value ? 'good' : 'bad';
}

function scoreVerdict(score: number): string {
  if (score >= 90) return "C'est excellent.";
  if (score >= 75) return "C'est bien, mais perfectible.";
  if (score >= 50) return "C'est moyen.";
  return "C'est insuffisant.";
}

function cardStatusLabel(score: number, kind: 'speed' | 'seo'): { label: string; className: string } {
  if (score >= 90) return { label: 'Excellent', className: 'text-green-600' };
  if (score >= 75) return { label: 'Bien', className: 'text-green-600' };
  if (score >= 50) return { label: 'Moyen', className: 'text-orange-500' };
  return { label: kind === 'speed' ? 'Lent' : 'Insuffisant', className: 'text-red-600' };
}

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

function StatusIcon({ status }: { status: Status }) {
  if (status === 'good') return <Check className="w-4 h-4 text-green-600 shrink-0" />;
  if (status === 'warning') return <AlertTriangle className="w-4 h-4 text-orange-500 shrink-0" />;
  return <X className="w-4 h-4 text-red-500 shrink-0" />;
}

const explanations = {
  lcp_slow: {
    title: 'Chargement trop lent',
    problem: (value: string, device: string) =>
      `Votre page met ${value} à charger sur ${device}. Google pénalise les sites qui dépassent 2.5 secondes — ce qui vous place plus bas dans les résultats de recherche.`,
    causes: 'Ce qui cause généralement ce problème : images non optimisées, hébergement lent, trop de scripts chargés au démarrage.',
  },
  cls_high: {
    title: 'Instabilité visuelle (CLS)',
    problem: (value: string) =>
      `Les éléments de votre page bougent pendant le chargement (score : ${value}). C'est pénalisé par Google depuis 2021 et frustrant pour vos visiteurs.`,
    causes: "Cause fréquente : images sans dimensions définies, publicités qui s'insèrent et décalent le contenu.",
  },
  seo_low: {
    title: 'Score SEO insuffisant',
    problem: (value: string) =>
      `Votre score SEO technique est de ${value}/100. Google a du mal à comprendre et à classer votre site correctement.`,
    causes: 'Éléments manquants ou mal configurés qui aident Google à identifier votre contenu.',
  },
  no_description: {
    title: 'Description SEO absente',
    problem: () =>
      "Votre site n'a pas de meta description. C'est le texte qui apparaît sous votre lien dans Google — sans lui, Google génère quelque chose d'aléatoire.",
    causes: 'À ajouter sur chaque page : une phrase de 150 caractères qui décrit le contenu.',
  },
  performance_low_mobile: {
    title: 'Performance mobile insuffisante',
    problem: (value: string) =>
      `Votre site obtient ${value}/100 sur mobile. Plus de 60% de vos visiteurs arrivent probablement depuis un téléphone.`,
    causes: "Un site lent sur mobile perd des visiteurs — et des clients potentiels — avant même qu'ils aient lu votre contenu.",
  },
};

type Problem = { key: string; status: Status; title: string; problem: string; causes: string };

function buildProblems(result: AuditResult): Problem[] {
  const problems: Problem[] = [];

  const mobilePerf = scoreStatus(result.mobile.score);
  if (mobilePerf !== 'good') {
    problems.push({
      key: 'performance_low_mobile',
      status: mobilePerf,
      title: explanations.performance_low_mobile.title,
      problem: explanations.performance_low_mobile.problem(String(result.mobile.score)),
      causes: explanations.performance_low_mobile.causes,
    });
  }

  const lcpMobile = lcpStatus(result.mobile.lcp);
  if (lcpMobile !== 'good') {
    problems.push({
      key: 'lcp_slow_mobile',
      status: lcpMobile,
      title: explanations.lcp_slow.title,
      problem: explanations.lcp_slow.problem(`${result.mobile.lcp} s`, 'mobile'),
      causes: explanations.lcp_slow.causes,
    });
  }

  const lcpDesktop = lcpStatus(result.desktop.lcp);
  if (lcpDesktop !== 'good') {
    problems.push({
      key: 'lcp_slow_desktop',
      status: lcpDesktop,
      title: explanations.lcp_slow.title,
      problem: explanations.lcp_slow.problem(`${result.desktop.lcp} s`, 'ordinateur'),
      causes: explanations.lcp_slow.causes,
    });
  }

  const clsMobile = clsStatus(result.mobile.cls);
  if (clsMobile !== 'good') {
    problems.push({
      key: 'cls_high_mobile',
      status: clsMobile,
      title: explanations.cls_high.title,
      problem: explanations.cls_high.problem(String(result.mobile.cls)),
      causes: explanations.cls_high.causes,
    });
  }

  const clsDesktop = clsStatus(result.desktop.cls);
  if (clsDesktop !== 'good') {
    problems.push({
      key: 'cls_high_desktop',
      status: clsDesktop,
      title: explanations.cls_high.title,
      problem: explanations.cls_high.problem(String(result.desktop.cls)),
      causes: explanations.cls_high.causes,
    });
  }

  const seoScore = scoreStatus(result.seo.score);
  if (seoScore !== 'good') {
    problems.push({
      key: 'seo_low',
      status: seoScore,
      title: explanations.seo_low.title,
      problem: explanations.seo_low.problem(String(result.seo.score)),
      causes: explanations.seo_low.causes,
    });
  }

  if (!result.seo.hasDescription) {
    problems.push({
      key: 'no_description',
      status: 'bad',
      title: explanations.no_description.title,
      problem: explanations.no_description.problem(),
      causes: explanations.no_description.causes,
    });
  }

  return problems;
}

function buildGoodMetrics(result: AuditResult): string[] {
  const good: string[] = [];

  if (scoreStatus(result.mobile.score) === 'good') good.push(`Performance mobile excellente (${result.mobile.score}/100)`);
  if (scoreStatus(result.desktop.score) === 'good') good.push(`Performance desktop excellente (${result.desktop.score}/100)`);
  if (lcpStatus(result.mobile.lcp) === 'good') good.push(`Chargement rapide sur mobile (${result.mobile.lcp} s)`);
  if (lcpStatus(result.desktop.lcp) === 'good') good.push(`Chargement rapide sur desktop (${result.desktop.lcp} s)`);
  if (clsStatus(result.mobile.cls) === 'good') good.push(`Mise en page stable sur mobile (CLS ${result.mobile.cls})`);
  if (clsStatus(result.desktop.cls) === 'good') good.push(`Mise en page stable sur desktop (CLS ${result.desktop.cls})`);
  if (fcpStatus(result.mobile.fcp) === 'good') good.push(`Premier affichage rapide sur mobile (${result.mobile.fcp} s)`);
  if (fcpStatus(result.desktop.fcp) === 'good') good.push(`Premier affichage rapide sur desktop (${result.desktop.fcp} s)`);
  if (scoreStatus(result.seo.score) === 'good') good.push(`Score SEO technique solide (${result.seo.score}/100)`);
  if (result.seo.hasTitle) good.push('Titre SEO présent');
  if (result.seo.hasDescription) good.push('Description SEO présente');
  if (result.seo.hasViewport) good.push('Site adapté au mobile');
  if (result.seo.isIndexable) good.push('Site indexable par Google');

  return good;
}

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
              Entrez l&apos;URL de votre site pour obtenir un audit complet : vitesse, SEO, mobile. Résultat en 30 secondes.
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

  const scoreCards: { label: string; score: number; kind: 'speed' | 'seo' }[] = [
    { label: 'MOBILE', score: result.mobile.score, kind: 'speed' },
    { label: 'DESKTOP', score: result.desktop.score, kind: 'speed' },
    { label: 'SEO', score: result.seo.score, kind: 'seo' },
  ];

  const rows: {
    label: string;
    mobile: { value: string; status: Status };
    desktop: { value: string; status: Status } | null;
    reference: string;
  }[] = [
    {
      label: 'Performance',
      mobile: { value: String(result.mobile.score), status: scoreStatus(result.mobile.score) },
      desktop: { value: String(result.desktop.score), status: scoreStatus(result.desktop.score) },
      reference: 'Objectif : 90+',
    },
    {
      label: 'LCP (chargement)',
      mobile: { value: `${result.mobile.lcp} s`, status: lcpStatus(result.mobile.lcp) },
      desktop: { value: `${result.desktop.lcp} s`, status: lcpStatus(result.desktop.lcp) },
      reference: 'Bon : < 2.5 s',
    },
    {
      label: 'CLS (stabilité)',
      mobile: { value: String(result.mobile.cls), status: clsStatus(result.mobile.cls) },
      desktop: { value: String(result.desktop.cls), status: clsStatus(result.desktop.cls) },
      reference: 'Bon : < 0.1',
    },
    {
      label: 'FCP (1er affichage)',
      mobile: { value: `${result.mobile.fcp} s`, status: fcpStatus(result.mobile.fcp) },
      desktop: { value: `${result.desktop.fcp} s`, status: fcpStatus(result.desktop.fcp) },
      reference: 'Bon : < 1.8 s',
    },
    {
      label: 'SEO technique',
      mobile: { value: String(result.seo.score), status: scoreStatus(result.seo.score) },
      desktop: null,
      reference: 'Objectif : 90+',
    },
    {
      label: 'Titre SEO',
      mobile: { value: result.seo.hasTitle ? 'Présent' : 'Absent', status: boolStatus(result.seo.hasTitle) },
      desktop: null,
      reference: 'Requis',
    },
    {
      label: 'Description SEO',
      mobile: { value: result.seo.hasDescription ? 'Présent' : 'Absent', status: boolStatus(result.seo.hasDescription) },
      desktop: null,
      reference: 'Recommandé',
    },
    {
      label: 'Adapté mobile',
      mobile: { value: result.seo.hasViewport ? 'Oui' : 'Non', status: boolStatus(result.seo.hasViewport) },
      desktop: null,
      reference: 'Requis par Google',
    },
    {
      label: 'Indexable Google',
      mobile: { value: result.seo.isIndexable ? 'Oui' : 'Non', status: boolStatus(result.seo.isIndexable) },
      desktop: null,
      reference: 'Requis',
    },
  ];

  return (
    <div className="space-y-12">

      {/* 3A. En-tête résultats */}
      <div>
        <p className="font-mono text-xs uppercase tracking-wide text-gray-400 mb-4">
          Résultats pour {displayUrl(result.url)}
          {analyzedAt && <> · Analysé le {formatAuditDate(analyzedAt)}</>}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          Votre site obtient un score de {result.mobile.score}/100 sur mobile.{' '}
          {scoreVerdict(result.mobile.score)}
        </h2>
      </div>

      {/* 3B. Trois scores principaux */}
      <div className="grid md:grid-cols-3 gap-6">
        {scoreCards.map((card) => {
          const cardStatus = cardStatusLabel(card.score, card.kind);
          const barColor = card.score >= 90 ? '#16a34a' : card.score >= 50 ? '#ea580c' : '#dc2626';
          const numberClass = card.score >= 90 ? 'text-green-600' : card.score >= 50 ? 'text-orange-600' : 'text-red-600';
          return (
            <div key={card.label} className="border border-gray-200 rounded-lg p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-gray-400 mb-4">{card.label}</p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className={`text-5xl font-bold ${numberClass}`}>{card.score}</span>
                <span className="text-lg text-gray-400">/100</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden w-full mb-3">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${card.score}%`, backgroundColor: barColor }}
                />
              </div>
              <p className={`text-sm font-medium ${cardStatus.className}`}>{cardStatus.label}</p>
            </div>
          );
        })}
      </div>

      {/* 3C. Tableau des métriques détaillées */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Métriques détaillées</h3>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full text-sm border-collapse min-w-125">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wide">Métrique</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wide">Mobile</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wide">Desktop</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wide">Référence Google</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-gray-100 hover:bg-gray-50 transition-colors last:border-b-0">
                  <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">{row.label}</td>
                  <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5">
                      {row.mobile.value}
                      <StatusIcon status={row.mobile.status} />
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                    {row.desktop ? (
                      <span className="inline-flex items-center gap-1.5">
                        {row.desktop.value}
                        <StatusIcon status={row.desktop.status} />
                      </span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-500 whitespace-nowrap">{row.reference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3D. Ce qui pose problème */}
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
                  {p.status === 'bad' ? (
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  )}
                  <h4 className="font-bold text-gray-900">{p.title}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{p.problem}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{p.causes}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3E. Ce qui fonctionne bien */}
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

      {/* 3F. CTA final */}
      <div className="border-t border-gray-200 pt-8">
        <p className="text-sm text-gray-500 mb-4">
          Ces problèmes peuvent être corrigés. AtelierCode développe des sites rapides et bien référencés à Nîmes.
        </p>
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
  );
}
