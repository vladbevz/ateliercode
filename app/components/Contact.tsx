// app/components/Contact.tsx
'use client'

import { useState } from 'react'
import { Mail, Phone, Send, Check, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Симуляція відправки форми
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        message: ''
      })
      
      // Скидаємо статус через 5 секунд
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="relative py-16"
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
          className="text-center mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800 mb-4">
            <span className="text-sm font-medium text-gray-300">
              CONTACT
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-4">
            <span className="text-white">Parlons de votre projet</span>
          </h2>
          
          <p className="text-gray-400">
            Réponse sous 24 heures
          </p>
        </motion.div>

        {/* Контакти + Форма в 2 колонки */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Контактна інформація */}
            <div>
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-800 border border-gray-700">
                    <MessageCircle className="w-5 h-5 text-gray-300" />
                  </div>
                  <h3 className="font-medium text-white">Contact rapide</h3>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:contact@ateliercode.fr"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                  >
                    <div className="p-2 rounded bg-gray-800/50 border border-gray-700 group-hover:border-gray-600">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>contact@ateliercode.fr</span>
                  </a>

                  <a 
                    href="tel:+33612345678"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                  >
                    <div className="p-2 rounded bg-gray-800/50 border border-gray-700 group-hover:border-gray-600">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>06 12 34 56 78</span>
                  </a>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-800/50">
                  <p className="text-sm text-gray-500">
                    Basé en France • Disponible à distance
                  </p>
                </div>
              </div>

              {/* Простий блок інформації */}
              <div className="bg-gray-900/30 rounded-xl border border-gray-800 p-5">
                <h4 className="font-medium text-white mb-3 text-sm">Informations pratiques</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                    <span>Réponse sous 24 heures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                    <span>Premier appel gratuit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                    <span>Devis gratuit et personnalisé</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Форма */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="bg-gray-900/50 rounded-xl border border-gray-800 p-6"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="inline-flex mb-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                        <Check className="w-6 h-6 text-gray-300" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">Message envoyé !</h3>
                    <p className="text-gray-400 text-sm mb-6">
                      Je vous répondrai dans les 24 heures.
                    </p>
                    
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors text-sm"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-lg font-bold text-white mb-6">Formulaire de contact</h3>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="nom" className="block text-sm font-medium text-gray-400 mb-1">
                            Nom et prénom *
                          </label>
                          <input
                            type="text"
                            id="nom"
                            name="nom"
                            required
                            value={formData.nom}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 text-sm rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-gray-500 focus:outline-none"
                            placeholder="Votre nom"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 text-sm rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-gray-500 focus:outline-none"
                            placeholder="votre@email.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="telephone" className="block text-sm font-medium text-gray-400 mb-1">
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 text-sm rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-gray-500 focus:outline-none"
                            placeholder="06 12 34 56 78"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 text-sm rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-gray-500 focus:outline-none resize-none"
                            placeholder="Parlez-moi de votre projet..."
                          />
                        </div>
                        
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center justify-center gap-2">
                                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                <span>Envoi en cours...</span>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" />
                                <span>Envoyer le message</span>
                              </div>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Простий футер */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500">
              TVA non applicable, article 293 B du CGI • Paiement sécurisé
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}