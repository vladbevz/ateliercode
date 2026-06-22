'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin, Code2,
  Gauge, Search, Paintbrush,
  Shield, Globe,
  Zap
} from 'lucide-react';
import Image from 'next/image';
import AnimateIn from './AnimateIn';

export default function Apropos() {
  const [imageError, setImageError] = useState(false);

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
      desc: "Un code vérifié à chaque étape du développement. Moins de bugs, moins de corrections coûteuses.",
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

      {/* ─── 1. LE DÉVELOPPEUR ─── */}
      <div className="min-h-screen flex items-center border-b border-gray-200 py-16">
        <div className="container mx-auto px-4 max-w-5xl w-full">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 animate-fade-up">
              Un développeur formé, pas une agence anonyme.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
              Vous travaillez directement avec la personne qui code votre site — du premier échange jusqu&apos;à la mise en ligne.
            </p>
          </div>
          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start animate-fade-up" style={{ animationDelay: '200ms' }}>
            {/* Photo */}
            <div className="relative">
              <div className="relative w-65 aspect-3/4 rounded-lg overflow-hidden border border-gray-200">
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
            </div>

            {/* Bio */}
            <div className="space-y-6 pt-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Vladyslav Bevz
                </h2>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Nîmes, France · Développeur full-stack · Auto-entrepreneur</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Je m&apos;appelle Vladyslav, développeur web basé à Nîmes. J&apos;ai créé AtelierCode
                parce que je n&apos;aimais pas ce que je voyais : des sites générés en série, livrés
                sans conviction, optimisés pour le prix et non pour le résultat.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Quand vous me contactez, c&apos;est moi qui réponds. C&apos;est moi qui code, qui optimise,
                qui livre. Pas d&apos;intermédiaire, pas d&apos;équipe qui reçoit un brief de seconde main.
                Ce que vous décrivez au premier appel se retrouve sur votre site.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 2. NOTRE APPROCHE ─── */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimateIn className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Pourquoi React & Next.js plutôt que WordPress ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Parce que chaque choix technique influe directement sur votre visibilité et vos résultats.
            </p>
          </AnimateIn>

          <AnimateIn className="grid md:grid-cols-2 gap-6" delay={100}>
            {[
              {
                icon: <Gauge className="w-5 h-5" />,
                title: "Chargement en moins d'une seconde",
                desc: "Vos pages sont prêtes avant même que l'internaute n'arrive. Avec WordPress, comptez 3 à 6 secondes. Et depuis 2021, Google pénalise les sites lents."
              },
              {
                icon: <Search className="w-5 h-5" />,
                title: "Google vous comprend immédiatement",
                desc: "Notre code est clair et structuré. Google sait exactement ce que vous proposez, où vous êtes, ce que vous vendez — et vous classe plus haut."
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Pas de plugins qui cassent",
                desc: "Chaque fonction est codée sur mesure, pas ajoutée avec un plugin qui plante à chaque mise à jour. Moins de risques, moins de maintenance, plus de sérénité."
              },
              {
                icon: <Paintbrush className="w-5 h-5" />,
                title: "Un design pensé pour vous, pas un thème retouché",
                desc: "Votre site est unique. Pas de template modifié, pas de constructeur visuel. Chaque élément est conçu pour votre activité."
              }
            ].map((item, idx) => (
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

      {/* ─── 3. STACK ─── */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimateIn className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Des outils choisis pour votre résultat.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque technologie a une raison d&apos;être — et cette raison, c&apos;est votre succès en ligne.
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

      {/* ─── 4. CTA ─── */}
      <div className="py-24 text-center">
        <div className="container mx-auto px-4">
          <AnimateIn>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prêt à avoir un site qui travaille vraiment pour vous ?
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
              Devis gratuit, réponse sous 24 h. Aucun engagement avant que vous soyez convaincu.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150"
            >
              Obtenir mon devis gratuit
            </Link>
          </AnimateIn>
        </div>
      </div>

    </section>
  );
}
