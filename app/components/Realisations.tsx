'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimateIn from './AnimateIn';

export default function Realisations() {
  const projects = [
    {
      title: 'Le 438',
      category: 'Restauration',
      description: 'Site vitrine avec menu interactif',
      image: '/images/mockups/le438-mockup.webp',
      year: '2024',
    },
    {
      title: 'Lymar Dermo Esthetic',
      category: 'Beauté & Esthétique',
      description: 'Site vitrine avec prise de rendez-vous',
      image: '/images/mockups/lymar-mockup.webp',
      year: '2024',
    },
    {
      title: 'Portfolio Photographe',
      category: 'Photographie',
      description: 'Portfolio avec galerie haute performance',
      image: '/images/mockups/syrmais-mockup.webp',
      year: '2024',
    },
    {
      title: 'AquaTracker',
      category: 'Application web',
      description: "Application de suivi d'hydratation",
      image: '/images/mockups/water-mockup.webp',
      year: '2023',
    },
    {
      title: 'Chocolatier',
      category: 'E-commerce',
      description: 'Boutique en ligne pour artisan chocolatier',
      image: '/images/mockups/choc-mockup.webp',
      year: '2023',
    },
    {
      title: 'Artisan Carreleur',
      category: 'Artisanat & Rénovation',
      description: 'Site vitrine pour poseur de carrelage',
      image: '/images/mockups/kp-mockup.webp',
      year: '2024',
    },
    {
      title: 'Entreprise de Rénovation',
      category: 'Rénovation',
      description: 'Site vitrine pour entreprise de rénovation',
      image: '/images/mockups/gr-mockup.webp',
      year: '2024',
    },
    {
      title: 'Serrurier Nîmes',
      category: 'Services',
      description: 'Site vitrine pour serrurier professionnel',
      image: '/images/mockups/vb-mockup.webp',
      year: '2024',
    },
  ];

  return (
    <section className="min-h-screen bg-white pt-16 pb-24">
      <div className="container mx-auto px-4">

        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 animate-fade-up">
            Des projets qui parlent d&apos;eux-mêmes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Découvrez comment nous avons transformé la présence en ligne de nos clients
          </p>
        </div>

        {/* Grille */}
        <AnimateIn className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto" delay={150}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-medium text-gray-900">{project.title}</span>
                  <span className="text-sm text-gray-400 ml-auto">{project.year}</span>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-mono">{project.category}</p>
                <p className="text-sm text-gray-500 mt-1">{project.description}</p>
              </div>
            </div>
          ))}
        </AnimateIn>

        {/* CTA */}
        <AnimateIn className="text-center mt-14" delay={100}>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150"
          >
            Vous avez un projet similaire ?
          </Link>
        </AnimateIn>

      </div>
    </section>
  );
}
