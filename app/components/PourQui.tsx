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
      title: "Professions libérales",
      description: "Avocats, médecins, consultants — une présence en ligne élégante qui inspire confiance.",
      // ✅ FIX 1: прибрано /public з шляху
      image: "/images/qui-photographe.webp",
      stats: [
        { label: "Confiance client", value: "+78%" },
        { label: "Projets décrochés", value: "+40%" }
      ],
      success: "A. Syrmais, photographe : +40% de nouveaux projets en 3 mois",
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "PME & TPE ambitieuses",
      description: "Valorisez votre savoir-faire avec un site minimaliste, efficace, tourné vers la conversion.",
      image: "/images/qui-restaurant.webp",
      stats: [
        { label: "Visibilité locale", value: "+200%" },
        { label: "Réservations", value: "+36%" }
      ],
      success: "Restaurant Le 438 : 36% de réservations en plus grâce au site",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Indépendants & créateurs",
      description: "Artisans, designers, coachs — une vitrine digitale qui raconte votre histoire.",
      image: "/images/qui-aquatracker.webp",
      stats: [
        { label: "Notoriété", value: "+150%" },
        { label: "Rétention", value: "74%" }
      ],
      success: "Application Aquatracker : 500 nouveaux utilisateurs depuis son lancement",
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const handleCardClick = (index: number) => {
    // На мобільному: toggle (закрити якщо вже відкрито)
    // На desktop: просто переключити
    setActiveIndex(prev => prev === index ? -1 : index);
  };

  return (
    <section className="relative py-20  bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />

      {/* ✅ ref на div всередині, не на section */}
      <div ref={containerRef} className="container mx-auto px-4 relative z-10">

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Des solutions pour <br />
            <span className="text-gray-400">chaque métier</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Que vous soyez professionnel libéral, PME ou indépendant,
            nous créons le site qui correspond à vos besoins
          </p>
        </motion.div>

        {/* =============================================
            DESKTOP: layout з двох колонок (як раніше)
            MOBILE: accordion всередині кожної картки
            ============================================= */}

        {/* DESKTOP lg+ */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Ліва колонка — картки */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {clients.map((client, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${
                  activeIndex === index
                    ? 'border-gray-900 bg-gray-50 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl flex-shrink-0 ${
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
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 flex gap-3"
                      >
                        {client.stats.map((stat, idx) => (
                          <div key={idx} className="bg-white px-3 py-2 rounded-lg shadow-sm">
                            <div className="text-sm font-bold text-gray-900">{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Права колонка — зображення */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {activeIndex >= 0 && (
              <>
                <div className={`absolute inset-0 bg-gradient-to-br ${clients[activeIndex].color} rounded-3xl blur-3xl`} />
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                  <div className="relative h-80">
                    <Image
                      src={clients[activeIndex].image}
                      alt={clients[activeIndex].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">Success story</span>
                      </div>
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
              </>
            )}
          </motion.div>
        </div>

        {/* =============================================
            MOBILE: accordion — контент розкривається
            прямо під карткою, юзер не скролить нікуди
            ============================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="lg:hidden space-y-3 mb-12"
        >
          {clients.map((client, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border-2 overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-gray-900 shadow-lg' : 'border-gray-200'
                }`}
              >
                {/* Header картки — завжди видимий */}
                <button
                  onClick={() => handleCardClick(index)}
                  className={`w-full text-left p-5 transition-colors ${
                    isOpen ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl flex-shrink-0 ${
                      isOpen ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {client.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900">{client.title}</h3>
                      <p className="text-gray-500 text-sm mt-0.5 line-clamp-1">{client.description}</p>
                    </div>
                    {/* Chevron індикатор */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 text-gray-400"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>

                {/* ✅ Контент розкривається одразу під кнопкою */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-200">
                        {/* Зображення */}
                        <div className="relative h-48">
                          <Image
                            src={client.image}
                            alt={client.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <div className="flex items-center gap-1.5 mb-1">
                              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs font-medium">Success story</span>
                            </div>
                            <p className="text-sm font-semibold leading-snug">{client.success}</p>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="p-4 grid grid-cols-2 gap-3 bg-white">
                          {client.stats.map((stat, idx) => (
                            <div key={idx} className="text-center bg-gray-50 rounded-xl py-3">
                              <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            <span>Parler de votre projet</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}