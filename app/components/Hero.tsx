// app/components/Hero.tsx
'use client';

import Link from 'next/link';
import ProjectSlider from './ProjectSlider';
import { projects } from '../lib/projects-data';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center border-b border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Ліва колонка */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5 hero-animate hero-animate-1">
              Un site qui vous ramène des clients à Nîmes.
            </h1>

            <div className="relative mb-8">
              <p className="text-lg md:text-xl text-gray-600 max-w-md hero-animate hero-animate-2">
                Pour artisans, commerces et professions libérales : site vitrine, e-commerce ou application web sur mesure. Rapide, visible sur Google, livré en 1 à 3 semaines.
              </p>

              {/* Badge tampon — desktop : flottant à côté du sous-titre */}
              <div
                className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-24 h-24 -rotate-12 items-center justify-center rounded-full border-2 border-gray-900 bg-white shadow-sm animate-fade-up"
                style={{ animationDelay: '300ms' }}
              >
                <div className="flex items-center justify-center w-[82%] h-[82%] rounded-full border border-gray-900 text-center px-1">
                  <span className="text-[9px] font-bold uppercase leading-tight tracking-widest text-gray-900">
                    Maquette<br />gratuite
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 hero-animate hero-animate-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150 btn-sweep"
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

            {/* Badge tampon — mobile/tablette : après les CTA, pour ne pas retarder l'action principale au scroll */}
            <div
              className="flex lg:hidden w-16 h-16 mt-5 -rotate-12 items-center justify-center rounded-full border-2 border-gray-900 bg-white shadow-sm animate-fade-up"
              style={{ animationDelay: '150ms' }}
            >
              <div className="flex items-center justify-center w-[82%] h-[82%] rounded-full border border-gray-900 text-center px-1">
                <span className="text-[7px] font-bold uppercase leading-tight tracking-widest text-gray-900">
                  Maquette<br />gratuite
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-3 mt-5 text-sm hero-animate hero-animate-4">
              <Link href="/tarifs" className="py-1 text-gray-500 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 underline-offset-2 transition-colors">
                Voir les tarifs
              </Link>
              <Link href="/realisations" className="py-1 text-gray-500 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 underline-offset-2 transition-colors">
                Nos réalisations
              </Link>
              <Link href="/audit" className="py-1 text-gray-500 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 underline-offset-2 transition-colors">
                Audit gratuit
              </Link>
            </div>
          </div>

          {/* Права колонка — слайдер */}
          <ProjectSlider projects={projects} />

        </div>
      </div>
    </section>
  );
}