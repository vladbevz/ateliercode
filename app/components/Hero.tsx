// app/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4">
      
      {/* Тонкі сірі лінії фону */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #333 1px, transparent 1px), linear-gradient(180deg, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Прості сірі акценти */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gray-800 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gray-800 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Простий бейдж */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 border border-gray-800 mb-10"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gray-300" />
              <span className="text-sm font-medium text-gray-300">
                Nouvelle Agence • Simple et Efficace
              </span>
            </div>
          </motion.div>

          {/* Головний заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="block text-white">Votre site web,</span>
              <span className="block mt-4">
                <span className="relative">
                  <span className="text-white">
                    sans complexité
                  </span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gray-300 rounded-full"
                  />
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Субтитри */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Sites web clairs et fonctionnels pour artisans débutants, indépendants et petites entreprises. 
          </motion.p>

          {/* Кнопки CTA - чорно-білі */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group relative px-10 py-4 rounded-xl bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <span className="relative flex items-center justify-center gap-3">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#realisations"
              className="group px-10 py-4 rounded-xl border-2 border-gray-700 hover:border-gray-400 text-white font-semibold text-lg transition-colors"
            >
              <span className="flex items-center justify-center gap-3">
                Voir nos réalisations
              </span>
            </motion.a>
          </motion.div>

          {/* Статистика - чорно-сіра */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { 
                value: "À partir de", 
                label: "499€", 
                desc: "Site simple et complet",
              },
              { 
                value: "Délai moyen", 
                label: "7-10 jours", 
                desc: "Rapide et fiable",
              },
              { 
                value: "Accompagnement", 
                label: "Personnel", 
                desc: "Votre unique contact",
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="relative text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <div className="relative z-10">
                  <div className="text-sm text-gray-400 mb-1">{stat.value}</div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Простий індикатор довіри */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <p className="text-sm text-gray-500 mb-3">Pour les artisans qui débutent en ligne</p>
            <div className="flex justify-center gap-6">
              <div className="text-xl text-gray-600">👨‍🍳</div>
              <div className="text-xl text-gray-600">👩‍🎨</div>
              <div className="text-xl text-gray-600">👨‍🔧</div>
              <div className="text-xl text-gray-600">👩‍💻</div>
            </div>
          </motion.div>

          {/* Мінімалістичний індикатор прокрутки */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-gray-600 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .container-narrow {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
      `}</style>
    </section>
  );
}