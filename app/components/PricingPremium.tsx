'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Landing Page',
    price: '299',
    pitch: 'Une page, un message, un objectif.',
    features: ['1 page sur mesure', 'Formulaire de contact', 'SEO de base', 'Livré en 3–5 jours'],
    accent: false,
  },
  {
    name: 'Site Vitrine',
    price: '499',
    pitch: 'Votre meilleur commercial — 24h/24.',
    features: ['4 à 5 pages', 'SEO local optimisé', '1 mois de suivi', 'Livré en 5–7 jours'],
    accent: true,
    badge: 'Le plus choisi',
  },
  {
    name: 'Site Pro',
    price: '799',
    pitch: 'Pour dominer votre marché local.',
    features: ['6 à 8 pages', 'Blog + Analytics', 'SEO avancé', '3 mois de suivi'],
    accent: false,
  },
];

const included = ['Hébergement 12 mois', 'SSL (HTTPS)', 'Design mobile-first', 'Code source fourni'];

export default function PricingPremium() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section ref={ref} className="relative bg-zinc-950 py-24 md:py-32 overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-amber-500/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-violet-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-5">Tarifs</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-100 leading-[0.9] mb-5">
            Prix clairs,<br />
            <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
              zéro surprise.
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-lg mx-auto">
            Un investissement qui se rembourse dès les premiers clients. Pas un abonnement.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + idx * 0.1, duration: 0.6 }}
              className="relative"
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1 bg-amber-400 text-zinc-950 text-xs font-black rounded-full">
                    {plan.badge.toUpperCase()}
                  </div>
                </div>
              )}

              <div className={`h-full rounded-3xl overflow-hidden flex flex-col ${
                plan.accent
                  ? 'bg-zinc-900 border border-amber-400/30 pt-10 pb-8 px-8'
                  : 'bg-zinc-900/60 border border-zinc-800 py-8 px-8 hover:border-zinc-700 transition-colors'
              }`}>
                {plan.accent && (
                  <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/6 rounded-full blur-[60px] pointer-events-none" />
                )}

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1">{plan.name}</p>
                <p className={`text-sm mb-6 ${plan.accent ? 'text-zinc-300' : 'text-zinc-500'}`}>{plan.pitch}</p>

                <p className="text-xs text-zinc-600 mb-1">à partir de</p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className={`text-5xl font-black tracking-tighter leading-none ${
                    plan.accent
                      ? 'bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent'
                      : 'text-zinc-100'
                  }`}>
                    {plan.price}€
                  </span>
                </div>
                <p className="text-xs text-zinc-600 mb-8">TVA non applicable</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        plan.accent ? 'bg-amber-400/15' : 'bg-zinc-800'
                      }`}>
                        <Check className={`w-2.5 h-2.5 ${plan.accent ? 'text-amber-400' : 'text-zinc-500'}`} />
                      </div>
                      <span className={`text-sm ${plan.accent ? 'text-zinc-300' : 'text-zinc-400'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-sm transition-all group/btn ${
                    plan.accent
                      ? 'bg-amber-400 hover:bg-amber-300 text-zinc-950'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                  }`}
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Included strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 border-t border-zinc-800">
            <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">Inclus partout :</span>
            {included.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400/60" />
                <span className="text-sm text-zinc-500">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-6"
        >
          <Link
            href="/tarifs"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-amber-400 transition-colors"
          >
            Calculateur ROI + détails complets
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
