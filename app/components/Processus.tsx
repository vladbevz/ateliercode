'use client';

import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import AnimateIn from './AnimateIn';

export default function Processus() {
  const steps = [
    {
      n: '01',
      title: 'Analyse',
      description: 'On étudie votre marché, vos objectifs et vos concurrents pour définir une stratégie gagnante.',
      duration: '1-2 jours',
      details: [
        'Audit de votre positionnement',
        'Analyse des concurrents',
        'Définition des objectifs',
        'Proposition commerciale',
      ],
    },
    {
      n: '02',
      title: 'Design',
      description: "Création de maquettes qui reflètent votre image et optimisent l'expérience utilisateur.",
      duration: '3-4 jours',
      details: [
        'Wireframes interactifs',
        'Design unique et personnalisé',
        'Validation client',
        'Adaptation mobile',
      ],
    },
    {
      n: '03',
      title: 'Développement',
      description: 'Intégration avec les dernières technologies pour un site rapide, sécurisé et évolutif.',
      duration: '5-7 jours',
      details: [
        'Code propre et maintenable',
        'Optimisation SEO',
        'Tests de performance',
        'Sécurisation des données',
      ],
    },
    {
      n: '04',
      title: 'Lancement',
      description: 'Mise en ligne, formation et accompagnement pour une transition en douceur.',
      duration: '1-2 jours',
      details: [
        'Déploiement sur Vercel',
        'Configuration nom de domaine',
        "Formation à l'administration",
        'Support post-lancement',
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-white pt-16 pb-24">
      <div className="container mx-auto px-4">

        {/* Заголовок */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 animate-fade-up">
            De l&apos;idée à la réalisation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Une méthode transparente et éprouvée pour créer votre site web à Nîmes, sans stress
          </p>
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
              <div className="process-num font-mono text-xs uppercase tracking-wide text-gray-400">
                {step.n}
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {step.title}
              </h3>
              <div className="process-body flex-1 flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0" />
                      <span className="text-xs text-gray-500">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.25 h-1.25 rounded-full shrink-0 bg-gray-900" />
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
              <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
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
        <AnimateIn className="mt-24" delay={100}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Pourquoi un processus structuré ?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Pas de mauvaise surprise', desc: 'Chaque étape est validée avec vous avant de passer à la suivante' },
              { title: 'Délais tenus', desc: 'Un planning clair et respecté, pas de développement sans fin' },
              { title: 'Vous restez maître', desc: 'Vous comprenez chaque étape et gardez le contrôle' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* CTA */}
        <AnimateIn className="text-center mt-16" delay={100}>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150 btn-sweep"
          >
            Démarrer votre projet
          </Link>
        </AnimateIn>

      </div>
    </section>
  );
}
