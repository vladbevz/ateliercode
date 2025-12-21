// app/components/Realisations.tsx
'use client';

import { ExternalLink, Eye, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Realisations() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Масив проектів - легко додавати нові
  const projects = [
    {
      title: "Laboratoire Médical",
      type: "Site vitrine",
      description: "Site professionnel pour laboratoire d'analyses médicales avec prise de rendez-vous en ligne.",
      tags: ["Santé", "Rendez-vous", "Professionnel"],
      duration: "2 semaines",
      technologies: ["Next.js", "Tailwind", "TypeScript"],
      liveUrl: "https://lab-example.com",
      emoji: "🧪",
      bgColor: "bg-gray-800",
      accentColor: "text-blue-400"
    },
    {
      title: "Aqua Tracker",
      type: "Application web",
      description: "Application de suivi de consommation d'eau avec statistiques et objectifs personnalisés.",
      tags: ["Wellness", "Tracking", "Mobile"],
      duration: "3 semaines",
      technologies: ["React", "Chart.js", "PWA"],
      liveUrl: "https://aquatracker.app",
      emoji: "💧",
      bgColor: "bg-gray-800",
      accentColor: "text-cyan-400"
    },
    {
      title: "Chocolatier Artisanal",
      type: "Site e-commerce",
      description: "Boutique en ligne pour chocolatier artisanal avec catalogue produits et commande en ligne.",
      tags: ["Artisanat", "Boutique", "Gourmet"],
      duration: "2 semaines",
      technologies: ["Next.js", "Stripe", "CMS"],
      liveUrl: "https://chocolat-artisan.fr",
      emoji: "🍫",
      bgColor: "bg-gray-800",
      accentColor: "text-amber-400"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="realisations" 
      ref={containerRef}
      className="relative py-20 overflow-hidden bg-black"
    >
      {/* Фон - сітка */}
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
              NOS RÉALISATIONS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Projets récents</span>
            <br />
            <span className="text-gray-400 font-normal mt-2 block">et fonctionnels</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Quelques exemples de sites que j'ai créés. Simples, efficaces, adaptés aux besoins.
          </motion.p>
        </motion.div>

        {/* Сітка проектів */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Основна картка */}
              <div className="relative h-full bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-colors">
                
                {/* Хедер з емоційкою */}
                <div className={`relative h-40 ${project.bgColor} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                      className="text-7xl opacity-90"
                    >
                      {project.emoji}
                    </motion.div>
                  </div>
                  
                  {/* Бейдж типу проекту */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm border border-gray-700">
                      <span className="text-xs font-medium text-gray-300">{project.type}</span>
                    </div>
                  </div>
                  
                  {/* Посилання на живу версію */}
                  {project.liveUrl && (
                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-black text-sm font-medium hover:bg-white transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Visiter
                    </motion.a>
                  )}
                </div>

                {/* Контент картки */}
                <div className="p-6">
                  {/* Заголовок та інформація */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Технології */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Technologies :</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 rounded text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Теги */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-400 border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Нижній рядок з датою та деталями */}
                  <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <button className="flex items-center gap-1 text-gray-400 hover:text-gray-300 transition-colors text-sm">
                      <Eye className="w-4 h-4" />
                      <span>Détails</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA секція */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
            {/* Контент */}
            <div className="p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Votre projet ici ?
                  </h3>
                  
                  <p className="text-gray-400 text-lg max-w-2xl">
                    Discutons de votre site web lors d'un appel gratuit de 30 minutes.
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors"
                  >
                    <span>Parler de mon projet</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}