// app/components/Tarifs.tsx
'use client';

import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Tarifs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const plans = [
    {
      name: "LANDING PAGE",
      price: "À partir de 299€",
      description: "Idéal pour tester une idée ou promouvoir un service spécifique",
      features: [
        "1 page responsive",
        "Formulaire de contact",
        "Optimisation mobile",
        "Mise en ligne",
        "Hébergement 1 an",
        "SSL inclus"
      ],
      popular: false
    },
    {
      name: "SITE VITRINE",
      price: "À partir de 499€",
      description: "Pour les artisans et indépendants qui veulent une présence en ligne complète",
      features: [
        "3-4 pages design sobre",
        "Galerie photo simple",
        "SEO de base",
        "Mise en ligne",
        "Hébergement 1 an",
        "Support par email"
      ],
      popular: true
    },
    {
      name: "SITE AVANCÉ",
      price: "À partir de 799€",
      description: "Pour les petites entreprises qui veulent plus de fonctionnalités",
      features: [
        "5-6 pages personnalisées",
        "Blog intégré",
        "SEO optimisé",
        "Mise en ligne",
        "Hébergement 1 an",
        "Maintenance 1 mois"
      ],
      popular: false
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      id="tarifs" 
      ref={containerRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gray-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gray-800/5 rounded-full blur-3xl"></div>
      </div>

      {/* Геометричний патерн */}
      <div className="absolute inset-0 z-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #fff 1px, transparent 1px),
                           linear-gradient(-45deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container-narrow relative z-10">
        {/* Заголовок секції */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Бейдж */}
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight"
          >
            <span className="block text-white">Des prix clairs,</span>
            <span className="block text-gray-400 font-normal mt-4 text-3xl md:text-4xl">
              sans surprise
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Tout est inclus. Pas de frais cachés, pas de formation coûteuse. Juste un site qui fonctionne.
          </motion.p>
        </motion.div>

        {/* Картки тарифів */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative group ${plan.popular ? 'lg:mt-0' : ''}`}
            >
              {/* Акцентний фон при ховері */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

              {/* Популярний бейдж */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                >
                  <div className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm tracking-wider shadow-lg">
                    LE PLUS CHOISI
                  </div>
                </motion.div>
              )}

              {/* Основна картка */}
              <div className={`relative h-full bg-gradient-to-br from-gray-900/40 to-black/40 p-8 rounded-2xl border ${
                plan.popular 
                  ? 'border-gray-600' 
                  : 'border-gray-800'
              } backdrop-blur-sm transition-all duration-300 group-hover:border-gray-600 overflow-hidden`}>
                
                {/* Верхня акцентна лінія */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Заголовок тарифу */}
                <div className="text-center mb-10 pt-2">
                  <h3 className="text-2xl font-bold mb-6 text-white tracking-wide">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="text-4xl md:text-5xl font-bold mb-3 text-white">
                      {plan.price.split(' ')[0]}
                    </div>
                    <div className="text-lg text-gray-400 font-light">
                      {plan.price.split(' ').slice(1).join(' ')}
                    </div>
                    <div className="text-gray-500 text-sm mt-2">HT • TVA non applicable</div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed font-light">
                    {plan.description}
                  </p>
                </div>
                
                {/* Список функцій */}
                <div className="mb-10">
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="p-1 rounded-lg bg-gray-800/50 border border-gray-700 group-hover/item:border-gray-500 transition-colors mt-0.5">
                          <Check className="w-4 h-4 text-gray-400 group-hover/item:text-gray-300 transition-colors" />
                        </div>
                        <span className="text-gray-300 group-hover/item:text-gray-100 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Інформація про оплату */}
                <div className="mt-12 pt-8 border-t border-gray-800/50">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-gray-800 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-300">50/50</span>
                    </div>
                    <span className="text-sm text-gray-400">
                      50% à la commande • 50% à la livraison
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Нижня інформація */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 rounded-2xl bg-gradient-to-br from-gray-900/40 to-black/40 border border-gray-800 backdrop-blur-sm max-w-4xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                  <Check className="w-4 h-4 text-gray-300" />
                </div>
                <h4 className="text-lg font-bold text-white">Inclus dans tous les forfaits</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Hébergement rapide', 'SSL sécurisé', 'Design responsive', 'Support email'].map((item, idx) => (
                  <div key={idx} className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700">
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:pl-8 lg:border-l lg:border-gray-800">
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-lg font-medium">
                  Devis personnalisé ?
                </span>
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-gray-500 transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
              <p className="text-gray-500 text-sm mt-2">Réponse sous 24 heures</p>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-gray-500">
            <p className="mb-1">TVA non applicable, article 293 B du CGI</p>
            <p>Paiement sécurisé • Aucun engagement</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}