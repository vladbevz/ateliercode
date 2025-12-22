// app/components/Realisations.tsx
'use client';

import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Realisations() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Ваші реальні проекти
  const projects = [
    {
      title: "Laboratoire Médical",
      category: "Santé",
      description: "Site professionnel pour laboratoire d'analyses médicales avec prise de rendez-vous en ligne.",
      url: "https://lab-example.com",
      accent: "🧪"
    },
    {
      title: "Aqua Tracker",
      category: "Wellness",
      description: "Application de suivi de consommation d'eau avec statistiques et objectifs personnalisés.",
      url: "https://aquatracker.app",
      accent: "💧"
    },
    {
      title: "Chocolatier Artisanal",
      category: "Artisanat",
      description: "Boutique en ligne pour chocolatier artisanal avec catalogue produits et commande en ligne.",
      url: "https://chocolat-artisan.fr",
      accent: "🍫"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      id="realisations" 
      ref={containerRef}
      className="relative py-20"
    >
      {/* Мінімальний фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      </div>

      <div className="container-narrow relative z-10">
        {/* Скромний заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800 mb-6">
            <span className="text-sm font-medium text-gray-300">
              EXEMPLES DE RÉALISATIONS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Quelques projets</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Des sites simples et efficaces créés pour différents professionnels.
          </motion.p>
        </motion.div>

        {/* Прості картки з вашими проектами */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {/* Проста картка */}
              <div className="relative h-full bg-gray-900/50 rounded-xl border border-gray-800 p-6 hover:border-gray-700 transition-colors">
                
                {/* Акцентний елемент */}
                <div className="text-4xl mb-4">{project.accent}</div>
                
                {/* Категорія */}
                <div className="mb-2">
                  <span className="text-xs font-medium text-gray-500 tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                {/* Заголовок - ваші реальні назви */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                {/* Ваш реальний опис */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Посилання на ваші реальні сайти */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Voir le site</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Скромний CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-500 mb-6 max-w-lg mx-auto">
            Ces exemples donnent une idée du style et de la simplicité que nous proposons.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors"
          >
            <span>Parler de votre projet</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}