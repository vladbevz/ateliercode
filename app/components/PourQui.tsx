// app/components/PourQui.tsx - ВИПРАВЛЕНО
'use client';

import { Briefcase, Building, UserCheck, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function PourQui() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const clients = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Professions libérales",
      description: "Avocats, médecins, consultants — une présence en ligne élégante qui inspire confiance et reflète votre expertise.",
      features: ["Design institutionnel", "SEO spécialisé", "Portfolio professionnel"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "PME & TPE ambitieuses",
      description: "Votre entreprise mérite un site qui valorise votre savoir-faire. Minimaliste, efficace, tourné vers la conversion.",
      features: ["Performance optimisée", "Interface client", "Lead generation"]
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Indépendants & créateurs",
      description: "Artisans, designers, coachs — une vitrine digitale qui raconte votre histoire et met en lumière votre unicité.",
      features: ["Narration visuelle", "Portfolio impactant", "Présentation personnalisée"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 100 
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Елегантний градієнтний фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gray-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gray-800/5 rounded-full blur-3xl"></div>
      </div>

      {/* Тонка геометрична сітка */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #fff 1px, transparent 2px),
                           linear-gradient(180deg, #fff 1px, transparent 2px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок секції */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Утончений бейдж */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900/50 border border-gray-800 backdrop-blur-sm mb-8"
          >
            <Target className="w-4 h-4 text-gray-300" />
            <span className="text-sm font-medium text-gray-300 tracking-wider">
              POUR QUI ?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight"
          >
            <span className="block text-white">Professionnels</span>
            <span className="block text-gray-400 font-normal mt-4 text-3xl md:text-4xl">
              à la recherche d'élégance digitale
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Nous créons des expériences digitales raffinées pour ceux qui valorisent 
            l'esthétique, la performance et l'authenticité.
          </motion.p>
        </motion.div>

        {/* Картки клієнтів */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Градієнтний бордер при ховері */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              
              {/* Основна картка - ТЕПЕР ПРОСТО DIV */}
              <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-600 overflow-hidden">
                
                {/* Акцентна лінія */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Іконка */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring" as const, stiffness: 300 }}
                  className="mb-8"
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 group-hover:border-gray-500 transition-colors">
                    <div className="text-gray-300 group-hover:text-white transition-colors">
                      {client.icon}
                    </div>
                  </div>
                </motion.div>

                {/* Заголовок */}
                <h3 className="text-2xl font-bold mb-5 text-white leading-tight">
                  {client.title}
                </h3>

                {/* Опис */}
                <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light group-hover:text-gray-300 transition-colors">
                  {client.description}
                </p>

                {/* Особливості */}
                <div className="space-y-3 mt-8 pt-8 border-t border-gray-800/50">
                  {client.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-gray-400 transition-colors"></div>
                      <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Нижній CTA - ЗМІНЕНО ПОСИЛАННЯ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 pt-16 border-t border-gray-800/30"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-gray-500 mb-8 text-lg font-light"
          >
            Votre profil n'apparaît pas ? Chaque projet est unique.
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/contact" // ЗМІНЕНО з #contact на /contact
              className="inline-flex items-center gap-4 px-12 py-4 rounded-xl bg-white text-black font-semibold text-lg hover:bg-gray-50 transition-all group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Étudions votre projet ensemble</span>
              {/* Стрілку можна залишити тут, бо це посилання на контакти */}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}