'use client';

import { useState } from 'react';
import { Send, Mail, Phone, MessageCircle, Check, AlertCircle } from 'lucide-react';
import AnimateIn from './AnimateIn';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: '',
    projet: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Erreur lors de l\'envoi du message');

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ nom: '', email: '', telephone: '', message: '', projet: '', timeline: '' });
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
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'contact@ateliercode.fr',
      link: 'mailto:contact@ateliercode.fr',
      responseTime: 'Réponse sous 24h',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Téléphone',
      value: '07 67 77 29 15',
      link: 'tel:+33767772915',
      responseTime: 'Disponible 9h–19h',
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: 'WhatsApp',
      value: '07 67 77 29 15',
      link: 'https://wa.me/33767772915',
      responseTime: 'Réponse rapide',
    },
  ];

  return (
    <section className="min-h-screen bg-white pt-16 pb-24">
      <div className="container mx-auto px-4">

        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 animate-fade-up">
            Parlons de votre projet
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Discutons de vos besoins pour créer une solution web adaptée à votre activité
          </p>
        </div>

        {/* Méthodes de contact */}
        <AnimateIn className="flex flex-wrap justify-center gap-3 mb-12" delay={150}>
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:border-gray-400 hover:text-gray-900 active:scale-[0.98] transition-all duration-150"
            >
              <span className="text-gray-500">{method.icon}</span>
              <span>{method.title}</span>
              <span className="text-gray-400 text-xs">{method.responseTime}</span>
            </a>
          ))}
        </AnimateIn>

        {/* Formulaire */}
        <AnimateIn className="max-w-3xl mx-auto" delay={200}>
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-gray-900 text-white rounded-md flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message envoyé !</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Merci de m&apos;avoir contacté. Je vous répondrai dans les 24 heures.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3 animate-fade-in">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-600">
                      {error === 'Failed to fetch'
                        ? 'Erreur de connexion. Veuillez réessayer ou nous contacter directement par email.'
                        : error}
                    </p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom et prénom *</label>
                    <input
                      type="text" name="nom" required
                      value={formData.nom} onChange={handleChange} disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email" name="email" required
                      value={formData.email} onChange={handleChange} disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors"
                      placeholder="jean@exemple.fr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone (optionnel)</label>
                  <input
                    type="tel" name="telephone"
                    value={formData.telephone} onChange={handleChange} disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type de projet</label>
                    <select
                      name="projet"
                      value={formData.projet} onChange={handleChange} disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="vitrine">Site Vitrine (dès 499€)</option>
                      <option value="ecommerce">E-commerce (dès 990€)</option>
                      <option value="application">Application web (sur devis)</option>
                      <option value="autre">Je ne sais pas encore</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Objectif de lancement</label>
                    <select
                      name="timeline"
                      value={formData.timeline} onChange={handleChange} disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gray-400 focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="urgent">Très urgent (moins d&apos;1 semaine)</option>
                      <option value="soon">Sous 2-3 semaines</option>
                      <option value="month">Dans le mois</option>
                      <option value="flexible">Pas de date précise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Votre message *</label>
                  <textarea
                    name="message" required rows={5}
                    value={formData.message} onChange={handleChange} disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gray-400 focus:outline-none resize-none disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors"
                    placeholder="Parlez-moi de votre projet, de vos besoins, de vos idées..."
                  />
                </div>

                <button
                  type="submit" disabled={isSubmitting}
                  className="w-full py-4 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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
        </AnimateIn>

      </div>
    </section>
  );
}
