// app/components/PourquoiNous.tsx
'use client';

import { Shield, Euro, Users, Zap, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PourquoiNous() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const advantages = [
    {
      icon: <Euro className="w-6 h-6" />,
      title: "Prix fixes",
      description: "Pas de surprise, pas de frais cachés. Le prix annoncé est le prix final.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Communication directe",
      description: "Je suis votre unique interlocuteur. Réponses rapides et claires.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Approche personnelle",
      description: "Je travaille uniquement avec les artisans et petites entreprises.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Simple et efficace",
      description: "Des sites qui fonctionnent, sans complication technique.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapide",
      description: "La plupart des sites sont livrés en 1-2 semaines.",
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Sans engagement",
      description: "Premier appel gratuit. Pas d'engagement à long terme.",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const stats = [
    { value: "1", label: "Interlocuteur unique" },
    { value: "100%", label: "Prix transparents" },
    { value: "2-3", label: "Semaines moyenne" },
    { value: "50/50", label: "Paiement simple" }
  ];

  return (
    <section 
      id="pourquoinous" 
      ref={containerRef}
      className="relative py-20 overflow-hidden bg-black"
    >
      {/* Простий сітковий фон */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #333 1px, transparent 1px),
                           linear-gradient(180deg, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-narrow relative z-10">
        {/* Заголовок секції */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 border border-gray-800 mb-6">
            <span className="text-sm font-medium text-gray-300">
              POURQUOI CHOISIR NOS SERVICES
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Simple, direct,</span>
            <br />
            <span className="text-gray-400 font-normal mt-2 block">sans complication</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Je travaille différemment des grosses agences. Plus simple, plus humain, plus efficace.
          </motion.p>
        </motion.div>

        {/* Переваги */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {/* Картка */}
              <div className="relative h-full bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-gray-700 transition-colors">
                
                {/* Іконка */}
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-gray-800">
                    <div className="text-gray-300">
                      {advantage.icon}
                    </div>
                  </div>
                </div>

                {/* Контент */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Блок з акцентом */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="relative mb-14"
        >
          <div className="relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 p-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <span className="text-sm font-medium text-gray-300">POUR LES ARTISANS FRANÇAIS</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Je comprends vos besoins réels
              </h3>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                En tant que freelance, je travaille directement avec vous, sans intermédiaire. 
                Je comprends les contraintes des petites entreprises et je crée des solutions adaptées.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700">
                  <span className="text-sm text-gray-300">Facturation en euros</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700">
                  <span className="text-sm text-gray-300">Support en français</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700">
                  <span className="text-sm text-gray-300">Hébergement inclus</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 text-center">
                  {/* Значення */}
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  
                  {/* Підпис */}
                  <div className="text-sm font-medium text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Кнопка CTA */}
          <div className="text-center mt-12 pt-8 border-t border-gray-800">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors"
            >
              <span>Parler de votre projet</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <p className="text-gray-500 text-sm mt-4">
              Appel découverte gratuit • Sans engagement
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}