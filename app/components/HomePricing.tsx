'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Landing Page',
    price: '299',
    pitch: 'Une page, un message, un objectif.',
    features: ['1 page sur mesure', 'Formulaire de contact', 'SEO de base', 'Livré en 3–5 jours'],
    dark: false,
    popular: false,
  },
  {
    name: 'Site Vitrine',
    price: '499',
    pitch: 'Votre meilleur commercial — 24h/24.',
    features: ['4 à 5 pages', 'SEO local optimisé', '1 mois de suivi', 'Livré en 5–7 jours'],
    dark: true,
    popular: true,
  },
  {
    name: 'Site Pro',
    price: '799',
    pitch: 'Pour dominer votre marché local.',
    features: ['6 à 8 pages', 'Blog + Analytics', 'SEO avancé', '3 mois de suivi'],
    dark: false,
    popular: false,
  },
];

export default function HomePricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-white via-gray-50/60 to-white pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Tarifs</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Des prix clairs,{' '}
            <span className="text-gray-400">sans surprise.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            Un site web n&apos;est pas une dépense — c&apos;est un investissement qui se rembourse dès les premiers clients.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 items-center max-w-5xl mx-auto mb-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + idx * 0.1, duration: 0.5 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-white border border-gray-200 text-gray-900 text-xs font-bold rounded-full shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    LE PLUS CHOISI
                  </div>
                </div>
              )}

              <div className={`rounded-3xl overflow-hidden flex flex-col h-full ${
                plan.dark
                  ? 'bg-gray-900 shadow-2xl shadow-gray-900/30 pt-14 pb-10 px-10'
                  : 'bg-white border border-gray-200 py-10 px-10'
              }`}>
                {plan.dark && (
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute -top-16 -right-16 w-64 h-64 bg-white rounded-full blur-3xl pointer-events-none"
                  />
                )}

                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.dark ? 'text-gray-400' : 'text-gray-400'}`}>
                  {plan.name}
                </p>
                <p className={`text-sm mb-5 ${plan.dark ? 'text-gray-300' : 'text-gray-500'}`}>{plan.pitch}</p>
                <p className={`text-xs mb-1 ${plan.dark ? 'text-gray-500' : 'text-gray-400'}`}>à partir de</p>
                <span className={`text-5xl font-black leading-none mb-1 ${plan.dark ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}€
                </span>
                <p className={`text-xs mb-7 ${plan.dark ? 'text-gray-500' : 'text-gray-400'}`}>TVA non applicable</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${
                        plan.dark ? 'bg-white/15' : 'bg-gray-100'
                      }`}>
                        <Check className={`w-2.5 h-2.5 ${plan.dark ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <span className={`text-sm ${plan.dark ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`relative z-10 flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-sm transition-all group/btn ${
                    plan.dark
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/tarifs"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            Voir les détails complets, inclus et calculateur ROI
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
