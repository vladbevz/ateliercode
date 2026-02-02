// app/components/Tarifs.tsx
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
      accent: "border-gray-800",
      hoverColor: "hover:border-gray-700"
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
      accent: "border-gray-600",
      hoverColor: "hover:border-gray-500"
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
      accent: "border-gray-800",
      hoverColor: "hover:border-gray-700"
    }
  ];

  // ТАКІ Ж ВАРІАНТИ ЯК В ІНШИХ КОМПОНЕНТАХ
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut" as const
      }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 overflow-hidden" // Додаємо overflow-hidden як у інших
    >
      {/* ФОН ЯК В ІНШИХ КОМПОНЕНТАХ */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gray-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gray-800/5 rounded-full blur-3xl"></div>
      </div>

      {/* ТОНКА СІТКА ЯК В PourQui.tsx */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #fff 1px, transparent 2px),
                           linear-gradient(180deg, #fff 1px, transparent 2px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ЗАГОЛОВОК З АНІМАЦІЄЮ ЯК В ІНШИХ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* БЕЙДЖ ЯК В Processus.tsx */}
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

        {/* КАРТКИ ТАРИФІВ - СТИЛЬ ЯК PourQui.tsx */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              className={`relative group flex-1 min-w-0 ${plan.popular ? 'lg:-mt-4' : ''}`}
            >
              {/* ПОПУЛЯРНИЙ БЕЙДЖ */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="mb-4 text-center"
                >
                  <div className="inline-flex items-center px-5 py-2 rounded-full bg-gray-800 border border-gray-700 font-bold text-sm tracking-wider gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>LE PLUS CHOISI</span>
                  </div>
                </motion.div>
              )}

              {/* ГРАДІЄНТНИЙ БОРДЕР ПРИ ХОВЕРІ */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              
              {/* ОСНОВНА КАРТКА */}
              <motion.div
                variants={cardVariants}
                className={`relative h-full bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border ${plan.accent} backdrop-blur-sm transition-all duration-300 ${plan.hoverColor} overflow-hidden ${plan.popular ? 'lg:mt-4' : ''}`}
              >
                {/* АКЦЕНТ ПРИ ХОВЕРІ */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                {/* ЗАГОЛОВОК ТАРИФУ */}
                <div className="text-center mb-10 relative z-10">
                  <motion.h3 
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold mb-6 text-white inline-block"
                  >
                    {plan.name}
                  </motion.h3>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <div className="text-sm font-medium text-gray-400">à partir de</div>
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="text-5xl md:text-6xl font-bold text-white ml-1"
                      >
                        {plan.price}
                        <span className="text-3xl md:text-4xl">€</span>
                      </motion.div>
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
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 + idx * 0.02 }}
                      className={`flex items-center gap-3 ${!feature.included ? 'opacity-40' : ''}`}
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center ${
                          feature.included 
                            ? 'bg-gray-800 border border-gray-700 group-hover:border-gray-500' 
                            : 'bg-gray-900 border border-gray-800'
                        } transition-colors`}
                      >
                        {feature.included ? (
                          <Check className={`w-4 h-4 ${
                            feature.highlight ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                          } transition-colors`} />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                        )}
                      </motion.div>
                      <span className={`text-sm ${
                        feature.included 
                          ? feature.highlight 
                            ? 'text-white font-medium' 
                            : 'text-gray-300 group-hover:text-gray-200'
                          : 'text-gray-600'
                      } transition-colors`}>
                        {feature.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* БЛОК ОПЛАТИ */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="mt-12 pt-8 border-t border-gray-800/50 relative z-10"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-xs text-gray-500">Paiement</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-1.5"
                      >
                        <div className="w-7 h-7 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:border-gray-500 transition-colors">
                          <span className="text-xs font-medium text-gray-300">50%</span>
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">commande</span>
                      </motion.div>
                      
                      <div className="text-gray-600">+</div>
                      
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-1.5"
                      >
                        <div className="w-7 h-7 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:border-gray-500 transition-colors">
                          <span className="text-xs font-medium text-gray-300">50%</span>
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">livraison</span>
                      </motion.div>
                    </div>
                    <div className="text-gray-500 text-xs mt-3 group-hover:text-gray-400 transition-colors">
                      Paiement sécurisé • Sans engagement
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ІНФОБЛОКИ - СТИЛЬ ЯК Processus.tsx */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col md:flex-row gap-6 mb-12"
          >
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
              <motion.div
                key={idx}
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative group flex-1"
              >
                {/* ГРАДІЄНТНИЙ БОРДЕР */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                
                {/* КАРТКА */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-600 overflow-hidden">
                  {/* АКЦЕНТ ПРИ ХОВЕРІ */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="p-2 rounded-xl bg-gray-800 border border-gray-700 group-hover:border-gray-500 transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm relative z-10 group-hover:text-gray-300 transition-colors">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA БЛОК - СТИЛЬ ЯК FAQ.tsx */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="relative group"
          >
            {/* ГРАДІЄНТНИЙ БОРДЕР */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
            
            {/* ОСНОВНА КАРТКА */}
            <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-600 overflow-hidden">
              {/* АКЦЕНТ ПРИ ХОВЕРІ */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              <h4 className="text-2xl font-bold text-white mb-4 relative z-10">
                Besoin d'une solution sur mesure ?
              </h4>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10 group-hover:text-gray-300 transition-colors">
                Chaque projet est unique. Discutons de vos besoins spécifiques pour une proposition personnalisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Demander un devis personnalisé
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/processus" 
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl border-2 border-gray-700 text-white font-medium hover:border-gray-500 transition-colors"
                  >
                    Voir notre processus
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ФУТЕР */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="text-center mt-8 text-sm text-gray-500"
          >
            <p className="mb-1">TVA non applicable, article 293 B du CGI • Micro-entreprise</p>
            <p>Paiement 100% sécurisé • Facture détaillée fournie</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}