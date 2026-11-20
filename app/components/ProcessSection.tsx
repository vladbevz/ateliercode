// app/components/ProcessSection.tsx

'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '../lib/process-data';
import AnimateIn from './AnimateIn';

export default function ProcessSection() {
  return (
    <section className="bg-white">

      {/* Méthode */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          {/* Заголовок */}
          <div className="mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Du projet à la réussite
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Une méthode éprouvée pour créer des sites qui ne sont pas juste beaux,
              mais qui <span className="text-gray-900 font-semibold">rapportent des clients</span>.
            </p>
            <p className="hidden md:block text-sm font-medium uppercase tracking-wide text-gray-400 mt-4">
              Survolez une étape
            </p>
          </div>

          {/* Steps — accordéon horizontal (desktop) */}
          <div className="hidden md:flex rounded-2xl overflow-hidden bg-white border border-gray-200" style={{ minHeight: 300 }}>
            {processSteps.map((step, index) => (
              <div
                key={step.n}
                tabIndex={0}
                className={`process-panel flex flex-col gap-4 px-6 lg:px-7 py-8 outline-none ${
                  index < processSteps.length - 1 ? 'border-r border-gray-100' : ''
                }`}
              >
                <h3 className="text-xl font-bold text-gray-900 text-center">
                  {step.title}
                </h3>
                <div className="relative flex-1 min-h-0">
                  <div className="process-icon absolute inset-0 flex items-center justify-center text-gray-900">
                    <step.icon className="w-16 h-16" strokeWidth={1.5} />
                  </div>
                  <p className="process-body text-sm leading-relaxed text-gray-600">
                    {step.shortDescription}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-center gap-2 text-lg font-medium text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-gray-900" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>

          {/* Steps — liste empilée (mobile/tablette) */}
          <div className="md:hidden flex flex-col gap-4">
            {processSteps.map((step) => (
              <div
                key={step.n}
                className="rounded-xl bg-white px-5 py-6 flex flex-col gap-3 border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
                    {step.n}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-1.25 h-1.25 rounded-full bg-gray-900" />
                    {step.duration}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.shortDescription}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CTA - bande finale, variante asymétrique (pas le centrage habituel) */}
      <div className="border-t border-gray-200">
        <AnimateIn className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="md:max-w-md">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Le 438 a vu +36% de réservations après son lancement.
              </h3>
              <p className="text-lg text-gray-600">
                Votre projet mérite le même résultat. Je conçois, développe et livre votre site moi-même — un seul interlocuteur, du premier message à la mise en ligne.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 transition-colors btn-sweep"
              >
                Démarrer votre projet
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-sm text-gray-500">
                Premier rendez-vous gratuit • Sans engagement
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
