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

  // ЗМІНЕНО: Використовуємо такий самий підхід як у Realisations.tsx
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 overflow-hidden"
    >
      {/* ФОН */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gray-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gray-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ЗАГОЛОВОК */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-gray-900/50 border border-gray-800 backdrop-blur-sm mb-8"
          >
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              TARIFS TRANSPARENTS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8 tracking-tight"
          >
            <span className="block text-white">Simplicité & transparence</span>
            <span className="block text-gray-400 font-normal mt-4 text-3xl md:text-4xl">
              des tarifs clairs
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Tout est inclus. Pas de frais cachés, pas de surprise. Juste un site web qui fonctionne.
          </motion.p>
        </motion.div>

        {/* КАРТКИ - ЗМІНЕНО: Використовуємо containerVariants + itemVariants як у Realisations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* ПОПУЛЯРНИЙ БЕЙДЖ */}
              {plan.popular && (
                <div className="mb-4 text-center">
                  <div className="inline-flex items-center px-5 py-2 rounded-full bg-gray-800 border border-gray-700 font-bold text-sm tracking-wider gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>LE PLUS CHOISI</span>
                  </div>
                </div>
              )}

              {/* ОСНОВНА КАРТКА */}
              <div className={`relative h-full bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border ${plan.accent} backdrop-blur-sm transition-all duration-300 hover:border-gray-600 overflow-hidden`}>
                
                {/* АКЦЕНТ ПРИ ХОВЕРІ */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                {/* ЗАГОЛОВОК ТАРИФУ */}
                <div className="text-center mb-10 relative z-10">
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
                  
                  <p className="text-gray-400 leading-relaxed font-light text-lg group-hover:text-gray-300 transition-colors">
                    {plan.description}
                  </p>
                </div>
                
                {/* СПИСОК ФУНКЦІЙ */}
                <div className="mb-10 space-y-4 relative z-10">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 ${!feature.included ? 'opacity-40' : ''}`}
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center ${
                        feature.included 
                          ? 'bg-gray-800 border border-gray-700 group-hover:border-gray-500' 
                          : 'bg-gray-900 border border-gray-800'
                      } transition-colors`}>
                        {feature.included ? (
                          <Check className={`w-4 h-4 ${
                            feature.highlight ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                          } transition-colors`} />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                        )}
                      </div>
                      <span className={`text-sm ${
                        feature.included 
                          ? feature.highlight 
                            ? 'text-white font-medium' 
                            : 'text-gray-300 group-hover:text-gray-200'
                          : 'text-gray-600'
                      } transition-colors`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* БЛОК ОПЛАТИ */}
                <div className="mt-12 pt-8 border-t border-gray-800/50 relative z-10">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-xs text-gray-500">Paiement</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-7 h-7 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:border-gray-500 transition-colors">
                          <span className="text-xs font-medium text-gray-300">50%</span>
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">commande</span>
                      </div>
                      
                      <div className="text-gray-600">+</div>
                      
                      <div className="flex items-center gap-1.5">
                        <div className="w-7 h-7 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:border-gray-500 transition-colors">
                          <span className="text-xs font-medium text-gray-300">50%</span>
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">livraison</span>
                      </div>
                    </div>
                    <div className="text-gray-500 text-xs mt-3 group-hover:text-gray-400 transition-colors">
                      Paiement sécurisé • Sans engagement
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ІНФОБЛОКИ - спрощуємо без анімацій */}
        <div className="mt-20 max-w-4xl mx-auto">
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
                className="relative group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-600 overflow-hidden">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-gray-800 border border-gray-700 group-hover:border-gray-500 transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA БЛОК */}
          <div className="relative group">
            <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-600 overflow-hidden">
              <h4 className="text-2xl font-bold text-white mb-4">
                Besoin d'une solution sur mesure ?
              </h4>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto group-hover:text-gray-300 transition-colors">
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
          </div>

          {/* ФУТЕР */}
          <div className="text-center mt-8 text-sm text-gray-500">
            <p className="mb-1">TVA non applicable, article 293 B du CGI • Micro-entreprise</p>
            <p>Paiement 100% sécurisé • Facture détaillée fournie</p>
          </div>
        </div>
      </div>
    </section>
  );
}