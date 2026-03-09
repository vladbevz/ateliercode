// app/components/Contact.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, MessageCircle, Clock, Check, Sparkles, AlertCircle } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  // Стан форми
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: '',
    budget: '',
    timeline: ''
  });
  
  // Стан відправки
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi du message');
      }

      // Успішна відправка
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Очистити форму
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        message: '',
        budget: '',
        timeline: ''
      });

      // Автоматично сховати повідомлення через 10 секунд
      setTimeout(() => setIsSubmitted(false), 10000);

    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setError('');
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@ateliercode.fr",
      link: "mailto:contact@ateliercode.fr",
      responseTime: "Réponse sous 24h",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "07 67 77 29 15",
      link: "tel:+33767772915",
      responseTime: "Disponible 9h-19h",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "07 67 77 29 15",
      link: "https://wa.me/33767772915",
      responseTime: "Réponse rapide",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
      {/* Світлий фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
         <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Parlons de votre <br />
            <span className="text-gray-400">projet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discutons de vos besoins pour créer une solution web adaptée à votre activité
          </p>
        </motion.div>

        {/* Méthodes de contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all text-center group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                {method.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{method.value}</p>
              <p className="text-xs text-gray-400">{method.responseTime}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message envoyé !</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Merci de m'avoir contacté. Je vous répondrai dans les 24 heures.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Повідомлення про помилку */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-600">
                      {error === 'Failed to fetch' 
                        ? 'Erreur de connexion. Veuillez réessayer ou nous contacter directement par email.' 
                        : error}
                    </p>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom et prénom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                      placeholder="jean@exemple.fr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget approximatif
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="299">Moins de 300€</option>
                      <option value="499">300€ - 500€</option>
                      <option value="799">500€ - 800€</option>
                      <option value="plus">Plus de 800€</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Objectif de lancement
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="urgent">Très urgent (moins d'1 semaine)</option>
                      <option value="soon">Sous 2-3 semaines</option>
                      <option value="month">Dans le mois</option>
                      <option value="flexible">Pas de date précise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Votre message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Parlez-moi de votre projet, de vos besoins, de vos idées..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  * Champs obligatoires • Réponse garantie sous 24h
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* Disponibilité */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>Disponible du lundi au vendredi • Réponse sous 24h</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}