// app/components/Tarifs.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles, Calculator } from 'lucide-react';

const plans = [
  {
    name: 'Landing Page',
    price: '299',
    pitch: 'Une page, un message, un objectif.',
    features: [
      '1 page design sur mesure',
      'Formulaire de contact intégré',
      'Chargement ultra-rapide (< 1s)',
      'Visible sur Google dès le lancement',
      'Livré en 3–5 jours',
    ],
    accent: false,
    cta: 'Commencer',
  },
  {
    name: 'Site Vitrine',
    price: '499',
    pitch: 'Votre meilleur commercial — 24h/24.',
    features: [
      '4 à 5 pages personnalisées',
      'Galerie photos professionnelle',
      'SEO local optimisé (Google Maps)',
      'Chargement ultra-rapide (< 1s)',
      '1 mois de suivi & corrections inclus',
      'Livré en 5–7 jours',
    ],
    accent: true,
    cta: 'Choisir ce forfait',
    badge: 'LE PLUS CHOISI',
  },
  {
    name: 'Site Pro',
    price: '799',
    pitch: 'Pour une entreprise qui veut dominer son marché local.',
    features: [
      '6 à 8 pages sur mesure',
      'Blog / actualités',
      'SEO avancé + Google Analytics',
      'Chargement ultra-rapide (< 1s)',
      '3 mois de suivi & corrections inclus',
      'Livré en 2–3 semaines',
    ],
    accent: false,
    cta: 'Commencer',
  },
];

const included = [
  'Hébergement 12 mois',
  'Certificat SSL (HTTPS)',
  'Design mobile-first',
  'Mise en ligne incluse',
  'Code source fourni',
  'Support par email',
];

export default function Tarifs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0 });

  const [prixMoyen, setPrixMoyen] = useState(150);
  const [clientsParMois, setClientsParMois] = useState(3);
  const roiCalcule = prixMoyen * clientsParMois * 12 - 499;

  return (
    <section ref={containerRef} className="relative py-24 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-amber-500/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-violet-600/6 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Tarifs</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-100 leading-[0.9] mb-5">
            Des tarifs clairs,<br />
            <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">sans surprise.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Un site web n&apos;est pas une dépense — c&apos;est un investissement qui se rembourse dès les premiers clients.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5 items-center max-w-5xl mx-auto mb-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + idx * 0.1, duration: 0.6 }}
              className="relative"
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-amber-400 text-zinc-950 text-xs font-black rounded-full shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className={`relative rounded-3xl overflow-hidden flex flex-col h-full ${
                plan.accent
                  ? 'bg-zinc-900 border border-amber-400/25 pt-14 pb-10 px-10 shadow-2xl shadow-amber-400/5'
                  : 'bg-zinc-900/60 border border-zinc-800 py-10 px-10 hover:border-zinc-700 transition-colors'
              }`}>
                {plan.accent && (
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-400/6 rounded-full blur-[60px] pointer-events-none" />
                )}

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1">{plan.name}</p>
                <p className={`text-sm mb-6 leading-relaxed ${plan.accent ? 'text-zinc-300' : 'text-zinc-500'}`}>{plan.pitch}</p>

                <p className={`text-xs mb-1 ${plan.accent ? 'text-zinc-500' : 'text-zinc-600'}`}>à partir de</p>
                <span className={`text-5xl font-black tracking-tighter leading-none mb-1 ${
                  plan.accent
                    ? 'bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent'
                    : 'text-zinc-100'
                }`}>
                  {plan.price}€
                </span>
                <p className="text-xs mt-1.5 mb-7 text-zinc-600">TVA non applicable</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${
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
                  className={`relative z-10 flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm transition-all group/btn ${
                    plan.accent
                      ? 'bg-amber-400 hover:bg-amber-300 text-zinc-950 shadow-lg shadow-amber-400/20'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                  }`}
                >
                  {plan.cta}
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
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-5 px-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest shrink-0">Inclus partout :</span>
            {included.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400/60" />
                <span className="text-sm text-zinc-400">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-7 justify-center">
              <Calculator className="w-6 h-6 text-amber-400" />
              <h3 className="text-xl font-bold text-zinc-100">Calculez votre retour sur investissement</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-7">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-3 text-center">
                  Prix moyen de votre service (€)
                </label>
                <input
                  type="range" min="20" max="500"
                  value={prixMoyen}
                  onChange={(e) => setPrixMoyen(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="text-center mt-3">
                  <span className="text-3xl font-black text-amber-400 tracking-tight">{prixMoyen}€</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-3 text-center">
                  Clients supplémentaires par mois
                </label>
                <input
                  type="range" min="1" max="50"
                  value={clientsParMois}
                  onChange={(e) => setClientsParMois(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="text-center mt-3">
                  <span className="text-3xl font-black text-amber-400 tracking-tight">{clientsParMois}</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl text-center">
              <div className="text-sm text-zinc-500 mb-2">ROI estimé après 12 mois :</div>
              <div className="text-5xl font-black tracking-tighter bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
                +{roiCalcule.toLocaleString('fr-FR')}€
              </div>
              <div className="text-xs text-zinc-600 mt-3">* calcul basé sur un forfait Site Vitrine à 499€</div>
            </div>

            <p className="mt-5 text-xs text-zinc-600 text-center">
              Ajustez les curseurs pour voir votre potentiel de revenus
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
