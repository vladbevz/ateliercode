// app/components/ProcessSection.tsx

'use client';

import { ClipboardCheck, Palette, Code2, Rocket, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProcessSection() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-5 h-5" />,
      title: "1. Analyse & Stratégie",
      description: "On étudie votre marché, vos concurrents et vos objectifs pour créer une stratégie sur mesure.",
      duration: "1-2 jours",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "2. Design & UX",
      description: "Création d'une interface qui reflète votre image et guide vos visiteurs vers l'action.",
      duration: "3-4 jours",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "3. Développement",
      description: "Code propre, performant et optimisé SEO. Votre site est rapide et visible sur Google.",
      duration: "5-7 jours",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "4. Lancement & Suivi",
      description: "Mise en ligne, formation et accompagnement. On ne vous laisse pas tomber après la livraison.",
      duration: "1-2 jours",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Du projet à la réussite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une méthode éprouvée pour créer des sites qui ne sont pas juste beaux,
            mais qui <span className="text-gray-900 font-semibold">rapportent des clients</span>
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Контейнер для іконки та стрілки */}
              <div className="relative w-full flex items-center justify-center mb-4">
                {/* Іконка */}
                <div className="w-14 h-14 rounded-md bg-gray-900 text-white flex items-center justify-center z-10">
                  {step.icon}
                </div>
                
                {/* Стрілка - на рівні іконки */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 text-gray-300 z-20">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>

              {/* Контент картки */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors flex flex-col flex-1 w-full text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{step.description}</p>
                <div className="flex items-center justify-center pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-400 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {step.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
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
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 transition-colors"
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