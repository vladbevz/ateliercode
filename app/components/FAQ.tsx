'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const faqs = [
    {
      question: "Combien de temps pour avoir mon site ?",
      answer: "5 à 21 jours selon le projet. Landing page : 1 semaine. Site vitrine : 5-15 jours. Site avancé : 2-3 semaines.",
    },
    {
      question: "Puis-je modifier mon site moi-même après ?",
      answer: "Oui, plusieurs options : 1) Interface simple incluse (modification textes/images), 2) Panel admin complet avec Sanity.io (+150€ setup), 3) Forfait maintenance à 50€/mois (modifications illimitées par mes soins).",
    },
    {
      question: "Quel hébergement utilisez-vous ?",
      answer: "J'utilise principalement Vercel (excellent pour Next.js) et OVH pour les besoins spécifiques. L'hébergement est inclus la première année (environ 60-80€/an selon le projet). Après la première année, vous pouvez choisir de le gérer vous-même ou continuer avec mes services.",
    },
    {
      question: "Et si je ne sais pas quoi écrire sur mon site ?",
      answer: "Je vous fournis un guide de rédaction et des exemples pour chaque page. Si nécessaire, je peux rédiger les textes avec vous (inclus dans le forfait Site Avancé, en option pour les autres à partir de 150€).",
    },
    {
      question: "Proposez-vous le référencement (SEO) ?",
      answer: "Oui, le SEO technique de base est inclus dans tous les forfaits (meta tags, structure HTML, vitesse). Pour le SEO avancé (recherche de mots-clés, contenu optimisé, netlinking), je propose un forfait à partir de 300€ selon vos besoins.",
    },
    {
      question: "Que se passe-t-il après la première année ?",
      answer: "Après la première année, vous payez : nom de domaine (10-15€/an) et hébergement (60-80€/an). Je propose également un forfait maintenance à 50€/mois pour les mises à jour, sécurité et petites modifications.",
    },
    {
      question: "Travaillez-vous avec des templates ?",
      answer: "J'utilise des structures de base mais chaque site est personnalisé selon vos besoins. Je ne vends pas de sites clé-en-main identiques. Votre site sera unique et adapté à votre activité.",
    },
    {
      question: "Quelles sont les méthodes de paiement ?",
      answer: "Paiement 50% à la commande, 50% à la livraison. Virement bancaire ou PayPal. Pas de TVA (micro-entreprise, article 293 B du CGI). Facture détaillée provided.",
    },
    {
      question: "Puis-je voir des exemples de sites que vous avez créés ?",
      answer: "Oui, consultez la section 'Réalisations' sur cette page. Vous y trouverez plusieurs projets récents avec leurs spécificités.",
    },
    {
      question: "Travaillez-vous avec des entreprises hors France ?",
      answer: "Oui, je travaille avec des clients francophones partout dans le monde. Les communications se font par email et visioconférence.",
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      ref={containerRef}
      className="relative py-24 overflow-hidden" // Додано overflow-hidden
    >
      {/* Фон - FIXED: Додаємо overflow-hidden */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gray-900/5 rounded-full blur-3xl"></div>
      </div>

      {/* FIXED: Додаємо обгортку з overflow-hidden та max-width */}
      <div className="relative z-10 w-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gray-900/50 border border-gray-800 mb-8">
              <span className="text-sm font-medium text-gray-300 tracking-wide">
                QUESTIONS FRÉQUENTES
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">Tout ce que vous voulez savoir</span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Des réponses claires à vos questions sur la création de site web, 
              l'hébergement, les tarifs et l'accompagnement.
            </motion.p>
          </motion.div>

          {/* FAQ у 2 колонки - FIXED: Додаємо overflow-hidden */}
          <div className="max-w-6xl mx-auto overflow-hidden">
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
                  transition={{ delay: 0.5 + index * 0.02 }}
                  className="group"
                >
                  {/* FAQ елемент - FIXED: Додаємо max-width */}
                  <div className="relative bg-gradient-to-br from-gray-900/30 to-black/30 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300 group-hover:bg-gray-900/40 max-w-full">
                    <button
                      className="w-full p-4 md:p-6 text-left flex justify-between items-start gap-3 md:gap-4 hover:bg-gray-900/20 transition-colors"
                      onClick={() => toggleFAQ(index)}
                    >
                      {/* Питання - FIXED: Додаємо overflow-hidden для тексту */}
                      <div className="flex-1 pr-3 md:pr-4 overflow-hidden">
                        <h3 className="text-base md:text-lg font-medium text-white text-left break-words">
                          {faq.question}
                        </h3>
                      </div>

                      {/* Стрілка */}
                      <div className="flex-shrink-0 mt-0.5 md:mt-1">
                        <motion.div
                          animate={{ rotate: openIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="p-1.5 md:p-2 rounded-lg bg-gray-800 border border-gray-700 group-hover:border-gray-600 transition-colors"
                        >
                          <ChevronDown 
                            className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-gray-300 transition-colors"
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
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 md:px-6 pb-4 md:pb-6 pt-2 border-t border-gray-800/50">
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
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

          {/* Блок з посиланнями */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-20 max-w-4xl mx-auto overflow-hidden"
          >
            {/* Фінальний CTA */}
            <div className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/40 to-black/40 border border-gray-800 mx-4 md:mx-0">
              <h4 className="text-xl font-bold text-white mb-4">Une question non couverte ?</h4>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                Chaque projet est unique. Discutons de vos besoins spécifiques pour une réponse personnalisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
                >
                  Poser une question spécifique
                </Link>
                <a 
                  href="tel:+33612345678"
                  className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-3.5 rounded-xl border-2 border-gray-700 text-white font-medium hover:border-gray-500 transition-colors text-sm md:text-base"
                >
                  📞 Appeler maintenant
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}