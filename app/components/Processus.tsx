'use client';

import { CheckCircle2, ShieldCheck, Clock, Compass } from 'lucide-react';
import Link from 'next/link';
import AnimateIn from './AnimateIn';
import { processSteps } from '../lib/process-data';

export default function Processus() {
  const steps = processSteps;

  return (
    <section className="min-h-screen bg-white pt-16 pb-24">
      <div className="container mx-auto px-4">

        {/* Заголовок — avec aperçu du parcours en 4 étapes */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 animate-fade-up">
            De l&apos;idée à la réalisation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl animate-fade-up" style={{ animationDelay: '100ms' }}>
            Une méthode transparente et éprouvée pour créer votre site web à Nîmes, sans stress
          </p>

          <div className="hidden md:flex items-center mt-10 animate-fade-up" style={{ animationDelay: '150ms' }}>
            {steps.map((step, index) => (
              <div key={step.n} className="flex items-center flex-1 last:flex-none">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{step.title}</span>
                </div>
                {index < steps.length - 1 && <div className="flex-1 h-px bg-gray-200 mx-3" />}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline — accordéon horizontal (desktop) */}
        <AnimateIn className="hidden md:flex max-w-6xl mx-auto rounded-2xl overflow-hidden bg-white border border-gray-200 min-h-85" delay={150}>
          {steps.map((step, index) => (
            <div
              key={step.n}
              tabIndex={0}
              className={`process-panel flex flex-col gap-4 px-6 lg:px-7 py-8 outline-none ${
                index < steps.length - 1 ? 'border-r border-gray-100' : ''
              }`}
            >
              <h3 className="text-xl font-bold text-gray-900 text-center">
                {step.title}
              </h3>
              <div className="relative flex-1 min-h-0">
                <div className="process-icon absolute inset-0 flex items-center justify-center text-gray-900">
                  <step.icon className="w-16 h-16" strokeWidth={1.5} />
                </div>
                <div className="process-body flex flex-col gap-4">
                  <p className="text-sm leading-relaxed text-gray-600">{step.fullDescription}</p>
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0" />
                        <span className="text-xs text-gray-500">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-center gap-2 text-lg font-medium text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-gray-900" />
                {step.duration}
              </div>
            </div>
          ))}
        </AnimateIn>

        {/* Timeline — liste empilée (mobile/tablette) */}
        <AnimateIn className="md:hidden max-w-6xl mx-auto flex flex-col gap-4" delay={150}>
          {steps.map((step) => (
            <div key={step.n} className="rounded-xl bg-white px-5 py-6 flex flex-col gap-3 border border-gray-200">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wide text-gray-400">{step.n}</span>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-1.25 h-1.25 rounded-full bg-gray-900" />
                  {step.duration}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{step.fullDescription}</p>
              <div className="space-y-2 pt-3 border-t border-gray-100">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="text-xs text-gray-500">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </AnimateIn>

        {/* Pourquoi un processus structuré */}
        <AnimateIn className="mt-24 max-w-4xl mx-auto" delay={100}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Pourquoi un processus structuré <span className="text-gray-400">plutôt qu&apos;en roue libre ?</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Pas de mauvaise surprise', desc: 'Chaque étape est validée avec vous avant de passer à la suivante', icon: <ShieldCheck className="w-6 h-6" /> },
              { title: 'Délais tenus', desc: 'Un planning clair et respecté, pas de développement sans fin', icon: <Clock className="w-6 h-6" /> },
              { title: 'Vous restez maître', desc: 'Vous comprenez chaque étape et gardez le contrôle', icon: <Compass className="w-6 h-6" /> },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center">
                <div className="p-3 rounded-md bg-gray-100 text-gray-600 inline-flex mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* CTA */}
        <AnimateIn className="max-w-4xl mx-auto border-t border-gray-200 pt-12 mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6" delay={100}>
          <p className="text-lg text-gray-600">
            Prêt à passer à l&apos;étape 01 ?
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center px-8 py-3.5 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150 btn-sweep"
          >
            Démarrer votre projet
          </Link>
        </AnimateIn>

      </div>
    </section>
  );
}
