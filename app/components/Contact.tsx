// app/components/Contact.tsx
'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    projet: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        projet: '',
        message: ''
      })
      
      // Скидаємо статус через 5 секунд
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Parlons de votre projet
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Réponse sous 24h • Devis gratuit • Aucun engagement
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Інформаційна колонка */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:contact@ateliercode.fr" 
                      className="text-gray-600 hover:text-blue-600"
                    >
                      contact@ateliercode.fr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <div className="text-gray-600">
                      [Votre numéro français]
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Localisation</h4>
                    <div className="text-gray-600">
                      Basé en France
                      <div className="text-sm text-gray-500 mt-1">
                        Services disponibles dans toute la France
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <h4 className="font-semibold mb-4">Horaires de contact</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>10h - 14h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-semibold mb-2 text-blue-700">Prochaines étapes</h4>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                  <li>Vous remplissez ce formulaire</li>
                  <li>Je vous contacte sous 24h</li>
                  <li>Appel découverte gratuit (30 min)</li>
                  <li>Devis détaillé sous 24h</li>
                  <li>Démarrage du projet</li>
                </ol>
              </div>
            </div>
          </div>
          
          {/* Форма */}
          <div className="bg-white rounded-xl p-8 shadow-sm border">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message envoyé !</h3>
                <p className="text-gray-600 mb-6">
                  Merci pour votre message. Je vous répondrai dans les 24 heures.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6">Formulaire de contact</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom et prénom *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="projet" className="block text-sm font-medium text-gray-700 mb-2">
                        Type de projet *
                      </label>
                      <select
                        id="projet"
                        name="projet"
                        required
                        value={formData.projet}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      >
                        <option value="">Sélectionnez une option</option>
                        <option value="landing-page">Landing Page (399€)</option>
                        <option value="site-vitrine">Site Vitrine (899€)</option>
                        <option value="refonte">Refonte de site (1499€)</option>
                        <option value="autre">Autre projet</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Parlez-moi de votre projet, vos besoins, vos attentes..."
                    />
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="rgpd"
                        required
                        className="mt-1 mr-3"
                      />
                      <label htmlFor="rgpd" className="text-sm text-gray-600">
                        J'accepte que mes données personnelles soient traitées dans le cadre de ma demande de contact. 
                        Ces données ne seront utilisées que pour répondre à ma demande et ne seront pas transmises à des tiers. 
                        Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, 
                        de suppression et d'opposition aux données vous concernant.
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Envoyer ma demande
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    * Champs obligatoires
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-white p-6 rounded-xl border shadow-sm">
            <h4 className="font-semibold mb-2">Pas encore prêt à discuter ?</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Téléchargez notre guide gratuit pour préparer votre projet
            </p>
            <a 
              href="#" 
              className="btn-secondary text-sm"
              onClick={(e) => {
                e.preventDefault()
                alert('Guide téléchargé ! (fonctionnalité à implémenter)')
              }}
            >
              📥 Télécharger le guide
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}