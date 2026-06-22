'use client';

import { ClipboardCheck, Palette, Code2, Rocket, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimateIn from './AnimateIn';

export default function Processus() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-5 h-5" />,
      title: '1. Analyse',
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
      icon: <Palette className="w-5 h-5" />,
      title: '2. Design',
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
      icon: <Code2 className="w-5 h-5" />,
      title: '3. Développement',
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
      icon: <Rocket className="w-5 h-5" />,
      title: '4. Lancement',
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
            Une méthode transparente et éprouvée pour créer votre site web sans stress
          </p>
        </div>

        {/* Timeline */}
        <AnimateIn className="relative max-w-6xl mx-auto" delay={150}>
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Іконка + стрілка на одному рівні */}
                <div className="relative w-full flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-md bg-gray-900 text-white flex items-center justify-center z-10">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 text-gray-300 z-20">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 flex flex-col flex-1 w-full text-center">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm flex-1">{step.description}</p>
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0" />
                        <span className="text-xs text-gray-500">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150"
          >
            Démarrer votre projet
          </Link>
        </AnimateIn>

      </div>
    </section>
  );
}
