// app/components/Tarifs.tsx - З grid але без Framer Motion
'use client';

import { Check, ArrowRight, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Tarifs() {
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
      ],
      popular: false,
      accent: "border-gray-800"
    }
  ];

  return (
    <section className="relative py-20 bg-black">
      {/* Додаємо фон з градієнтом */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gray-900 border border-gray-800 mb-8">
            <span className="text-sm font-medium text-gray-300">
              TARIFS TRANSPARENTS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="block text-white">Simplicité & transparence</span>
            <span className="block text-gray-400 text-3xl md:text-4xl mt-4">
              des tarifs clairs
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tout est inclus. Pas de frais cachés, pas de surprise.
          </p>
        </div>

        {/* Картки з GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border ${plan.accent} bg-gray-900/90 backdrop-blur-sm`}
            >
              {/* Популярний бейдж */}
              {plan.popular && (
                <div className="mb-4 text-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 border border-gray-700">
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span className="text-sm font-bold">LE PLUS CHOISI</span>
                  </div>
                </div>
              )}

              <h3 className="text-xl font-bold mb-4 text-white text-center">
                {plan.name}
              </h3>
              
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <div className="text-sm font-medium text-gray-400">à partir de</div>
                  <div className="text-4xl font-bold text-white ml-1">
                    {plan.price}
                    <span className="text-2xl">€</span>
                  </div>
                </div>
                <div className="text-gray-500 text-sm mt-2">
                  TVA non applicable • Article 293 B du CGI
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 text-center">
                {plan.description}
              </p>
              
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 ${!feature.included ? 'opacity-40' : ''}`}
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center ${
                      feature.included 
                        ? 'bg-gray-800 border border-gray-700' 
                        : 'bg-gray-900 border border-gray-800'
                    }`}>
                      {feature.included ? (
                        <Check className={`w-3 h-3 ${
                          feature.highlight ? 'text-white' : 'text-gray-400'
                        }`} />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
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

              <div className="border-t border-gray-800 pt-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-300">50%</span>
                      </div>
                      <span className="text-xs text-gray-400">commande</span>
                    </div>
                    
                    <div className="text-gray-600">+</div>
                    
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
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
          ))}
        </div>

        {/* Решта коду без змін */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Shield className="w-5 h-5 text-gray-300" />,
                title: "Garantie incluse",
                text: "30 jours de support après la livraison"
              },
              {
                icon: <Zap className="w-5 h-5 text-gray-300" />,
                title: "Délais respectés",
                text: "Livraison en 5-15 jours selon le forfait"
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-gray-300" />,
                title: "Évolutif",
                text: "Passez à un forfait supérieur à tout moment"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-gray-800 bg-gray-900/90 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-800 border border-gray-700">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center p-8 rounded-xl border border-gray-800 bg-gray-900/90 backdrop-blur-sm">
            <h4 className="text-xl font-bold text-white mb-4">
              Besoin d'une solution sur mesure ?
            </h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Chaque projet est unique. Discutons de vos besoins spécifiques pour une proposition personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-black font-medium"
              >
                Demander un devis personnalisé
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/processus" 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-gray-700 text-white font-medium"
              >
                Voir notre processus
              </Link>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-gray-500">
            <p className="mb-1">TVA non applicable, article 293 B du CGI • Micro-entreprise</p>
            <p>Paiement 100% sécurisé • Facture détaillée fournie</p>
          </div>
        </div>
      </div>
    </section>
  );
}