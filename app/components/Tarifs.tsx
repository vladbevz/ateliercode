// app/components/Tarifs.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, TrendingUp, Users, Clock, Shield, Zap, Sparkles, Calculator } from 'lucide-react';

export default function Tarifs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0 });
  
  // Стан для калькулятора
  const [prixMoyen, setPrixMoyen] = useState(100);
  const [clientsParMois, setClientsParMois] = useState(5);
  const [roiCalcule, setRoiCalcule] = useState(6000);

  // Функція для розрахунку ROI
  const calculerROI = () => {
    const revenuAnnuel = prixMoyen * clientsParMois * 12;
    const investissement = 499; // Prix du site vitrine
    const roi = revenuAnnuel - investissement;
    setRoiCalcule(roi);
  };

  const plans = [
    {
      name: "Landing Page",
      price: "299",
      description: "Idéal pour tester une idée ou promouvoir un service spécifique",
      features: [
        "1 page responsive",
        "Formulaire de contact",
        "Optimisation mobile",
        "Mise en ligne incluse",
        "Hébergement 12 mois",
        "Certificat SSL",
        "SEO de base",
        "Support par email"
      ],
      popular: false,
      roi: "Rentable dès 2 clients",
      icon: "🎯"
    },
    {
      name: "Site Vitrine",
      price: "499",
      description: "Pour les artisans et indépendants qui veulent une présence en ligne complète",
      features: [
        "4-5 pages design sobre",
        "Galerie photo simple",
        "SEO optimisé",
        "Mise en ligne incluse",
        "Hébergement 12 mois",
        "Certificat SSL",
        "Support par email",
        "Maintenance 1 mois"
      ],
      popular: true,
      roi: "Rentable dès 3 clients",
      icon: "🏪"
    },
    {
      name: "Site Avancé",
      price: "799",
      description: "Pour les petites entreprises qui veulent plus de fonctionnalités",
      features: [
        "6-8 pages personnalisées",
        "Galerie photo avancée",
        "SEO premium",
        "Mise en ligne incluse",
        "Hébergement 12 mois",
        "Certificat SSL",
        "Maintenance 3 mois",
        "Blog intégré",
        "Analytics avancé"
      ],
      popular: false,
      roi: "Rentable dès 4 clients",
      icon: "🚀"
    }
  ];

  const whyInvest = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Augmentez votre chiffre d'affaires",
      stats: "+40% en moyenne",
      desc: "Un site professionnel attire plus de clients qualifiés"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gagnez en crédibilité",
      stats: "90% des clients jugent",
      desc: "Votre site est votre première impression"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Travaillez 24h/24",
      stats: "Automatisez vos ventes",
      desc: "Votre site travaille même quand vous dormez"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Maîtrisez votre image",
      stats: "Contrôle total",
      desc: "Vous décidez de votre communication"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
      {/* Світлий фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Investissez dans votre <br />
            <span className="text-gray-400">croissance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des prix clairs, sans surprise. Un site web n'est pas une dépense, c'est un investissement.
          </p>
        </motion.div>

        {/* Section "Pourquoi investir" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-32"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pourquoi votre entreprise a besoin d'un site web ?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyInvest.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center"
              >
                <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-4 mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <div className="text-2xl font-bold text-gray-900 mb-2">{item.stats}</div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full shadow-lg flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>LE PLUS CHOISI</span>
                  </div>
                </div>
              )}

              <div className={`bg-white rounded-2xl p-8 border-2 transition-all text-center ${
                plan.popular ? 'border-gray-900 shadow-xl' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
  <div className="flex items-baseline gap-2 justify-center">
    <span className="text-sm text-gray-400 font-normal">à partir de</span>
    <span className="text-5xl font-bold text-gray-900">{plan.price}€</span>
  </div>
  <p className="text-sm text-gray-500 mt-2">TVA non applicable</p>
</div>

              

                <div className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`block text-center py-3 px-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Choisir cette formule
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calculateur de ROI interactif */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="max-w-3xl mx-auto mb-20"
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
                  type="range"
                  min="20"
                  max="500"
                  value={prixMoyen}
                  onChange={(e) => {
                    setPrixMoyen(Number(e.target.value));
                    calculerROI();
                  }}
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
                  type="range"
                  min="1"
                  max="50"
                  value={clientsParMois}
                  onChange={(e) => {
                    setClientsParMois(Number(e.target.value));
                    calculerROI();
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-2">
                  <span className="text-2xl font-bold text-gray-900">{clientsParMois}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-900 text-white rounded-xl text-center">
              <div className="text-sm mb-2">ROI estimé après 12 mois :</div>
              <div className="text-4xl font-bold">+{roiCalcule.toLocaleString()}€</div>
              <div className="text-xs text-gray-400 mt-3">
                * calcul basé sur un forfait Site Vitrine à 499€
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-400 text-center">
              Ajustez les curseurs pour voir votre potentiel de revenus
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            <span>Calculer votre ROI personnalisé</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}