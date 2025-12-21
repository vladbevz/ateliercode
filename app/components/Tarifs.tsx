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
      price: "299€",
      description: "Idéal pour tester une idée ou promouvoir un service spécifique",
      features: [
        "1 page responsive",
        "Formulaire de contact",
        "Optimisation mobile",
        "Mise en ligne",
        "Hébergement 1 an"
      ],
      cta: "Choisir cette offre",
      popular: false
    },
    {
      name: "SITE VITRINE",
      price: "499€",
      description: "Pour les artisans et indépendants qui veulent une présence en ligne complète",
      features: [
        "3-4 pages design sobre",
        "Galerie photo simple",
        "SEO de base",
        "1 correction design",
        "Mise en ligne",
        "Hébergement 1 an"
      ],
      cta: "Choisir cette offre",
      popular: true
    },
    {
      name: "SITE AVANCÉ",
      price: "799€",
      description: "Pour les petites entreprises qui veulent plus de fonctionnalités",
      features: [
        "5-6 pages personnalisées",
        "Blog intégré",
        "SEO optimisé",
        "2 corrections design",
        "Mise en ligne",
        "Hébergement 1 an"
      ],
      cta: "Choisir cette offre",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      id="tarifs" 
      ref={containerRef}
      className="relative py-20 overflow-hidden bg-black"
    >
      {/* Простий фон */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #333 1px, transparent 1px),
                           linear-gradient(180deg, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-narrow relative z-10">
        {/* Заголовок секції */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 border border-gray-800 mb-6">
            <span className="text-sm font-medium text-gray-300">
              TARIFS TRANSPARENTS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Des prix clairs,</span>
            <br />
            <span className="text-gray-400 font-normal mt-2 block">sans surprise</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Tout est inclus. Pas de frais cachés, pas de formation coûteuse. Juste un site qui fonctionne.
          </motion.p>
        </motion.div>

        {/* Картки тарифів */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative ${
                plan.popular ? 'md:scale-105 md:z-10' : ''
              }`}
            >
              {/* Основна картка */}
              <div className={`relative h-full bg-gray-900 rounded-xl border ${
                plan.popular 
                  ? 'border-gray-600 shadow-lg' 
                  : 'border-gray-800'
              } p-6 overflow-hidden`}>
                
                {/* Популярний бейдж */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="px-4 py-1.5 rounded-full bg-white text-black font-bold text-sm shadow">
                      LE PLUS CHOISI
                    </div>
                  </div>
                )}
                
                {/* Заголовок тарифу */}
                <div className="text-center mb-8 pt-2">
                  <h3 className="text-xl font-bold mb-3 text-white">{plan.name}</h3>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold mb-1 text-white">
                      {plan.price}
                    </div>
                    <div className="text-gray-500 text-sm">HT • TVA non applicable</div>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
                </div>
                
                {/* Список функцій */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start"
                    >
                      <Check className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Кнопка вибору */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {plan.cta}
                </motion.a>
                
                {/* Інформація про оплату */}
                <div className="text-center mt-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700">
                    <div className="text-xs text-gray-400">
                      50% à la commande • 50% à la livraison
                    </div>
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
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-8 p-6 rounded-xl bg-gray-900 border border-gray-800 max-w-2xl mx-auto">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                  <Check className="w-3 h-3 text-gray-300" />
                </div>
                <span className="font-medium text-gray-300">Inclus dans tous les forfaits</span>
              </div>
              <ul className="space-y-1 text-sm text-gray-500">
                <li>• Hébergement rapide</li>
                <li>• Certificat SSL</li>
                <li>• Support par email</li>
                <li>• Responsive design</li>
              </ul>
            </div>
            
            <div className="h-10 w-px bg-gray-800 hidden sm:block" />
            
            <div className="text-center">
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 text-gray-300 font-medium hover:text-white transition-colors"
              >
                <span>
                  Besoin d'un devis personnalisé ?
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-500 mt-2">Réponse en 24 heures</p>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray-600">
            <p className="mb-1">TVA non applicable, article 293 B du CGI</p>
            <p>Paiement sécurisé • Aucun engagement</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}