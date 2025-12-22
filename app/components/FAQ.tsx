// app/components/FAQ.tsx
'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const faqs = [
    {
      question: "Combien de temps pour avoir mon site ?",
      answer: "5 à 15 jours selon la complexité. Landing page : 5-7 jours. Site vitrine : 10-15 jours.",
    },
    {
      question: "Puis-je modifier mon site moi-même après ?",
      answer: "Oui. Vous pourrez modifier texte et images. Pas besoin de connaissances techniques.",
    },
    {
      question: "Quel hébergement utilisez-vous ?",
      answer: "Vercel (serveurs en Europe). Hébergement inclus la première année, ~20€/an après.",
    },
    {
      question: "Et si je ne sais pas quoi écrire ?",
      answer: "Je vous guide avec un template. Service rédaction en option (+200€) si besoin.",
    },
    {
      question: "Proposez-vous le référencement (SEO) ?",
      answer: "SEO de base inclus. SEO avancé en option à partir de 500€.",
    },
    {
      question: "Que se passe-t-il après la première année ?",
      answer: "Vous payez seulement : nom de domaine (~12€/an) et hébergement (~20€/an).",
    },
    {
      question: "Travaillez-vous avec des templates ?",
      answer: "Non, chaque site est créé sur mesure selon vos besoins.",
    },
    {
      question: "Quelles sont les méthodes de paiement ?",
      answer: "50% à la commande, 50% à la livraison. Virement, PayPal ou carte. TVA non applicable.",
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="faq" 
      ref={containerRef}
      className="relative py-20"
    >
      {/* Мінімальний фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      </div>

      <div className="container-narrow relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800 mb-6">
            <span className="text-sm font-medium text-gray-300">
              QUESTIONS FRÉQUENTES
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Questions fréquentes</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Les réponses aux questions les plus courantes sur nos services.
          </motion.p>
        </motion.div>

        {/* FAQ у 2 колонки */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.03 }}
                className="group"
              >
                {/* Компактний FAQ елемент */}
                <div className="relative bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden hover:border-gray-700 transition-colors">
                  <button
                    className="w-full p-4 text-left flex justify-between items-start gap-3"
                    onClick={() => toggleFAQ(index)}
                  >
                    {/* Питання */}
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-white text-left pr-2">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Стрілка */}
                    <div className="flex-shrink-0 mt-0.5">
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-1.5 rounded border border-gray-700"
                      >
                        <ChevronDown 
                          className="w-4 h-4 text-gray-400"
                        />
                      </motion.div>
                    </div>
                  </button>

                  {/* Відповідь */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-1 border-t border-gray-800">
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Простий CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-6 text-sm">
            Une question spécifique ? Contactez-nous directement.
          </p>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors text-sm"
          >
            <span>Me poser une question</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}