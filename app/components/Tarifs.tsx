// app/components/Tarifs.tsx - СПРОЩЕНО БЕЗ GRID
'use client';

import { Check, ArrowRight, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Tarifs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const plans = [
    {
      name: "Landing Page",
      price: "299",
      description: "Idéal pour tester une idée ou promouvoir un service spécifique",
      features: [
        { name: "1 page responsive", included: true, highlight: false },
        { name: "Formulaire de contact", included: true, highlight: false },
        { name: "Optimisation mobile", included: true, highlight: true },
        { name: "Mise en ligne incluse", included: true, highlight: false },
        { name: "Hébergement 12 mois", included: true, highlight: true },
        { name: "Certificat SSL", included: true, highlight: false },
        { name: "SEO de base", included: true, highlight: false },
        { name: "Support par email", included: false, highlight: false },
        { name: "Maintenance incluse", included: false, highlight: false },
        { name: "Blog intégré", included: false, highlight: false },
      ],
      popular: false,
      accent: "border-gray-800"
    },
    {
      name: "Site Vitrine",
      price: "499",
      description: "Pour les artisans et indépendants qui veulent une présence en ligne complète",
      features: [
        { name: "4-5 pages design sobre", included: true, highlight: true },
        { name: "Galerie photo simple", included: true, highlight: false },
        { name: "SEO optimisé", included: true, highlight: true },
        { name: "Mise en ligne incluse", included: true, highlight: false },
        { name: "Hébergement 12 mois", included: true, highlight: true },
        { name: "Certificat SSL", included: true, highlight: false },
        { name: "Support par email", included: true, highlight: false },
        { name: "Maintenance 1 mois", included: true, highlight: true },
        { name: "Blog intégré", included: false, highlight: false },
        { name: "Analytics avancé", included: false, highlight: false },
      ],
      popular: true,
      accent: "border-gray-600"
    },
    {
      name: "Site Avancé",
      price: "799",
      description: "Pour les petites entreprises qui veulent plus de fonctionnalités",
      features: [
        { name: "6-8 pages personnalisées", included: true, highlight: true },
        { name: "Galerie photo avancée", included: true, highlight: false },
        { name: "SEO premium", included: true, highlight: true },
        { name: "Mise en ligne incluse", included: true, highlight: false },
        { name: "Hébergement 12 mois", included: true, highlight: true },
        { name: "Certificat SSL", included: true, highlight: false },
        { name: "Support prioritaire", included: true, highlight: true },
        { name: "Maintenance 3 mois", included: true, highlight: true },
        { name: "Blog intégré", included: true, highlight: false },
        { name: "Analytics avancé", included: true, highlight: true },
      ],
      popular: false,
      accent: "border-gray-800"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-24 bg-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секції */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gray-900 border border-gray-800 mb-8">
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              TARIFS TRANSPARENTS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            <span className="block text-white">Simplicité & transparence</span>
            <span className="block text-gray-400 font-normal mt-4 text-3xl md:text-4xl">
              des tarifs clairs
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Tout est inclus. Pas de frais cachés, pas de surprise. Juste un site web qui fonctionne.
          </p>
        </div>

        {/* Картки тарифів - ПРОСТИЙ FLEX */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`flex-1 min-w-0 ${plan.popular ? 'lg:-mt-4' : ''}`}
            >
              {/* Популярний бейдж */}
              {plan.popular && (
                <div className="mb-4 text-center">
                  <div className="inline-flex px-5 py-2 rounded-full bg-gray-800 border border-gray-700 font-bold text-sm tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>LE PLUS CHOISI</span>
                  </div>
                </div>
              )}

              {/* Основна картка */}
              <div className={`h-full bg-gray-900 p-8 rounded-2xl border ${plan.accent} ${plan.popular ? 'lg:mt-4' : ''}`}>
                
                {/* Заголовок тарифу */}
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <div className="text-sm font-medium text-gray-400">à partir de</div>
                      <div className="text-5xl md:text-6xl font-bold text-white ml-1">
                        {plan.price}
                        <span className="text-3xl md:text-4xl">€</span>
                      </div>
                    </div>
                    <div className="text-gray-500 text-sm mt-2">
                      TVA non applicable • Article 293 B du CGI
                    </div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed font-light text-lg">
                    {plan.description}
                  </p>
                </div>
                
                {/* Список функцій */}
                <div className="mb-10 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 ${!feature.included ? 'opacity-40' : ''}`}
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center ${
                        feature.included 
                          ? 'bg-gray-800 border border-gray-700' 
                          : 'bg-gray-900 border border-gray-800'
                      }`}>
                        {feature.included ? (
                          <Check className={`w-4 h-4 ${
                            feature.highlight ? 'text-white' : 'text-gray-400'
                          }`} />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                        )}
                      </div>
                      <span className={`text-sm ${
                        feature.included 
                          ? feature.highlight 
                            ? 'text-white font-medium' 
                            : 'text-gray-300'
                          : 'text-gray-600'
                      }`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Блок оплати */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-xs text-gray-500">Paiement</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-7 h-7 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-300">50%</span>
                        </div>
                        <span className="text-xs text-gray-400">commande</span>
                      </div>
                      
                      <div className="text-gray-600">+</div>
                      
                      <div className="flex items-center gap-1.5">
                        <div className="w-7 h-7 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-300">50%</span>
                        </div>
                        <span className="text-xs text-gray-400">livraison</span>
                      </div>
                    </div>
                    <div className="text-gray-500 text-xs mt-3">
                      Paiement sécurisé • Sans engagement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Додаткова інформація */}
        <div className="mt-20 max-w-4xl mx-auto">
          {/* Блок переваг */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1 p-6 rounded-2xl bg-gray-900 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gray-800 border border-gray-700">
                  <Shield className="w-5 h-5 text-gray-300" />
                </div>
                <h4 className="font-bold text-white">Garantie incluse</h4>
              </div>
              <p className="text-gray-400 text-sm">30 jours de support après la livraison</p>
            </div>

            <div className="flex-1 p-6 rounded-2xl bg-gray-900 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gray-800 border border-gray-700">
                  <Zap className="w-5 h-5 text-gray-300" />
                </div>
                <h4 className="font-bold text-white">Délais respectés</h4>
              </div>
              <p className="text-gray-400 text-sm">Livraison en 5-15 jours selon le forfait</p>
            </div>

            <div className="flex-1 p-6 rounded-2xl bg-gray-900 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gray-800 border border-gray-700">
                  <TrendingUp className="w-5 h-5 text-gray-300" />
                </div>
                <h4 className="font-bold text-white">Évolutif</h4>
              </div>
              <p className="text-gray-400 text-sm">Passez à un forfait supérieur à tout moment</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-8 rounded-2xl bg-gray-900 border border-gray-800">
            <h4 className="text-2xl font-bold text-white mb-4">Besoin d'une solution sur mesure ?</h4>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Chaque projet est unique. Discutons de vos besoins spécifiques pour une proposition personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
              >
                Demander un devis personnalisé
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/processus" 
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl border-2 border-gray-700 text-white font-medium hover:border-gray-500 transition-colors"
              >
                Voir notre processus
              </Link>
            </div>
          </div>

          {/* Легальна інформація */}
          <div className="text-center mt-8 text-sm text-gray-500">
            <p className="mb-1">TVA non applicable, article 293 B du CGI • Micro-entreprise</p>
            <p>Paiement 100% sécurisé • Facture détaillée fournie</p>
          </div>
        </div>
      </div>
    </section>
  );
}