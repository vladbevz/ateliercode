'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin, Code2,
  Gauge, Search, Paintbrush,
  Shield, Globe, Zap, CheckCircle2,
} from 'lucide-react';
import Image from 'next/image';
import AnimateIn from './AnimateIn';

export default function Apropos() {
  const [imageError, setImageError] = useState(false);

  const avantages = [
    {
      icon: <Gauge className="w-5 h-5" />,
      title: 'Un site rapide',
      desc: "Vos visiteurs n'attendent pas. Votre site se charge rapidement, même sur smartphone. Une bonne vitesse améliore l'expérience utilisateur et favorise votre visibilité sur Google.",
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: 'Un site pensé pour être trouvé',
      desc: "Dès sa conception, votre site est structuré pour être compris facilement par les moteurs de recherche. Une base solide, sans dépendre de prestations SEO coûteuses.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Une solution durable',
      desc: "Je développe des sites fiables et faciles à maintenir afin d'éviter les mauvaises surprises et les interventions répétées après la mise en ligne.",
    },
    {
      icon: <Paintbrush className="w-5 h-5" />,
      title: 'Un design qui vous ressemble',
      desc: "Chaque entreprise est différente. Votre site l'est aussi. Pas de modèle générique : le design est pensé pour refléter votre activité, votre image et vos valeurs.",
    },
  ];

  const stack = [
    {
      name: 'Next.js',
      desc: "Le framework qui génère des pages ultra-rapides. Vos clients n'attendent pas — Google vous récompense.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      name: 'React',
      desc: "La technologie derrière Facebook et Airbnb. Votre site réagit instantanément, sans rechargement de page.",
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      name: 'TypeScript',
      desc: 'Un code vérifié à chaque étape du développement. Moins de bugs, moins de corrections coûteuses.',
      icon: <Shield className="w-5 h-5" />,
    },
    {
      name: 'Tailwind CSS',
      desc: "Chaque pixel est à sa place sur tous les écrans — mobile, tablette, desktop. Rien n'est laissé au hasard.",
      icon: <Paintbrush className="w-5 h-5" />,
    },
    {
      name: 'Vercel',
      desc: "Hébergement professionnel, déploiement automatique, HTTPS inclus. Votre site ne tombe jamais.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      name: 'SEO natif',
      desc: "Balises, sitemap, structure sémantique, Core Web Vitals — tout est optimisé sans plugin supplémentaire.",
      icon: <Search className="w-5 h-5" />,
    },
  ];

  return (
    <section className="relative bg-white">

      {/* ─── 1. L'HISTOIRE ─── */}
      <div className="min-h-screen flex items-center border-b border-gray-200 py-16">
        <div className="container mx-auto px-4 max-w-5xl w-full">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 animate-fade-up">
              L&apos;histoire d&apos;AtelierCode
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
              AtelierCode, c&apos;est moi : un développeur qui travaille directement avec vous, pas une agence qui disparaît après la signature du contrat.
            </p>
          </div>
          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative w-65 aspect-3/4 rounded-lg overflow-hidden border border-gray-200 shrink-0">
              {!imageError ? (
                <Image
                  src="/images/image.webp"
                  alt="Vladyslav Bevz - Développeur web à Nîmes"
                  fill
                  className="object-cover object-top"
                  sizes="260px"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Code2 className="w-16 h-16 mx-auto mb-3 opacity-50" />
                    <p className="font-medium">Vladyslav Bevz</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-5 pt-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Vladyslav Bevz</h2>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Nîmes, France · Développeur full-stack · Auto-entrepreneur</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Je m&apos;appelle Vladyslav et je suis développeur web à Nîmes. J&apos;ai créé AtelierCode parce que je voyais trop de sites devenir lents, instables ou coûteux à maintenir avec le temps.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Quand vous me contactez, c&apos;est moi qui vous réponds. C&apos;est moi qui conçois votre site, qui le développe, qui le teste et qui le livre. Vous avez un seul interlocuteur du début à la fin.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Vous m&apos;expliquez votre besoin, je le transforme en un site simple, efficace et conçu pour durer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 2. POURQUOI ATELIERCODE ─── */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimateIn className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Pourquoi choisir AtelierCode plutôt qu&apos;une solution prête à l&apos;emploi ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les solutions standardisées sont souvent trop génériques, surchargées de fonctionnalités inutiles et coûteuses à maintenir. Chez AtelierCode, je construis uniquement ce dont vous avez besoin — ni plus, ni moins.
            </p>
          </AnimateIn>

          <AnimateIn className="grid md:grid-cols-2 gap-6" delay={100}>
            {avantages.map((item, idx) => (
              <div key={idx} className="flex gap-5 p-7 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200">
                <div className="shrink-0 w-10 h-10 rounded-md bg-gray-900 text-white flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </AnimateIn>
        </div>
      </div>

      {/* ─── 3. COMBIEN ÇA COÛTE ─── */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimateIn className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Combien coûte un site web ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un site sur mesure représente un investissement, mais il doit avant tout être rentable pour votre activité.
            </p>
          </AnimateIn>

          <AnimateIn className="grid md:grid-cols-2 gap-6 mb-8" delay={100}>
            <div className="p-7 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Avec une structure traditionnelle</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Une partie du budget sert à financer les frais de fonctionnement, les intermédiaires et la gestion du projet.
              </p>
            </div>
            <div className="p-7 bg-gray-900 text-white rounded-lg">
              <h3 className="font-bold mb-3">Avec AtelierCode</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Vous travaillez directement avec le développeur qui réalise votre site. Une solution personnalisée, performante et durable, avec un devis clair et transparent dès le départ.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn className="grid md:grid-cols-3 gap-4" delay={150}>
            {[
              'Pas de frais cachés.',
              "Pas d'abonnements imposés.",
              'Pas de mauvaises surprises.',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-5 bg-gray-50 border border-gray-200 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0" />
                <span className="font-medium text-gray-900 text-sm">{item}</span>
              </div>
            ))}
          </AnimateIn>
        </div>
      </div>

      {/* ─── 4. STACK ─── */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimateIn className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Comment je construis votre site
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Je sélectionne chaque technologie avec un objectif précis : garantir un site fiable, rapide et évolutif.
            </p>
          </AnimateIn>

          <AnimateIn className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" delay={100}>
            {stack.map((tech) => (
              <div
                key={tech.name}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center text-gray-700 mb-4">
                  {tech.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </AnimateIn>
        </div>
      </div>

      {/* ─── 5. CTA ─── */}
      <div className="py-24 text-center">
        <div className="container mx-auto px-4">
          <AnimateIn>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Parlons de votre projet
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-3">
              J&apos;analyse votre besoin, je vous explique les solutions adaptées à votre activité et je vous communique un tarif clair.
            </p>
            <p className="text-gray-500 max-w-xl mx-auto mb-10">
              Si je peux vous aider, nous lançons le projet rapidement. Si ce n&apos;est pas le cas, je vous le dirai en toute transparence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150"
            >
              Demander votre devis gratuit — réponse sous 24 heures
            </Link>
          </AnimateIn>
        </div>
      </div>

    </section>
  );
}
