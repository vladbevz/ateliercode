// app/components/FAQ.tsx
'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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
      className="relative py-20 overflow-hidden bg-black"
    >
      {/* Сітковий фон */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #333 1px, transparent 1px),
                           linear-gradient(180deg, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-narrow relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 border border-gray-800 mb-6">
            <span className="text-sm font-medium text-gray-300">
              QUESTIONS FRÉQUENTES
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Des réponses claires</span>
            <br />
            <span className="text-gray-400 font-normal mt-2 block">pour vos questions</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Tout ce que vous devez savoir avant de commencer votre projet.
          </motion.p>
        </motion.div>

        {/* FAQ списки */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="group"
              >
                {/* FAQ елемент */}
                <div className="relative bg-gray-900 rounded-lg border border-gray-800 overflow-hidden hover:border-gray-700 transition-colors">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center gap-4"
                    onClick={() => toggleFAQ(index)}
                  >
                    {/* Питання */}
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white text-left">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Стрілка */}
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-2 rounded-lg bg-gray-800 border border-gray-700"
                      >
                        <ChevronDown 
                          className="w-5 h-5 text-gray-400"
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
                        <div className="px-6 pb-6 pt-2 border-t border-gray-800">
                          <p className="text-gray-400 leading-relaxed">
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

        {/* CTA секція */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-6 max-w-2xl mx-auto p-8 rounded-xl bg-gray-900 border border-gray-800">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Une question spécifique ?
              </h3>
              <p className="text-gray-400 mb-6">
                Je réponds à toutes vos questions par email ou téléphone.
              </p>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors"
            >
              <span>Me poser une question</span>
            </a>
            
            {/* Статистика */}
            <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-gray-800">
              <div className="text-center">
                <div className="text-lg font-bold text-white">24h</div>
                <div className="text-sm text-gray-400">Réponse</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">En français</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">Gratuit</div>
                <div className="text-sm text-gray-400">Premier appel</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}