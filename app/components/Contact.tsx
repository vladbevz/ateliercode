// app/components/Contact.tsx - ВИПРАВЛЕНО
'use client'

import { useState } from 'react'
import { Mail, Phone, Send, Check, MessageCircle, Clock, User } from 'lucide-react'
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
  const [error, setError] = useState('')
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi du message')
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        message: ''
      })

      setTimeout(() => setIsSubmitted(false), 10000)

    } catch (err) {
      setIsSubmitting(false)
      setError(err instanceof Error ? err.message : 'Une erreur est survenue')
    }
  }

  return (
    <section 
      ref={containerRef}
      className="relative py-24 overflow-hidden" // Додано overflow-hidden
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

      {/* FIXED: Головна обгортка з overflow-hidden */}
      <div className="relative z-10 w-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gray-900/50 border border-gray-800 mb-8">
              <span className="text-sm font-medium text-gray-300 tracking-wide">
                CONTACT
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">Parlons de votre projet</span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Discutons de vos besoins pour créer une solution web adaptée à votre activité.
            </motion.p>
          </motion.div>

          {/* Контакти + Форма в 2 колонки - FIXED: Додаємо overflow-hidden */}
          <div className="max-w-6xl mx-auto overflow-hidden px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
            >
              {/* Ліва колонка - Контакти */}
              <div className="w-full">
                {/* Блок зв'язку */}
                <div className="bg-gradient-to-br from-gray-900/40 to-black/40 rounded-2xl border border-gray-800 p-6 md:p-8 mb-6 md:mb-8 backdrop-blur-sm w-full">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="p-2 md:p-3 rounded-xl bg-gray-800 border border-gray-700">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white">Me contacter</h3>
                      <p className="text-gray-400 text-xs md:text-sm">Plusieurs façons de discuter de votre projet</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 md:p-2 rounded-lg bg-gray-800/50 border border-gray-700 group-hover:border-gray-600 transition-colors">
                          <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-gray-300" />
                        </div>
                        <span className="text-sm font-medium text-gray-300">Email</span>
                      </div>
                      <a 
                        href="mailto:contact@ateliercode.fr"
                        className="text-gray-400 hover:text-white transition-colors block pl-10 md:pl-11 text-sm md:text-base break-all"
                      >
                        contact@ateliercode.fr
                      </a>
                    </div>

                    {/* Телефон */}
                    <div className="group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 md:p-2 rounded-lg bg-gray-800/50 border border-gray-700 group-hover:border-gray-600 transition-colors">
                          <Phone className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-gray-300" />
                        </div>
                        <span className="text-sm font-medium text-gray-300">Téléphone</span>
                      </div>
                      <a 
                        href="tel:+33767772915"
                        className="text-gray-400 hover:text-white transition-colors block pl-10 md:pl-11 text-sm md:text-base"
                      >
                        07 67 77 29 15
                      </a>
                    </div>

                    {/* Додаткова інформація */}
                    <div className="pt-6 mt-6 border-t border-gray-800/50">
                      <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Réponse sous 24 heures</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Блок процесу */}
                <div className="bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800 p-4 md:p-6 backdrop-blur-sm w-full">
                  <h4 className="font-bold text-white mb-3 md:mb-4 text-sm flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Comment se passe le premier contact ?
                  </h4>
                  <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs text-gray-400">1</span>
                      </div>
                      <span className="text-gray-400">Vous me contactez par email ou formulaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs text-gray-400">2</span>
                      </div>
                      <span className="text-gray-400">Échange par email ou appel téléphonique gratuit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs text-gray-400">3</span>
                      </div>
                      <span className="text-gray-400">Devis personnalisé gratuit sous 48 heures</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Права колонка - Форма */}
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-gray-900/40 to-black/40 rounded-2xl border border-gray-800 p-4 md:p-8 backdrop-blur-sm w-full"
                >
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6 md:py-8"
                    >
                      <div className="inline-flex mb-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-gray-700">
                          <Check className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
                        </div>
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3">Message envoyé avec succès !</h3>
                      <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm md:text-base">
                        Je vous répondrai dans les 24 heures par email. 
                        Pensez à vérifier vos spams si vous ne voyez pas ma réponse.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="px-4 py-2 md:px-6 md:py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors text-sm md:text-base"
                        >
                          Envoyer un autre message
                        </button>
                        <a
                          href="/processus"
                          className="px-4 py-2 md:px-6 md:py-3 rounded-xl border-2 border-gray-700 text-white font-medium hover:border-gray-500 transition-colors text-center text-sm md:text-base"
                        >
                          Découvrir notre processus
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-6 md:mb-8">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">Formulaire de contact</h3>
                        <p className="text-gray-400 text-xs md:text-sm">
                          Remplissez ce formulaire pour discuter de votre projet. 
                          Tous les champs marqués d'un * sont obligatoires.
                        </p>
                      </div>
                      
                      {error && (
                        <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-xl bg-red-900/20 border border-red-800/50">
                          <p className="text-red-300 text-xs md:text-sm">
                            {error === 'Failed to fetch' 
                              ? 'Erreur de connexion. Veuillez réessayer ou nous contacter directement par email.' 
                              : error}
                          </p>
                        </div>
                      )}
                      
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-4 md:space-y-6">
                          <div>
                            <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-2">
                              Nom et prénom *
                            </label>
                            <input
                              type="text"
                              id="nom"
                              name="nom"
                              required
                              value={formData.nom}
                              onChange={handleChange}
                              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:border-gray-500 focus:outline-none placeholder-gray-500 text-sm md:text-base"
                              placeholder="Votre nom complet"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:border-gray-500 focus:outline-none placeholder-gray-500 text-sm md:text-base"
                              placeholder="votre@email.com"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="telephone" className="block text-sm font-medium text-gray-300 mb-2">
                              Téléphone (optionnel)
                            </label>
                            <input
                              type="tel"
                              id="telephone"
                              name="telephone"
                              value={formData.telephone}
                              onChange={handleChange}
                              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:border-gray-500 focus:outline-none placeholder-gray-500 text-sm md:text-base"
                              placeholder="06 12 34 56 78"
                            />
                            <p className="text-gray-500 text-xs mt-1 md:mt-2">Pour un échange plus rapide si nécessaire</p>
                          </div>
                          
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                              Message *
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              required
                              rows={4}
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:border-gray-500 focus:outline-none placeholder-gray-500 resize-none text-sm md:text-base"
                              placeholder="Parlez-moi de votre projet, de vos besoins, de votre budget..."
                            />
                          </div>
                          
                          <div className="pt-4">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full py-3 md:py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                            >
                              {isSubmitting ? (
                                <div className="flex items-center justify-center gap-2 md:gap-3">
                                  <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                  <span>Envoi en cours...</span>
                                </div>
                              ) : (
                                <div className="flex items-center justify-center gap-2 md:gap-3">
                                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                                  <span>Envoyer mon message</span>
                                </div>
                              )}
                            </button>
                            <p className="text-gray-500 text-xs text-center mt-2 md:mt-3">
                              Je vous répondrai sous 24 heures, du lundi au vendredi.
                            </p>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Легальна інформація */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 md:mt-12 text-center"
            >
              <div className="inline-flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500 px-2">
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                  <span>Micro-entreprise</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                  <span>TVA non applicable</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                  <span>Paiement sécurisé</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                  <span>Confidentialité des données</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}