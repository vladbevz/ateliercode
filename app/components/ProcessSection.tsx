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
    },
    {
      n: '02',
      short: 'Design & UX',
      body: "Création d'une interface qui reflète votre image et guide vos visiteurs vers l'action.",
      time: '3–4 jours',
    },
    {
      n: '03',
      short: 'Développement',
      body: 'Code propre, performant et optimisé SEO. Votre site est rapide et visible sur Google.',
      time: '5–7 jours',
    },
    {
      n: '04',
      short: 'Lancement & Suivi',
      body: 'Mise en ligne, formation et accompagnement. On ne vous laisse pas tomber après la livraison.',
      time: '1–2 jours',
    },
  ];

  return (
    <section className="bg-white">

      {/* Méthode */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          {/* Заголовок */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Du projet à la réussite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthode éprouvée pour créer des sites qui ne sont pas juste beaux,
              mais qui <span className="text-gray-900 font-semibold">rapportent des clients</span>
            </p>
            <p className="hidden md:block text-sm font-medium uppercase tracking-wide text-gray-400 mt-5">
              Survolez une étape
            </p>
          </div>

          {/* Steps — accordéon horizontal (desktop) */}
          <div className="hidden md:flex rounded-2xl overflow-hidden bg-white border border-gray-200" style={{ minHeight: 300 }}>
            {steps.map((step, index) => (
              <div
                key={step.n}
                tabIndex={0}
                className={`process-panel flex flex-col gap-4 px-6 lg:px-7 py-8 outline-none ${
                  index < steps.length - 1 ? 'border-r border-gray-100' : ''
                }`}
              >
                <div className="process-num font-mono text-xs uppercase tracking-wide text-gray-400">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {step.short}
                </h3>
                <p className="process-body flex-1 text-sm leading-relaxed text-gray-600">
                  {step.body}
                </p>
                <div className="mt-auto flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-1.25 h-1.25 rounded-full shrink-0 bg-gray-900" />
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
                className="rounded-xl bg-white px-5 py-6 flex flex-col gap-3 border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wide text-gray-400">
                    {step.n}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-1.25 h-1.25 rounded-full bg-gray-900" />
                    {step.time}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {step.short}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.body}
                </p>
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