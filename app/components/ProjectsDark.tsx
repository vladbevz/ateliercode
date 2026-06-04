'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AtelierCode',
    category: 'Agence web',
    desc: 'Le site que vous visitez — Next.js 14, Tailwind CSS, Framer Motion, score Lighthouse 98.',
    image: '/images/qui-photographe.webp',
    href: '/',
    stat: '98/100',
    statLabel: 'Lighthouse',
  },
  {
    title: 'AquaTracker',
    category: 'Application',
    desc: 'Application de suivi d\'hydratation — 500 utilisateurs dès le lancement.',
    image: '/images/qui-aquatracker.webp',
    href: 'https://aqua-tracker-fe-rose.vercel.app/',
    stat: '500+',
    statLabel: 'utilisateurs',
    external: true,
  },
  {
    title: 'Chocolatier',
    category: 'E-commerce',
    desc: 'Site vitrine artisan avec galerie produits et commandes.',
    image: '/images/qui-chokolatier.webp',
    href: 'https://vladbevz.github.io/Simply-chocolate/',
    stat: '+40%',
    statLabel: 'conversions',
    external: true,
  },
];

export default function ProjectsDark() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section ref={ref} className="relative bg-zinc-900 py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">
              Réalisations
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-100 leading-[0.9]">
              Ce qu&apos;on livre.<br />
              <span className="text-zinc-500">Concret. Mesurable.</span>
            </h2>
          </div>
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-amber-400 transition-colors shrink-0"
          >
            Voir tous les projets
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + idx * 0.12, duration: 0.6 }}
            >
              <Link
                href={project.href}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noopener noreferrer' : undefined}
                className="group block h-full"
              >
                <div className="relative rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 transition-all h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-semibold text-zinc-300 bg-zinc-900/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-zinc-700/50">
                        {project.category}
                      </span>
                    </div>

                    {/* External icon */}
                    {project.external && (
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center">
                          <ExternalLink className="w-3.5 h-3.5 text-zinc-950" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="shrink-0 text-right">
                        <div className="text-lg font-black text-amber-400 leading-tight">{project.stat}</div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wide">{project.statLabel}</div>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">{project.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
