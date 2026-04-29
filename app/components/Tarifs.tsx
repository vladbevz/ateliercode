// app/components/Tarifs.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles, Calculator } from 'lucide-react';

export default function Tarifs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0 });

  const [prixMoyen, setPrixMoyen] = useState(150);
  const [clientsParMois, setClientsParMois] = useState(3);

  const roiCalcule = prixMoyen * clientsParMois * 12 - 499;

  const plans = [
    {
      name: 'Landing Page',
      price: '299',
      pitch: 'Une page, un message, un objectif.',
      features: [
        '1 page design sur mesure',
        'Formulaire de contact intégré',
        'Chargement ultra-rapide (< 1 s)',
        'Visible sur Google dès le lancement',
        'Livré en 3-5 jours',
      ],
      popular: false,
      dark: false,
      cta: 'Commencer',
    },
    {
      name: 'Site Vitrine',
      price: '499',
      pitch: 'Votre meilleur commercial — disponible 24h/24.',
      features: [
        '4 à 5 pages personnalisées',
        'Galerie photos professionnelle',
        'SEO local optimisé (Google Maps)',
        'Chargement ultra-rapide (< 1 s)',
        '1 mois de suivi & corrections inclus',
        'Livré en 5-7 jours',
      ],
      popular: true,
      dark: true,
      cta: 'Choisir ce forfait',
    },
    {
      name: 'Site Pro',
      price: '799',
      pitch: 'Pour une entreprise qui veut dominer son marché local.',
      features: [
        '6 à 8 pages sur mesure',
        'Blog / actualités',
        'SEO avancé + Google Analytics',
        'Chargement ultra-rapide (< 1 s)',
        '3 mois de suivi & corrections inclus',
        'Livré en 2-3 semaines',
      ],
      popular: false,
      dark: false,
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

  return (
    <section ref={containerRef} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/60 to-white" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5">
            Des tarifs clairs,<br />
            <span className="text-gray-400">sans surprise.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            Un site web n&apos;est pas une dépense — c&apos;est un investissement qui se rembourse dès les premiers clients.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5 items-center max-w-5xl mx-auto mb-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
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

              <div className={`relative rounded-3xl overflow-hidden flex flex-col h-full ${
                plan.dark
                  ? 'bg-gray-900 shadow-2xl shadow-gray-900/30 pt-14 pb-10 px-10'
                  : 'bg-white border border-gray-200 py-10 px-10'
              }`}>

                {/* Decorative blob on dark card */}
                {plan.dark && (
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute -top-16 -right-16 w-64 h-64 bg-white rounded-full blur-3xl pointer-events-none"
                  />
                )}

                {/* Plan name + pitch */}
                <div className="mb-3">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.dark ? 'text-gray-400' : 'text-gray-400'}`}>
                    {plan.name}
                  </p>
                  <p className={`text-sm leading-relaxed ${plan.dark ? 'text-gray-300' : 'text-gray-500'}`}>
                    {plan.pitch}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-7">
                  <p className={`text-xs mb-1 ${plan.dark ? 'text-gray-500' : 'text-gray-400'}`}>
                    à partir de
                  </p>
                  <span className={`text-5xl font-black leading-none ${plan.dark ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}€
                  </span>
                  <p className={`text-xs mt-1.5 ${plan.dark ? 'text-gray-500' : 'text-gray-400'}`}>
                    TVA non applicable
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${
                        plan.dark ? 'bg-white/15' : 'bg-gray-100'
                      }`}>
                        <Check className={`w-2.5 h-2.5 ${plan.dark ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <span className={`text-sm ${plan.dark ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`relative z-10 flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-sm transition-all group/btn ${
                    plan.dark
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inclus dans tous les forfaits */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="max-w-5xl mx-auto mb-24"
        >
          <div className="bg-gray-50 border border-gray-200 rounded-2xl px-7 py-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest shrink-0">
              Inclus dans tous les forfaits :
            </span>
            {included.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gray-500" />
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Calculator className="w-6 h-6 text-gray-700" />
              <h3 className="text-xl font-bold text-gray-900">Calculez votre retour sur investissement</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                  Prix moyen de votre service/produit (€)
                </label>
                <input
                  type="range" min="20" max="500"
                  value={prixMoyen}
                  onChange={(e) => setPrixMoyen(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-2">
                  <span className="text-2xl font-bold text-gray-900">{prixMoyen}€</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                  Clients supplémentaires par mois
                </label>
                <input
                  type="range" min="1" max="50"
                  value={clientsParMois}
                  onChange={(e) => setClientsParMois(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-2">
                  <span className="text-2xl font-bold text-gray-900">{clientsParMois}</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-900 text-white rounded-xl text-center">
              <div className="text-sm mb-2">ROI estimé après 12 mois :</div>
              <div className="text-4xl font-bold">+{roiCalcule.toLocaleString('fr-FR')}€</div>
              <div className="text-xs text-gray-400 mt-3">* calcul basé sur un forfait Site Vitrine à 499€</div>
            </div>

            <div className="mt-4 text-xs text-gray-400 text-center">
              Ajustez les curseurs pour voir votre potentiel de revenus
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
