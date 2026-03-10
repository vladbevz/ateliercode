// app/components/Realisations.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Sparkles, ArrowRight } from 'lucide-react';

export default function Realisations() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Le 438",
      category: "Restauration",
      description: "Site simple avec menu interactif",
      image: "/images/qui-restaurant.webp",
      liveUrl: "https://le438-restaurant.vercel.app/",
      githubUrl: "https://github.com/vladbevz/le438_restaurant"
    },
    {
      title: "Portfolio Photographe",
      category: "Photographe",
      description: "Portfolio avec galerie haute performance",
      image: "/images/qui-photographe.webp",
      liveUrl: "https://photographer-portfolio-pied-ten.vercel.app/",
      githubUrl: "https://github.com/vladbevz/photographer_portfolio"
    },
    {
      title: "AquaTracker",
      category: "Application",
      description: "Application de suivi d'hydratation",
      image: "/images/qui-aquatracker.webp",
      liveUrl: "https://aqua-tracker-fe-rose.vercel.app/",
      githubUrl: "https://github.com/vladbevz/aqua-tracker-FE"
    },
    {
      title: "Laboratoire Dentaire",
      category: "Médical",
      description: "Site vitrine avec prise de rendez-vous",
      image: "/images/qui-dental.webp",
      liveUrl: "https://dm-laboratorium.vercel.app/",
      githubUrl: "https://github.com/vladbevz/dm-laboratorium"
    },
    {
      title: "Chocolatier",
      category: "Artisanat",
      description: "E-commerce pour chocolatier",
      image: "/images/qui-chokolatier.webp",
      liveUrl: "https://vladbevz.github.io/Simply-chocolate/",
      githubUrl: "https://github.com/vladbevz/Simply-chocolate"
    }
  ];

  return (
    <section  className="relative py-32 bg-white overflow-hidden">
      {/* Світлий фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

      <div  ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Des projets qui <br />
            <span className="text-gray-400">parlent d'eux-mêmes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous avons transformé la présence en ligne de nos clients
          </p>
        </motion.div>

        {/* Grille de projets - style agence */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient - apparaît au hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                />

                {/* Category badge - toujours visible */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 z-10">
                  {project.category}
                </div>

                {/* Contenu au hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col justify-end p-6 z-20"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                  
                  {/* Boutons d'action */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Site</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg text-sm font-medium border border-white/20 hover:bg-gray-900/70 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub block - simplifié */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-24 max-w-4xl mx-auto text-center"
        >
          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-200 rounded-full blur-3xl opacity-50" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Explorez tous nos projets sur GitHub
              </h3>
              
              <motion.a
                href="https://github.com/vladbevz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5" />
                <span>Voir mon GitHub</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            <span>Vous avez un projet similaire ?</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}