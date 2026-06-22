'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, Building, UserCheck, ChevronDown } from 'lucide-react';
import AnimateIn from './AnimateIn';

export default function PourQui() {
  const [activeIndex, setActiveIndex] = useState(0);

  const clients = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Commerces & professionnels locaux',
      description: 'Restaurants, artisans, prestataires de services — un site vitrine qui travaille pour vous 24h/24 et convertit les visiteurs en clients.',
      image: '/images/mockups/le438-mockup.webp',
      stats: [
        { label: 'Réservations', value: '+36%' },
        { label: 'Temps sur site', value: '+8 min' },
      ],
      success: 'Le 438, Vauvert — +36% de réservations depuis le lancement',
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Santé, beauté & services',
      description: 'Médecins, esthéticiennes, coachs, photographes — une présence en ligne élégante qui inspire confiance et génère des prises de contact.',
      image: '/images/mockups/lymar-mockup.webp',
      stats: [
        { label: 'Prises de contact', value: '+55%' },
        { label: 'Taux de conversion', value: '+32%' },
      ],
      success: 'Lymar Dermo Esthetic — site lancé en 7 jours, complet sur mobile',
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'E-commerce & applications web',
      description: 'Boutiques en ligne, SaaS, outils métier — des solutions sur mesure en React & Next.js, rapides, scalables et pensées pour la conversion.',
      image: '/images/qui-aquatracker.webp',
      stats: [
        { label: 'Utilisateurs', value: '500+' },
        { label: 'Performance', value: '98/100' },
      ],
      success: 'AquaTracker — application React, 500 utilisateurs dès le premier mois',
    },
  ];

  const handleCardClick = (index: number) => {
    setActiveIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section className="min-h-screen bg-white pt-16 pb-24">
      <div className="container mx-auto px-4">

        {/* Заголовок */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 animate-fade-up">
            Des solutions pour chaque métier
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Que vous soyez professionnel libéral, PME ou indépendant,
            nous créons le site qui correspond à vos besoins
          </p>
        </div>

        {/* DESKTOP lg+ */}
        <AnimateIn className="hidden lg:grid lg:grid-cols-2 gap-12 items-center mb-20" delay={150}>

          {/* Ліва колонка — картки */}
          <div className="space-y-4">
            {clients.map((client, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-lg border-2 transition-all duration-200 ${
                  activeIndex === index
                    ? 'border-gray-900 bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-md shrink-0 transition-colors ${
                    activeIndex === index ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {client.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-xl font-bold mb-2 ${
                      activeIndex === index ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {client.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">{client.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Права колонка — зображення */}
          {activeIndex >= 0 && (
            <div key={activeIndex} className="relative animate-fade-in">
              <div className="relative bg-white rounded-lg overflow-hidden border border-gray-200">
                <div className="relative h-80">
                  <Image
                    src={clients[activeIndex].image}
                    alt={clients[activeIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-semibold">{clients[activeIndex].success}</p>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-2 gap-4">
                  {clients[activeIndex].stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </AnimateIn>

        {/* MOBILE: accordion */}
        <AnimateIn className="lg:hidden space-y-3 mb-12" delay={150}>
          {clients.map((client, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-lg border-2 overflow-hidden transition-colors ${
                  isOpen ? 'border-gray-900' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => handleCardClick(index)}
                  className={`w-full text-left p-5 transition-colors ${
                    isOpen ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-md shrink-0 ${
                      isOpen ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {client.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900">{client.title}</h3>
                      <p className="text-gray-500 text-sm mt-0.5 line-clamp-1">{client.description}</p>
                    </div>
                    <ChevronDown className={`shrink-0 w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="border-t border-gray-200">
                    <div className="relative h-48">
                      <Image src={client.image} alt={client.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-sm font-semibold leading-snug">{client.success}</p>
                      </div>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-3 bg-white">
                      {client.stats.map((stat, idx) => (
                        <div key={idx} className="text-center bg-gray-50 rounded-md py-3">
                          <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </AnimateIn>

        {/* CTA */}
        <AnimateIn className="text-center" delay={200}>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150"
          >
            Parler de votre projet
          </Link>
        </AnimateIn>

      </div>
    </section>
  );
}
