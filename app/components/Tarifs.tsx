'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Calculator } from 'lucide-react';
import AnimateIn from './AnimateIn';

export default function Tarifs() {
  const [prixMoyen, setPrixMoyen] = useState(150);
  const [clientsParMois, setClientsParMois] = useState(3);

  const roiCalcule = prixMoyen * clientsParMois * 12 - 499;

  const plans = [
    {
      name: 'Site Vitrine',
      price: '499',
      priceLabel: 'dès',
      pitch: 'Votre meilleur commercial — disponible 24h/24.',
      features: [
        '4 à 6 pages personnalisées',
        'SEO local optimisé (Google Maps)',
        'Chargement ultra-rapide (< 1 s)',
        'Galerie photos professionnelle',
        '1 mois de suivi & corrections inclus',
        'Livré en 7–10 jours',
      ],
      dark: false,
      cta: 'Demander un devis',
    },
    {
      name: 'E-commerce',
      price: '990',
      priceLabel: 'dès',
      pitch: 'Vendez en ligne dès demain, sans compromis.',
      features: [
        'Boutique complète sur mesure',
        'Paiement sécurisé Stripe',
        'Catalogue produits & gestion stock',
        'Chargement ultra-rapide (< 1 s)',
        'SEO e-commerce optimisé',
        'Livré en 2–4 semaines',
      ],
      dark: true,
      cta: 'Demander un devis',
    },
    {
      name: 'Application web',
      price: 'Sur devis',
      priceLabel: '',
      pitch: 'Un outil métier taillé pour votre activité.',
      features: [
        'React & Next.js sur mesure',
        'Back-end, API, authentification',
        'Dashboard & interface admin',
        'Intégrations tierces (CRM, paiement…)',
        'Tests & déploiement continu',
        'Tarif selon complexité du projet',
      ],
      dark: false,
      cta: 'Discuter du projet',
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
    <section className="min-h-screen bg-white pt-16 pb-24">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 animate-fade-up">
            Des tarifs clairs, sans surprise.
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Un site web n&apos;est pas une dépense — c&apos;est un investissement qui se rembourse dès les premiers clients.
          </p>
        </div>

        {/* Cards */}
        <AnimateIn className="grid lg:grid-cols-3 gap-5 items-center max-w-5xl mx-auto mb-10" delay={150}>
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <div className={`relative rounded-lg overflow-hidden flex flex-col h-full transition-all duration-200 hover:-translate-y-1 ${
                plan.dark
                  ? 'bg-gray-900 py-10 px-10'
                  : 'bg-white border border-gray-200 hover:border-gray-300 py-10 px-10'
              }`}>
                <div className="mb-3">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">
                    {plan.name}
                  </p>
                  <p className={`text-sm leading-relaxed ${plan.dark ? 'text-gray-300' : 'text-gray-500'}`}>
                    {plan.pitch}
                  </p>
                </div>

                <div className="mb-7">
                  {plan.priceLabel && (
                    <p className={`text-xs mb-1 ${plan.dark ? 'text-gray-500' : 'text-gray-400'}`}>
                      {plan.priceLabel}
                    </p>
                  )}
                  <span className={`font-black leading-none ${
                    plan.price === 'Sur devis'
                      ? 'text-3xl'
                      : 'text-5xl'
                  } ${plan.dark ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}{plan.price !== 'Sur devis' ? '€' : ''}
                  </span>
                  <p className={`text-xs mt-1.5 ${plan.dark ? 'text-gray-500' : 'text-gray-400'}`}>
                    {plan.price === 'Sur devis' ? 'Estimation gratuite sous 24h' : 'TVA non applicable'}
                  </p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
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
                  className={`flex items-center justify-center py-3.5 px-5 rounded-md font-semibold text-sm active:scale-[0.98] transition-all duration-150 ${
                    plan.dark
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </AnimateIn>

        {/* Inclus dans tous les forfaits */}
        <AnimateIn className="max-w-5xl mx-auto mb-24" delay={100}>
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-7 py-5 flex flex-wrap items-center gap-x-6 gap-y-3">
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
        </AnimateIn>

        {/* ROI Calculator */}
        <AnimateIn className="max-w-3xl mx-auto" delay={100}>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
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

            <div className="p-6 bg-gray-900 text-white rounded-md text-center">
              <div className="text-sm mb-2">ROI estimé après 12 mois :</div>
              <div className="text-4xl font-bold">+{roiCalcule.toLocaleString('fr-FR')}€</div>
              <div className="text-xs text-gray-400 mt-3">* calcul basé sur un forfait Site Vitrine à 499€</div>
            </div>

            <div className="mt-4 text-xs text-gray-400 text-center">
              Ajustez les curseurs pour voir votre potentiel de revenus
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
