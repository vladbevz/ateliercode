// app/components/Realisations.tsx
'use client';

import { ExternalLink, Github, ArrowRight, Code, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Realisations() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Просто 3 проекти
  const projects = [
    {
      title: "Laboratoire Dentaire",
      category: "Santé",
      description: "Site pour laboratoire dentaire avec prise de rendez-vous et présentation des services.",
      liveUrl: "https://dm-lab.pl/",
      githubUrl: "https://github.com/vladbevz/dm-laboratorium",
      preview: "dental",
      accent: "🦷"
    },
    {
      title: "Aqua Tracker",
      category: "Wellness",
      description: "Application de suivi de consommation d'eau avec objectifs quotidiens.",
      liveUrl: "https://aqua-tracker-fe-rose.vercel.app/",
      githubUrl: "https://github.com/vladbevz/aqua-tracker-FE", 
      preview: "aqua",
      accent: "💧"
    },
    {
      title: "Chocolatier",
      category: "Artisanat",
      description: "Site vitrine pour chocolatier avec galerie produits et informations.",
      liveUrl: "https://vladbevz.github.io/Simply-chocolate/",
      githubUrl: "https://github.com/vladbevz/Simply-chocolate",
      preview: "chocolate",
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
      transition: { 
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-20"
    >
      {/* Простий фон */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Скромний заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800 mb-6">
            <span className="text-sm font-medium text-gray-300">
              MES PROJETS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Quelques réalisations</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Des projets concrets qui illustrent mon approche du développement web.
          </motion.p>
        </motion.div>

        {/* Прості картки проектів */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Картка */}
              <div className="relative h-full bg-gray-900/50 rounded-xl border border-gray-800 p-6 hover:border-gray-700 transition-colors">
                
                {/* Емодзі та заголовок */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{project.accent}</span>
                  <div>
                    <div className="text-xs text-gray-500">{project.category}</div>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                {/* Просте превью */}
                <div className="mb-4 p-3 rounded-lg bg-gray-900/50 border border-gray-800 h-32 flex items-center justify-center">
                  <div className="text-5xl opacity-30">
                    {project.accent}
                  </div>
                </div>

                {/* Опис */}
                <p className="text-gray-400 text-sm mb-5">
                  {project.description}
                </p>

                {/* Посилання */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Monitor className="w-4 h-4" />
                    <span>Voir le site</span>
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Кнопка GitHub - простіше */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-6 max-w-lg mx-auto">
            Vous pouvez explorer tous mes projets, contributions et code source sur GitHub.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/vladbevz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>Voir tous mes projets sur GitHub</span>
            </a>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 text-white font-medium hover:border-gray-500 transition-colors"
            >
              <span>Parler d'un projet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Tous les projets sont déployés sur Vercel avec code source disponible.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}