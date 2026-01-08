// app/components/PourquoiNous.tsx
'use client';

import { Shield, Euro, Users, Zap, MessageSquare, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PourquoiNous() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const advantages = [
    {
      icon: <Euro className="w-8 h-8" />,
      title: "Prix fixes et transparents",
      description: "Pas de surprise, pas de frais cachés. Le prix annoncé est le prix final, tout compris.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Communication directe",
      description: "Un seul interlocuteur dédié à votre projet. Réponses rapides et claires.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Approche personnalisée",
      description: "Chaque projet est unique. Nous adaptons notre approche à vos besoins spécifiques.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Simplicité garantie",
      description: "Des sites intuitifs, faciles à gérer, sans complication technique inutile.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Livraison rapide",
      description: "Délais optimisés sans compromis sur la qualité. La plupart des sites en 1-3 semaines.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Sans engagement",
      description: "Première consultation gratuite. Aucun engagement à long terme requis.",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const stats = [
    { value: "1", label: "Interlocuteur unique", icon: <Users className="w-5 h-5" /> },
    { value: "100%", label: "Prix transparents", icon: <Euro className="w-5 h-5" /> },
    { value: "2-3", label: "Semaines moyenne", icon: <Clock className="w-5 h-5" /> },
    { value: "50/50", label: "Paiement simple", icon: <CheckCircle className="w-5 h-5" /> }
  ];

  return (
    <section 
      id="pourquoinous" 
      ref={containerRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="absolute top-1/3 -left-40 w-[700px] h-[700px] bg-gray-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-[700px] h-[700px] bg-gray-800/5 rounded-full blur-3xl"></div>
      </div>

      {/* Геометричний патерн */}
      <div className="absolute inset-0 z-0 opacity-[0.01]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container-narrow relative z-10">
        {/* Заголовок секції */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Бейдж */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-gray-900/50 border border-gray-800 backdrop-blur-sm mb-8"
          >
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              POURQUOI NOUS CHOISIR
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight"
          >
            <span className="block text-white">Simple, direct,</span>
            <span className="block text-gray-400 font-normal mt-4 text-3xl md:text-4xl">
              sans complication
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Une approche différente des grosses agences : plus humaine, plus directe, plus efficace.
          </motion.p>
        </motion.div>

        {/* Переваги */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Акцент при ховері */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

              {/* Картка */}
              <div className="relative h-full bg-gradient-to-br from-gray-900/40 to-black/40 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-600 overflow-hidden">
                
                {/* Верхня акцентна лінія */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Іконка */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-flex p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 group-hover:border-gray-500 transition-colors"
                  >
                    <div className="text-gray-300 group-hover:text-white transition-colors">
                      {advantage.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Контент */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-4 px-12 py-4 rounded-xl bg-white text-black font-semibold text-lg hover:bg-gray-50 transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Parler de votre projet</span>
            <ArrowRight className="w-5 h-5 relative group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
          <p className="text-gray-500 text-sm mt-6 font-light">
            Appel découverte gratuit • Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}