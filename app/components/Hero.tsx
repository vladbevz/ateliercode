// app/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Clock, User, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      
      {/* Чисто чорно-сірий фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-gray-900/10 to-gray-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-l from-gray-900/10 to-gray-800/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/0 via-black/40 to-black"></div>
      </div>

      {/* Тонка сіра сітка */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(180deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container-narrow relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Сірий бейдж */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900/30 border border-gray-800 mb-12 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gray-300" />
              <span className="text-sm font-medium text-gray-300 tracking-wide">
                Agence web • Simplicité & Efficacité
              </span>
            </div>
          </motion.div>

          {/* Заголовок в чорно-білих тонах */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-10"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none">
              <span className="block text-white">
                Votre site web,
              </span>
              <span className="block mt-2">
                <span className="relative inline-block">
                  <span className="text-white">
                    sans complexité
                  </span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                    className="absolute -bottom-3 left-0 h-[2px] bg-gradient-to-r from-gray-500 to-gray-700 rounded-full"
                  />
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Сірий субтитр */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-14 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Sites web minimalistes et performants pour artisans, indépendants, professions libérales 
            et entreprises qui valorisent l'essentiel.
          </motion.p>

          {/* Кнопки в чорно-білій гамі */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
                backgroundColor: "#f9fafb"
              }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group relative px-12 py-5 rounded-xl bg-white text-black font-semibold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-3">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.a>

            <motion.a
              whileHover={{ 
                scale: 1.05, 
                borderColor: "#9ca3af",
                backgroundColor: "rgba(17, 24, 39, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              href="#realisations"
              className="group px-12 py-5 rounded-xl border-2 border-gray-700 hover:border-gray-400 text-white font-semibold text-lg transition-all duration-300 hover:bg-gray-900/30"
            >
              <span className="flex items-center justify-center gap-3">
                Voir nos réalisations
              </span>
            </motion.a>
          </motion.div>

          {/* Статистика в сірих тонах */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { 
                icon: <TrendingUp className="w-6 h-6" />,
                value: "À partir de", 
                label: "499€", 
                desc: "Site sur mesure premium",
                delay: 0.9
              },
              { 
                icon: <Clock className="w-6 h-6" />,
                value: "Délai moyen", 
                label: "5-10 jours", 
                desc: "Délais optimisés et respectés",
                delay: 1.0
              },
              { 
                icon: <User className="w-6 h-6" />,
                value: "Accompagnement", 
                label: "Personnel", 
                desc: "Expert dédié à votre projet",
                delay: 1.1
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  borderColor: "#6b7280",
                  backgroundColor: "rgba(17, 24, 39, 0.5)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
                }}
                className="relative text-center p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                {/* Сірий акцент при ховері */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-gray-900/50 border border-gray-800 text-gray-300 group-hover:text-white transition-colors">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 mb-2 font-medium tracking-wide">{stat.value}</div>
                  <div className="text-4xl font-bold mb-3 text-white">
                    {stat.label}
                  </div>
                  <div className="text-gray-500 text-sm font-light">
                    {stat.desc}
                  </div>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Check className="w-5 h-5 text-gray-400 mx-auto" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Переваги в сірих тонах */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-16 pt-12 border-t border-gray-800/30"
          >
            <div className="inline-flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <span className="font-medium">Design minimaliste</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <span className="font-medium">SEO optimisé</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <span className="font-medium">Mobile first</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <span className="font-medium">Maintenance incluse</span>
              </div>
            </div>
          </motion.div>

          {/* Сірий індикатор прокрутки */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-gray-600 tracking-widest font-light">EXPLORER</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-gray-700 via-gray-500 to-transparent"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}