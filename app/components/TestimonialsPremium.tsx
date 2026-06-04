'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'A. Syrmais',
    role: 'Photographe · Nîmes',
    quote:
      "Avant, mon site Wix n'apparaissait nulle part sur Google. Depuis le nouveau site, j'ai décroché 40% de projets supplémentaires en 3 mois. Rentabilisé en quelques semaines.",
    metric: '+40%',
    metricLabel: 'nouveaux projets',
    initials: 'AS',
  },
  {
    name: 'Restaurant Le 438',
    role: 'Restaurant · Nîmes',
    quote:
      "Livré en exactement une semaine comme promis, sans surprise sur la facture. Les réservations ont grimpé de 36% dès le premier mois. Un interlocuteur direct, efficace.",
    metric: '+36%',
    metricLabel: 'de réservations',
    initials: 'L4',
  },
  {
    name: 'Aquatracker',
    role: 'Application mobile',
    quote:
      "Un développeur qui comprend vraiment les enjeux techniques et business. Site rapide, code propre. 500 nouveaux utilisateurs depuis le lancement.",
    metric: '×500',
    metricLabel: 'utilisateurs',
    initials: 'AQ',
  },
];

export default function TestimonialsPremium() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Large decorative quote */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 text-[240px] font-black text-zinc-100 leading-none pointer-events-none select-none"
        aria-hidden
      >
        "
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-5">
            Témoignages
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 leading-[0.9]">
            Ils l&apos;ont fait.<br />
            <span className="text-zinc-400">Voici les résultats.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + idx * 0.12, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative bg-zinc-50 border border-zinc-200 rounded-3xl p-7 hover:shadow-xl hover:border-zinc-300 transition-all group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-600 text-sm leading-relaxed mb-7">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Metric highlight */}
              <div className="flex items-baseline gap-2 mb-6 py-3 px-4 bg-zinc-900 rounded-2xl w-fit">
                <span className="text-3xl font-black text-amber-400 tracking-tight">{t.metric}</span>
                <span className="text-xs text-zinc-400">{t.metricLabel}</span>
              </div>

              {/* Identity */}
              <div className="flex items-center gap-3 pt-5 border-t border-zinc-200">
                <div className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-amber-400">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
