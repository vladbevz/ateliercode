// app/components/PourQui.tsx
'use client';

import { Users, TrendingUp, RefreshCw, Target, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PourQui() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const clients = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "L'artisan qui débute en ligne",
      description: "Vous avez un métier, mais personne ne vous trouve sur Internet. Je crée votre site vitrine pour attirer vos premiers clients.",
      stats: "Premiers pas digitaux"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "L'indépendant qui veut grandir",
      description: "Vous avez des clients, mais vous voulez en avoir plus. Votre site devient votre meilleur outil commercial.",
      stats: "Croissance organisée"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "La petite entreprise qui veut moderniser son image",
      description: "Votre site a 10 ans et ne vous représente plus. Je le refais simple, moderne et efficace.",
      stats: "Image actualisée"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="pourqui" 
      ref={containerRef}
      className="relative py-20 overflow-hidden bg-black"
    >
      {/* Простий фон - тільки лінії */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, #333 1px, transparent 1px),
                             linear-gradient(180deg, #333 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-narrow relative z-10">
        {/* Заголовок секції */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          {/* Простий бейдж */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-800 mb-6">
            <Target className="w-4 h-4 text-gray-300" />
            <span className="text-sm font-medium text-gray-300">
              QUI BÉNÉFICIE DE NOS SERVICES
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Vous êtes...</span>
            <br />
            <span className="text-gray-400 font-normal mt-2 block">notre priorité</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Je crée des sites pour ceux qui font vivre la France — avec une approche{" "}
            <span className="font-medium text-gray-300">directe et pragmatique</span>
          </motion.p>
        </motion.div>

        {/* Картки клієнтів */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {/* Основна картка */}
              <div className="relative bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors h-full">
                
                {/* Іконка */}
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-lg bg-gray-800">
                    <div className="text-gray-300">
                      {client.icon}
                    </div>
                  </div>
                </div>

                {/* Заголовок */}
                <h3 className="text-xl font-bold mb-4 text-white leading-tight">
                  {client.title}
                </h3>

                {/* Опис */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {client.description}
                </p>

                {/* Статистика */}
                <div className="flex items-center justify-between pt-5 border-t border-gray-800 mt-auto">
                  <div className="text-sm font-medium text-gray-500">
                    {client.stats}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                    <span className="text-sm font-medium text-gray-300">
                      Profil #{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Нижній CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 pt-12 border-t border-gray-800"
        >
          <p className="text-gray-500 mb-6">
            Vous ne vous reconnaissez pas dans ces profils ?
          </p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors"
          >
            <span>Parlez-moi de votre projet</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}