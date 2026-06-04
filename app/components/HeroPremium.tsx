'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Zap, TrendingUp, Users, Award } from 'lucide-react';

const metrics = [
  { icon: <Zap className="w-4 h-4" />, value: '< 1s', label: 'chargement' },
  { icon: <TrendingUp className="w-4 h-4" />, value: '+40%', label: 'de clients' },
  { icon: <Users className="w-4 h-4" />, value: '10+', label: 'projets livrés' },
  { icon: <Award className="w-4 h-4" />, value: '95+', label: 'Lighthouse' },
];

export default function HeroPremium() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-zinc-950 flex items-center justify-center overflow-hidden"
    >
      {/* Gradient blobs */}
      <motion.div style={{ y: blobY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/5 rounded-full blur-[100px]" />
      </motion.div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Horizontal lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />
      <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 container mx-auto px-4 text-center pt-16"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-sm font-medium text-zinc-400 tracking-wide">
            Agence web · Nîmes · Gard (30)
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.88] mb-8"
        >
          <span className="block text-zinc-100">Sites web qui</span>
          <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            convertissent.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg md:text-xl text-zinc-400 max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Sur mesure. Rapides. Optimisés pour Google.{' '}
          <span className="text-zinc-200 font-semibold">Dès 299 € — livré en une semaine.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-2xl font-bold text-base transition-all shadow-2xl shadow-amber-400/25"
            >
              Obtenir mon devis gratuit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/realisations"
              className="flex items-center gap-2.5 px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 rounded-2xl font-semibold text-base transition-all"
            >
              Voir nos réalisations
            </Link>
          </motion.div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75 + idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm hover:border-zinc-700 transition-all"
            >
              <span className="text-amber-400">{m.icon}</span>
              <span className="text-zinc-100 font-bold text-lg">{m.value}</span>
              <span className="text-zinc-500 text-sm hidden sm:block">{m.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium text-zinc-700 tracking-[0.25em] uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-zinc-800 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-amber-400"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}
