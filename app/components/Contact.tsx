// app/components/Contact.tsx
'use client'

import { useState } from 'react'
import { Mail, Phone, Send, Check } from 'lucide-react'
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
              CONTACT
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Parlons de votre projet</span>
            <br />
            <span className="text-gray-400 font-normal mt-2 block">Réponse sous 24h</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Контактна інформація */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 text-center hover:border-gray-700 transition-colors">
                <div className="inline-flex p-3 rounded-lg bg-gray-800 mb-4">
                  <Mail className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="font-medium text-white mb-2">Email</h3>
                <a 
                  href="mailto:contact@example.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@example.com
                </a>
              </div>

              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 text-center hover:border-gray-700 transition-colors">
                <div className="inline-flex p-3 rounded-lg bg-gray-800 mb-4">
                  <Phone className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="font-medium text-white mb-2">Téléphone</h3>
                <a 
                  href="tel:+33612345678"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  06 12 34 56 78
                </a>
              </div>
            </div>
          </motion.div>

          {/* Форма */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Форма */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex mb-6">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                      <Check className="w-8 h-8 text-gray-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Message envoyé !</h3>
                  <p className="text-gray-400 mb-8">
                    Je vous répondrai dans les 24 heures.
                  </p>
                  
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-6">Formulaire de contact</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-400 mb-2">
                          Nom et prénom *
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          required
                          value={formData.nom}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-gray-500 focus:outline-none"
                          placeholder="Votre nom"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-gray-500 focus:outline-none"
                          placeholder="votre@email.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="telephone" className="block text-sm font-medium text-gray-400 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-gray-500 focus:outline-none"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-gray-500 focus:outline-none resize-none"
                          placeholder="Parlez-moi de votre projet..."
                        />
                      </div>
                      
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center gap-3">
                              <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                              <span>Envoi en cours...</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-3">
                              <Send className="w-5 h-5" />
                              <span>Envoyer le message</span>
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Простий CTA блок */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 text-center"
            >
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h4 className="font-medium text-white mb-3">Appel découverte gratuit</h4>
                <p className="text-gray-400 text-sm mb-4">
                  30 minutes pour discuter de votre projet sans engagement.
                </p>
                <a 
                  href="#contact"
                  className="inline-block px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors"
                >
                  Réserver un appel
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}