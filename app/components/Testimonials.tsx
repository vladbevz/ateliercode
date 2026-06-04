'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: 'A. Syrmais',
    role: 'Photographe · Nîmes',
    quote:
      "Avant, mon site Wix n'apparaissait nulle part sur Google. Depuis le nouveau site, j'ai décroché 40% de projets supplémentaires en 3 mois. L'investissement était rentabilisé dès les premières semaines.",
    result: '+40% de projets',
    initials: 'AS',
  },
  {
    name: 'Restaurant Le 438',
    role: 'Restaurant · Nîmes',
    quote:
      "Livré en exactement une semaine comme promis, sans surprise sur la facture. Les réservations en ligne ont grimpé de 36% dès le premier mois. Un interlocuteur unique, direct, efficace.",
    result: '+36% de réservations',
    initials: 'L4',
  },
  {
    name: 'Aquatracker',
    role: 'Application mobile',
    quote:
      "Un développeur qui comprend vraiment les enjeux techniques et business. Site rapide, code propre. 500 nouveaux utilisateurs depuis le lancement — bien au-delà de nos attentes initiales.",
    result: '500 utilisateurs',
    initials: 'AQ',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-white via-gray-50/40 to-white pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
            Ils nous font confiance
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Des résultats, pas des{' '}
            <span className="text-gray-400">promesses.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + idx * 0.12, duration: 0.5 }}
              className="flex flex-col bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result badge */}
              <div className="flex items-center gap-2 mb-5 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl w-fit">
                <TrendingUp className="w-3.5 h-3.5 text-gray-600" />
                <span className="text-xs font-bold text-gray-800">{t.result}</span>
              </div>

              {/* Identity */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
