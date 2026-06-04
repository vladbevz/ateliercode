'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Shield } from 'lucide-react';

const guarantees = [
  { icon: <Clock className="w-4 h-4" />, text: 'Réponse sous 24h' },
  { icon: <Shield className="w-4 h-4" />, text: 'Devis gratuit & sans engagement' },
  { icon: <MapPin className="w-4 h-4" />, text: 'Basé à Nîmes, Gard' },
];

export default function CtaPremium() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative bg-zinc-950 py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 mb-7">
            Parlons de votre projet
          </p>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-100 leading-[0.88] mb-8 max-w-3xl mx-auto">
            Votre site,{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
              dès la semaine prochaine.
            </span>
          </h2>

          <p className="text-lg text-zinc-400 max-w-md mx-auto mb-12 leading-relaxed">
            Site vitrine sur mesure dès 499 €. Rapid, performant, optimisé Google.
            Pas de template — votre identité, votre activité.
          </p>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mb-12"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-amber-400/30"
            >
              Obtenir mon devis gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Guarantees */}
          <div className="flex flex-wrap justify-center gap-6">
            {guarantees.map((g, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.08 }}
                className="flex items-center gap-2 text-sm text-zinc-500"
              >
                <span className="text-amber-400/70">{g.icon}</span>
                {g.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
