'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin, Code2,
  Gauge, Search, Paintbrush,
  Shield, CheckCircle2,
} from 'lucide-react';
import Image from 'next/image';
import AnimateIn from './AnimateIn';
import { useFlipCard } from '../hooks/useFlipCard';

export default function Apropos() {
  const [imageError, setImageError] = useState(false);
  useFlipCard();

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
      category: 'Framework',
      desc: "Le framework qui génère des pages ultra-rapides. Vos clients n'attendent pas — Google vous récompense.",
    },
    {
      name: 'React',
      category: 'Librairie UI',
      desc: "La technologie derrière Facebook et Airbnb. Votre site réagit instantanément, sans rechargement de page.",
    },
    {
      name: 'TypeScript',
      category: 'Langage',
      desc: 'Un code vérifié à chaque étape du développement. Moins de bugs, moins de corrections coûteuses.',
    },
    {
      name: 'Tailwind CSS',
      category: 'Styles',
      desc: "Chaque pixel est à sa place sur tous les écrans — mobile, tablette, desktop. Rien n'est laissé au hasard.",
    },
    {
      name: 'Vercel',
      category: 'Hébergement',
      desc: "Hébergement professionnel, déploiement automatique, HTTPS inclus. Votre site ne tombe jamais.",
    },
    {
      name: 'SEO natif',
      category: 'Référencement',
      desc: "Balises, sitemap, structure sémantique, Core Web Vitals — tout est optimisé sans plugin supplémentaire.",
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
              On ne fait pas que de beaux sites — on fait des sites qui vous ramènent des clients.
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

          <AnimateIn className="border-y border-gray-200 divide-y divide-gray-200" delay={100}>
            {avantages.map((item, idx) => (
              <div
                key={idx}
                className="group grid md:grid-cols-[240px_1fr] gap-3 md:gap-12 -mx-2 px-2 py-9 rounded-md transition-colors duration-200 hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-900 transition-transform duration-200 group-hover:translate-x-1">
                    {item.icon}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
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

          <AnimateIn className="grid md:grid-cols-2 rounded-lg border border-gray-200 overflow-hidden mb-10" delay={100}>
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Avec une structure traditionnelle</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Une partie du budget sert à financer les frais de fonctionnement, les intermédiaires et la gestion du projet.
              </p>
            </div>
            <div className="p-8 md:p-10 bg-gray-900 text-white">
              <h3 className="font-bold mb-3">Avec AtelierCode</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Vous travaillez directement avec le développeur qui réalise votre site. Une solution personnalisée, performante et durable, avec un devis clair et transparent dès le départ.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3" delay={150}>
            {[
              'Pas de frais cachés.',
              "Pas d'abonnements imposés.",
              'Pas de mauvaises surprises.',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0" />
                <span className="font-medium text-gray-700 text-sm">{item}</span>
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
              <div key={tech.name} className="flip-card h-48 cursor-pointer">
                <div className="flip-card-inner rounded-lg">

                  {/* FACE AVANT — catégorie + nom */}
                  <div className="flip-card-front bg-white border border-gray-200 rounded-lg flex flex-col justify-between p-6">
                    <span className="font-mono text-xs uppercase tracking-wide text-gray-400">{tech.category}</span>
                    <h4 className="text-2xl font-bold text-gray-900">{tech.name}</h4>
                    <span className="text-xs text-gray-400">Toucher pour en savoir plus</span>
                  </div>

                  {/* FACE ARRIÈRE — description */}
                  <div className="flip-card-back bg-gray-900 text-white rounded-lg flex flex-col justify-center p-6">
                    <span className="font-mono text-xs uppercase tracking-wide text-gray-500 mb-3">{tech.category}</span>
                    <h4 className="text-sm font-bold mb-3">{tech.name}</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">{tech.desc}</p>
                  </div>

                </div>
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
              className="inline-flex items-center px-10 py-4 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150 btn-sweep"
            >
              Demander votre devis gratuit — réponse sous 24 heures
            </Link>
          </AnimateIn>
        </div>
      </div>

    </section>
  );
}
