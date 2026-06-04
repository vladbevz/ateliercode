// app/components/PourQui.tsx
'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, Building, UserCheck, Star, ArrowRight, ChevronDown } from 'lucide-react';

export default function PourQui() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const clients = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Professions libérales',
      description: 'Avocats, médecins, consultants — une présence en ligne élégante qui inspire confiance.',
      image: '/images/qui-photographe.webp',
      stats: [
        { label: 'Confiance client', value: '+78%' },
        { label: 'Projets décrochés', value: '+40%' },
      ],
      success: 'A. Syrmais, photographe : +40% de nouveaux projets en 3 mois',
      color: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'PME & TPE ambitieuses',
      description: 'Valorisez votre savoir-faire avec un site minimaliste, efficace, tourné vers la conversion.',
      image: '/images/qui-restaurant.webp',
      stats: [
        { label: 'Visibilité locale', value: '+200%' },
        { label: 'Réservations', value: '+36%' },
      ],
      success: 'Restaurant Le 438 : 36% de réservations en plus grâce au site',
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Indépendants & créateurs',
      description: 'Artisans, designers, coachs — une vitrine digitale qui raconte votre histoire.',
      image: '/images/qui-aquatracker.webp',
      stats: [
        { label: 'Notoriété', value: '+150%' },
        { label: 'Rétention', value: '74%' },
      ],
      success: 'Application Aquatracker : 500 nouveaux utilisateurs depuis son lancement',
      color: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  const handleCardClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Pour qui ?</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-100 leading-[0.9] mb-5">
            Des solutions pour<br />
            <span className="text-zinc-500">chaque métier.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Que vous soyez professionnel libéral, PME ou indépendant,
            nous créons le site qui correspond à vos besoins.
          </p>
        </motion.div>

        {/* DESKTOP lg+ */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left — cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="space-y-4"
          >
            {clients.map((client, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${
                  activeIndex === index
                    ? 'border-amber-400/50 bg-zinc-900 shadow-lg shadow-amber-400/5'
                    : 'border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50'
                }`}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl shrink-0 transition-all ${
                    activeIndex === index ? 'bg-amber-400 text-zinc-950' : 'bg-zinc-800 text-zinc-400'
                  }`}>
                    {client.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg font-bold mb-1.5 transition-colors ${
                      activeIndex === index ? 'text-zinc-100' : 'text-zinc-300'
                    }`}>
                      {client.title}
                    </h3>
                    <p className="text-zinc-500 text-sm line-clamp-2">{client.description}</p>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 flex gap-3"
                      >
                        {client.stats.map((stat, idx) => (
                          <div key={idx} className="bg-zinc-800 border border-zinc-700 px-3 py-2 rounded-xl">
                            <div className="text-sm font-black text-amber-400 tracking-tight">{stat.value}</div>
                            <div className="text-xs text-zinc-500">{stat.label}</div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right — image */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {activeIndex >= 0 && (
              <>
                <div className={`absolute inset-0 bg-gradient-to-br ${clients[activeIndex].color} rounded-3xl blur-3xl`} />
                <div className="relative bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
                  <div className="relative h-80">
                    <Image src={clients[activeIndex].image} alt={clients[activeIndex].title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-semibold text-zinc-300">Success story</span>
                      </div>
                      <p className="text-base font-semibold text-zinc-100">{clients[activeIndex].success}</p>
                    </div>
                  </div>
                  <div className="p-6 grid grid-cols-2 gap-4">
                    {clients[activeIndex].stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-black text-amber-400 tracking-tight">{stat.value}</div>
                        <div className="text-sm text-zinc-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* MOBILE accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="lg:hidden space-y-3 mb-12"
        >
          {clients.map((client, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border-2 overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-amber-400/40' : 'border-zinc-800'
                }`}
              >
                <button
                  onClick={() => handleCardClick(index)}
                  className={`w-full text-left p-5 transition-colors ${
                    isOpen ? 'bg-zinc-900' : 'bg-zinc-900/40 hover:bg-zinc-900/70'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl shrink-0 transition-all ${
                      isOpen ? 'bg-amber-400 text-zinc-950' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {client.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-zinc-100">{client.title}</h3>
                      <p className="text-zinc-500 text-sm mt-0.5 line-clamp-1">{client.description}</p>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
                      <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-amber-400' : 'text-zinc-600'}`} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-zinc-800">
                        <div className="relative h-48">
                          <Image src={client.image} alt={client.title} fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <div className="flex items-center gap-1.5 mb-1">
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                              <span className="text-xs font-medium text-zinc-300">Success story</span>
                            </div>
                            <p className="text-sm font-semibold text-zinc-100 leading-snug">{client.success}</p>
                          </div>
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-3 bg-zinc-900">
                          {client.stats.map((stat, idx) => (
                            <div key={idx} className="text-center bg-zinc-800 rounded-xl py-3">
                              <div className="text-xl font-black text-amber-400 tracking-tight">{stat.value}</div>
                              <div className="text-xs text-zinc-500 mt-0.5">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-2xl font-bold transition-all shadow-lg shadow-amber-400/20"
          >
            Parler de votre projet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
