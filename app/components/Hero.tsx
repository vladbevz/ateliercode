// app/components/Hero.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  { name: "Le 438", category: "Restaurant · Vauvert", image: "/images/mockups/le438-mockup.webp" },
  { name: "Lymar Dermo Esthetic", category: "Beauté · Saint-Georges", image: "/images/mockups/lymar-mockup.webp" },
  { name: "Portfolio Photographe", category: "Photographie", image: "/images/mockups/syrmais-mockup.webp" },
  { name: "AquaTracker", category: "Application web", image: "/images/mockups/water-mockup.webp" },
  { name: "Artisan Carreleur", category: "Artisanat & Rénovation", image: "/images/mockups/kp-mockup.webp" },
  { name: "Entreprise de Rénovation", category: "Rénovation", image: "/images/mockups/gr-mockup.webp" },
  { name: "Serrurier Nîmes", category: "Services", image: "/images/mockups/vb-mockup.webp" },
  { name: "Chocolatier", category: "E-commerce", image: "/images/mockups/choc-mockup.webp" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setCurrent(i => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <section className="min-h-screen flex items-center border-b border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Ліва колонка */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5 animate-fade-up">
              Votre site web,<br />livré rapidement.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-md mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Site vitrine, e-commerce ou application web — professionnel, rapide, et visible dans les résultats Google.
              Livré en 1 à 3 semaines.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150"
              >
                Obtenir un devis gratuit
              </Link>
              <Link
                href="/processus"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-200 text-gray-700 rounded-md font-medium hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] transition-all duration-150"
              >
                Comment ça marche ?
              </Link>
            </div>
          </div>

          {/* Права колонка — слайдер */}
          <div className="border border-gray-200 rounded-lg overflow-hidden animate-fade-up" style={{ animationDelay: '300ms' }}>
            {/* Browser bar */}
            <div className="flex items-center gap-1.5 px-3 py-2.5 bg-gray-50 border-b border-gray-200">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              <span className="font-mono text-xs text-gray-400 ml-2 flex-1 text-center">
                ateliercode.fr
              </span>
            </div>

            {/* Slides */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {projects.map((project, idx) => (
                  <div key={idx} className="relative w-full shrink-0 aspect-video bg-gray-50">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Prev / Next */}
              <button
                onClick={prev}
                aria-label="Projet précédent"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-white border border-gray-200 rounded-md flex items-center justify-center hover:border-gray-400 active:scale-95 transition-all duration-150"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={next}
                aria-label="Projet suivant"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-white border border-gray-200 rounded-md flex items-center justify-center hover:border-gray-400 active:scale-95 transition-all duration-150"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Caption + dots */}
            <div className="px-4 py-3 bg-white border-t border-gray-200 flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-900">{projects[current].name}</span>
                <span className="text-xs text-gray-400 ml-2">{projects[current].category}</span>
              </div>
              <div className="flex gap-1.5">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Projet ${idx + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === current ? 'bg-gray-900' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}