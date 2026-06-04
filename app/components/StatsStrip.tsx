'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '< 1s', label: 'Temps de chargement' },
  { value: '95+', label: 'Score Lighthouse' },
  { value: '10+', label: 'Sites livrés' },
  { value: '100%', label: 'Clients satisfaits' },
  { value: '24h', label: 'Délai de réponse' },
];

export default function StatsStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-zinc-950 border-y border-zinc-800/60">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-zinc-800/60">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="flex flex-col items-center justify-center py-8 px-4 group hover:bg-zinc-900/50 transition-colors"
            >
              <span className="text-3xl md:text-4xl font-black text-amber-400 tracking-tight mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-medium text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
