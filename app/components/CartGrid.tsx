// app/components/CardGrid.tsx - ВИПРАВЛЕНО
'use client';

import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CardGrid() {
  const cards = [
    {
      title: "Pour Qui ?",
      description: "Artisans, indépendants, professions libérales — découvrez si notre approche vous correspond.",
      link: "/pourqui",
      icon: "👥",
      stats: "3 profils",
      features: ["Cibles précises", "Expertise sectorielle", "Solutions adaptées"]
    },
    {
      title: "Notre Processus",
      description: "4 étapes simples, transparentes et sans surprise pour votre site web.",
      link: "/processus",
      icon: "⚙️",
      stats: "4 étapes",
      features: ["Transparent", "Sans surprise", "Rapide"]
    },
    {
      title: "Tarifs",
      description: "Des prix clairs et fixes. Pas de surprises, pas de frais cachés.",
      link: "/tarifs",
      icon: "💰",
      stats: "À partir de 499€",
      features: ["Forfaits fixes", "Transparent", "Sans frais cachés"]
    },
    {
      title: "Pourquoi Nous ?",
      description: "Simplicité, expertise et accompagnement personnalisé font la différence.",
      link: "/pourquoinous",
      icon: "🎯",
      stats: "100% dédié",
      features: ["Expertise technique", "Accompagnement", "Simplicité"]
    },
    {
      title: "FAQ",
      description: "Réponses aux questions fréquentes sur la création de site web.",
      link: "/faq",
      icon: "❓",
      stats: "Questions/Réponses",
      features: ["Transparent", "Complet", "Actualisé"]
    },
    {
      title: "Contact",
      description: "Parlons de votre projet. Premier contact gratuit et sans engagement.",
      link: "/contact",
      icon: "📞",
      stats: "24h de réponse",
      features: ["Rapide", "Personnel", "Gratuit"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Фон у стилі ваших компонентів */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-gray-900/10 to-gray-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-l from-gray-900/10 to-gray-800/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/0 via-black/40 to-black"></div>
      </div>

      {/* Тонка сітка */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(180deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок секції */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900/30 border border-gray-800 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-gray-300" />
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              EXPLOREZ NOS SERVICES
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            <span className="block text-white">Tout ce dont vous avez besoin</span>
            <span className="block text-gray-400 font-normal mt-4 text-3xl md:text-4xl">
              en un seul endroit
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Chaque aspect de notre service détaillé et accessible. Cliquez pour explorer.
          </motion.p>
        </motion.div>

        {/* Сітка карток */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                borderColor: "#6b7280",
                backgroundColor: "rgba(17, 24, 39, 0.5)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
              }}
              className="relative group h-full"
            >
              {/* Градієнтний ефект при ховері */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              
              {/* Основна картка */}
              <Link href={card.link} className="block h-full">
                <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-600 overflow-hidden">
                  
                  {/* Акцентна лінія */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Заголовок та іконка */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-4xl mb-4">{card.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                    </div>
                    
                    {/* Бейдж статистики */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 group-hover:border-gray-500 transition-colors">
                      <span className="text-xs font-medium text-gray-300 group-hover:text-gray-200">{card.stats}</span>
                    </div>
                  </div>

                  {/* Опис */}
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light group-hover:text-gray-300 transition-colors">
                    {card.description}
                  </p>

                  {/* Особливості */}
                  <div className="space-y-3 mt-8 pt-8 border-t border-gray-800/50">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" />
                        <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* ЕЛЕГАНТНИЙ ІНДИКАТОР - ВИПРАВЛЕНО */}
                  <div className="mt-10 pt-6 border-t border-gray-800/30">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                        Explorer cette section
                      </span>
                      <div className="relative">
                        {/* Основна стрілка */}
                        <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-gray-500 group-hover:bg-gray-800/50 transition-all duration-300">
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                        
                        {/* Ховер-ефект - круговий */}
                        <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gray-500/30 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Підсумок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20 pt-16 border-t border-gray-800/30"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-gray-500 mb-8 text-lg font-light"
          >
            Vous avez une question spécifique ? Nous avons probablement la réponse.
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 px-12 py-4 rounded-xl bg-white text-black font-semibold text-lg hover:bg-gray-50 transition-all group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Parler de mon projet maintenant</span>
              <ArrowRight className="w-5 h-5 relative group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Декоративний елемент */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-12"
          >
            <div className="inline-flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <span className="font-medium">Navigation intuitive</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <span className="font-medium">Contenu détaillé</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <span className="font-medium">Accès rapide</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}