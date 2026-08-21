// app/components/ProcessSection.tsx

'use client';

import Link from 'next/link';

export default function ProcessSection() {
  const steps = [
    {
      n: '01',
      short: 'Analyse & Stratégie',
      body: "On étudie votre marché, vos concurrents et vos objectifs pour créer une stratégie sur mesure.",
      time: '1–2 jours',
      livrable: 'Brief + plan de site',
    },
    {
      n: '02',
      short: 'Design & UX',
      body: "Création d'une interface qui reflète votre image et guide vos visiteurs vers l'action.",
      time: '3–4 jours',
      livrable: 'Maquettes validées',
    },
    {
      n: '03',
      short: 'Développement',
      body: 'Code propre, performant et optimisé SEO. Votre site est rapide et visible sur Google.',
      time: '5–7 jours',
      livrable: 'Site en préprod',
    },
    {
      n: '04',
      short: 'Lancement & Suivi',
      body: 'Mise en ligne, formation et accompagnement. On ne vous laisse pas tomber après la livraison.',
      time: '1–2 jours',
      livrable: 'Mise en ligne + formation',
    },
  ];

  return (
    <section className="bg-white">

      {/* Méthode */}
      <div className="py-20" style={{ background: '#f7f5f0' }}>
        <div className="container mx-auto px-4">

          {/* Заголовок */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-11">
            <div className="max-w-2xl">
              <h2
                className="text-4xl md:text-[44px] leading-[1.05] tracking-tight font-semibold mb-3"
                style={{ color: '#141210' }}
              >
                Du projet à la réussite
              </h2>
              <p className="text-lg md:text-[15.5px] leading-relaxed" style={{ color: '#75706a' }}>
                Une méthode éprouvée pour créer des sites qui ne sont pas juste beaux, mais{' '}
                <strong className="font-semibold" style={{ color: '#141210' }}>
                  qui rapportent des clients
                </strong>
              </p>
            </div>
            <span
              className="hidden md:inline font-mono text-[11px] tracking-[0.14em] uppercase whitespace-nowrap"
              style={{ color: '#a09a90' }}
            >
              Survolez une étape
            </span>
          </div>

          {/* Steps — accordéon horizontal (desktop) */}
          <div
            className="hidden md:flex rounded-2xl overflow-hidden bg-white"
            style={{ border: '1px solid rgba(20,18,14,.14)', minHeight: 300 }}
          >
            {steps.map((step, index) => (
              <div
                key={step.n}
                tabIndex={0}
                className="process-panel flex flex-col gap-4 px-6 lg:px-7 py-8 outline-none"
                style={{
                  borderRight: index < steps.length - 1 ? '1px solid rgba(20,18,14,.1)' : undefined,
                }}
              >
                <div className="process-num font-mono text-xs tracking-[0.14em]" style={{ color: '#a09a90' }}>
                  {step.n}
                </div>
                <h3 className="text-xl font-semibold tracking-tight" style={{ color: '#141210' }}>
                  {step.short}
                </h3>
                <div className="process-body flex-1 flex flex-col gap-3">
                  <p className="text-[14.5px] leading-relaxed" style={{ color: '#75706a' }}>
                    {step.body}
                  </p>
                  <div className="font-mono text-[11px] tracking-[0.1em] uppercase" style={{ color: '#a09a90' }}>
                    Livrable — <span className="normal-case tracking-normal" style={{ color: '#141210' }}>{step.livrable}</span>
                  </div>
                </div>
                <div className="mt-auto flex items-center gap-2 font-mono text-xs" style={{ color: '#75706a' }}>
                  <span className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: 'oklch(0.7 0.16 55)' }} />
                  {step.time}
                </div>
              </div>
            ))}
          </div>

          {/* Steps — liste empilée (mobile/tablette) */}
          <div className="md:hidden flex flex-col gap-4">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-xl bg-white px-5 py-6 flex flex-col gap-3"
                style={{ border: '1px solid rgba(20,18,14,.14)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.14em]" style={{ color: 'oklch(0.7 0.16 55)' }}>
                    {step.n}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-xs" style={{ color: '#75706a' }}>
                    <span className="w-[5px] h-[5px] rounded-full" style={{ background: 'oklch(0.7 0.16 55)' }} />
                    {step.time}
                  </div>
                </div>
                <h3 className="text-lg font-semibold tracking-tight" style={{ color: '#141210' }}>
                  {step.short}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#75706a' }}>
                  {step.body}
                </p>
                <div
                  className="font-mono text-[11px] tracking-[0.1em] uppercase pt-3"
                  style={{ color: '#a09a90', borderTop: '1px solid rgba(20,18,14,.1)' }}
                >
                  Livrable — <span className="normal-case tracking-normal" style={{ color: '#141210' }}>{step.livrable}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CTA - окремий блок внизу */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Prêt à donner vie à votre projet ?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discutons de vos idées et voyons comment nous pouvons les transformer en réalité.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 transition-colors btn-sweep"
          >
            Démarrer votre projet
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            Premier rendez-vous gratuit • Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
}