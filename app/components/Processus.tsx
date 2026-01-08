// app/components/Processus.tsx
'use client';

import { PhoneCall, FileText, Code, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Processus() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: <PhoneCall className="w-8 h-8" />,
      number: "01",
      title: "Premier contact",
      description: "On discute de vos besoins par téléphone ou email. Je vous envoie un devis clair et détaillé.",
      duration: "Gratuit",
      accent: "bg-gradient-to-br from-gray-800 to-gray-900"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      number: "02",
      title: "Validation",
      description: "Vous validez le devis et payez 50%. Je commence le travail immédiatement.",
      duration: "1 jour",
      accent: "bg-gradient-to-br from-gray-800 to-gray-900"
    },
    {
      icon: <Code className="w-8 h-8" />,
      number: "03",
      title: "Création",
      description: "Je développe votre site et vous montre l'avancement régulièrement.",
      duration: "1-3 semaines",
      accent: "bg-gradient-to-br from-gray-800 to-gray-900"
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      number: "04",
      title: "Livraison",
      description: "Vous recevez votre site et payez les 50% restants. C'est terminé.",
      duration: "Immédiat",
      accent: "bg-gradient-to-br from-gray-800 to-gray-900"
    }
  ];

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      id="processus" 
      ref={containerRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gray-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gray-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок секції */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gray-900/50 border border-gray-800 mb-8 backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              COMMENT ÇA MARCHE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            <span className="block text-white">Simple et clair,</span>
            <span className="block text-gray-400 font-normal mt-2 text-3xl">
              de A à Z
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            4 étapes simples pour obtenir votre site web sans stress ni complication.
          </motion.p>
        </motion.div>

        {/* Таймлайн */}
        <div className="relative">
          {/* Лінія таймлайну */}
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent origin-left"
          />

          {/* Картки */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                {/* Стрілочки */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-10">
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                  </div>
                )}

                {/* Картка */}
                <div className="relative h-full bg-gradient-to-br from-gray-900/40 to-black/40 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-600 overflow-hidden">
                  
                  {/* Акцент при ховері */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                  {/* Номер кроку */}
                  <motion.div 
                    whileHover={{ rotate: 10 }}
                    className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 flex items-center justify-center group-hover:border-gray-600 transition-colors"
                  >
                    <div className="text-2xl font-bold text-white">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Іконка */}
                  <div className="flex justify-center mb-8 pt-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 group-hover:border-gray-500 transition-colors">
                      <div className="text-gray-300 group-hover:text-white transition-colors">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Контент */}
                  <div className="text-center relative z-10">
                    <h3 className="text-xl font-bold mb-5 text-white">{step.title}</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">{step.description}</p>
                    
                    {/* Бейдж тривалості */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 group-hover:border-gray-500 transition-colors">
                      <span className="text-sm font-medium text-gray-300">{step.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Підсумок */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: 0.6 }}
  className="mt-12"
>
  <div className="text-center">
    
    {/* Статистика в рядок */}
    <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
      <div className="text-center">
        <div className="text-2xl font-bold text-white mb-1">24h</div>
        <div className="text-sm text-gray-400">Délai devis</div>
      </div>
      
      <div className="text-center">
        <div className="text-2xl font-bold text-white mb-1">1-3</div>
        <div className="text-sm text-gray-400">Semaines</div>
      </div>
      
      <div className="text-center">
        <div className="text-2xl font-bold text-white mb-1">50/50</div>
        <div className="text-sm text-gray-400">Paiement</div>
      </div>
    </div>

    {/* Кнопка */}
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      href="/contact"
      className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors"
    >
      <span>Commencer maintenant</span>
      <ArrowRight className="w-5 h-5" />
    </motion.a>

  </div>
</motion.div>
      </div>
    </section>
  );
}