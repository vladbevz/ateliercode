'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  { title: 'Le 438', category: 'Restauration', description: 'Site vitrine avec menu interactif', image: '/images/qui-restaurant.webp', liveUrl: 'https://le438-restaurant.vercel.app/', githubUrl: 'https://github.com/vladbevz/le438_restaurant' },
  { title: 'Portfolio Photographe', category: 'Photographe', description: 'Portfolio avec galerie haute performance', image: '/images/qui-photographe.webp', liveUrl: 'https://www.anastasiasyrmais.pro/', githubUrl: 'https://github.com/vladbevz/photographer_portfolio' },
  { title: 'AquaTracker', category: 'Application', description: "Application de suivi d'hydratation", image: '/images/qui-aquatracker.webp', liveUrl: 'https://aqua-tracker-fe-rose.vercel.app/', githubUrl: 'https://github.com/vladbevz/aqua-tracker-FE' },
  { title: 'Chocolatier', category: 'Artisanat', description: 'E-commerce pour chocolatier', image: '/images/qui-chokolatier.webp', liveUrl: 'https://vladbevz.github.io/Simply-chocolate/', githubUrl: 'https://github.com/vladbevz/Simply-chocolate' },
];

export default function Realisations() {
  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Réalisations</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-100 leading-[0.9] mb-5">
            Des projets qui<br />
            <span className="text-zinc-500">parlent d&apos;eux-mêmes.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Découvrez comment nous avons transformé la présence en ligne de nos clients.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-zinc-900 aspect-[4/3] border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-zinc-300 z-10 border border-zinc-700/50">
                  {project.category}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/40 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-xl font-bold text-zinc-100 mb-1">{project.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-xl text-sm font-bold transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Site
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-zinc-800/80 backdrop-blur-sm text-zinc-200 rounded-xl text-sm font-semibold border border-zinc-700 hover:bg-zinc-700 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-black tracking-tighter text-zinc-100 mb-5">
                Explorez tous nos projets sur GitHub
              </h3>
              <motion.a
                href="https://github.com/vladbevz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl font-semibold transition-all border border-zinc-700"
              >
                <Github className="w-5 h-5" />
                Voir mon GitHub
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-2xl font-bold transition-all shadow-lg shadow-amber-400/20"
          >
            Vous avez un projet similaire ?
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
