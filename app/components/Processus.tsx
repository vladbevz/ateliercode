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
      icon: <PhoneCall className="w-6 h-6" />,
      number: "01",
      title: "Premier contact",
      description: "On discute de vos besoins par téléphone ou email. Je vous envoie un devis clair et détaillé.",
      duration: "Gratuit",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      number: "02",
      title: "Validation",
      description: "Vous validez le devis et payez 50%. Je commence le travail immédiatement.",
      duration: "1 jour",
    },
    {
      icon: <Code className="w-6 h-6" />,
      number: "03",
      title: "Création",
      description: "Je développe votre site et vous montre l'avancement régulièrement.",
      duration: "1-2 semaines",
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      number: "04",
      title: "Livraison",
      description: "Vous recevez votre site et payez les 50% restants. C'est terminé.",
      duration: "Immédiat",
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
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      id="processus" 
      ref={containerRef}
      className="relative py-20 overflow-hidden bg-black"
    >
      {/* Простий сітковий фон */}
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 border border-gray-800 mb-6">
            <span className="text-sm font-medium text-gray-300">
              COMMENT ÇA MARCHE
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Simple et clair,</span>
            <br />
            <span className="text-gray-400 font-normal mt-2 block">de A à Z</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
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
            className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent origin-left"
          />

          {/* Сходинки */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ y: -5 }}
                className="relative"
              >
                {/* Стрілочки для десктопа */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-3 z-10">
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </div>
                )}

                {/* Картка кроку */}
                <div className="relative h-full bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-gray-700 transition-colors">
                  
                  {/* Номер кроку */}
                  <div className="absolute -top-3 -left-3">
                    <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                      <div className="text-lg font-bold text-gray-300">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Іконка */}
                  <div className="flex justify-center mb-6 pt-4">
                    <div className="p-3 rounded-lg bg-gray-800">
                      <div className="text-gray-300">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Контент */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">{step.description}</p>
                    
                    {/* Бейдж тривалості */}
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700">
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
          className="mt-16"
        >
          <div className="relative max-w-2xl mx-auto p-8 rounded-xl bg-gray-900 border border-gray-800">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Processus transparent</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">24h</div>
                  <div className="text-gray-400 text-sm">Délai devis</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">2-3</div>
                  <div className="text-gray-400 text-sm">Semaines</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">50/50</div>
                  <div className="text-gray-400 text-sm">Paiement</div>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors"
              >
                <span>Commencer maintenant</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Примітка */}
          <p className="text-center mt-8 text-gray-600 text-sm">
            Communication directe et sans intermédiaire à chaque étape
          </p>
        </motion.div>
      </div>
    </section>
  );
}