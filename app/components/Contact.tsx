// app/components/Contact.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, MessageCircle, Clock, Check, AlertCircle } from 'lucide-react';

const contactMethods = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Email',
    value: 'contact@ateliercode.fr',
    link: 'mailto:contact@ateliercode.fr',
    sub: 'Réponse sous 24h',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Téléphone',
    value: '07 67 77 29 15',
    link: 'tel:+33767772915',
    sub: 'Disponible 9h–19h',
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: 'WhatsApp',
    value: '07 67 77 29 15',
    link: 'https://wa.me/33767772915',
    sub: 'Réponse rapide',
  },
];

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({ nom: '', email: '', telephone: '', message: '', budget: '', timeline: '' });
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
      if (!response.ok) throw new Error(data.error || 'Erreur lors de l\'envoi');
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ nom: '', email: '', telephone: '', message: '', budget: '', timeline: '' });
      setTimeout(() => setIsSubmitted(false), 10000);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    }
  };

  const inputCls = "w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:border-amber-400/60 focus:outline-none transition-colors disabled:opacity-40 disabled:cursor-not-allowed";
  const selectCls = `${inputCls} appearance-none`;

  return (
    <section ref={containerRef} className="relative py-20 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-amber-500/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-violet-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-100 leading-[0.9] mb-5">
            Parlons de votre<br />
            <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">projet.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Devis gratuit sous 24h. Pas de jargon, pas d&apos;engagement avant que vous soyez convaincu.
          </p>
        </motion.div>

        {/* Contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
        >
          {contactMethods.map((m, i) => (
            <motion.a
              key={i}
              href={m.link}
              whileHover={{ y: -4 }}
              target={m.link.startsWith('http') ? '_blank' : undefined}
              rel={m.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex flex-col items-center text-center p-6 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-zinc-800 group-hover:bg-amber-400/10 text-zinc-400 group-hover:text-amber-400 flex items-center justify-center mb-3 transition-all">
                {m.icon}
              </div>
              <p className="text-sm font-bold text-zinc-200 mb-1">{m.title}</p>
              <p className="text-sm text-zinc-400 mb-1">{m.value}</p>
              <p className="text-xs text-zinc-600">{m.sub}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Check className="w-8 h-8 text-zinc-950" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-100 mb-3">Message envoyé !</h3>
                <p className="text-zinc-400 mb-8">Je vous répondrai dans les 24 heures.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl font-semibold transition-colors text-sm"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-950/50 border border-red-800 rounded-xl flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-300">
                      {error === 'Failed to fetch'
                        ? 'Erreur de connexion. Contactez-nous directement par email.'
                        : error}
                    </p>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Nom et prénom *</label>
                    <input type="text" name="nom" required value={formData.nom} onChange={handleChange}
                      disabled={isSubmitting} className={inputCls} placeholder="Jean Dupont" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange}
                      disabled={isSubmitting} className={inputCls} placeholder="jean@exemple.fr" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Téléphone (optionnel)</label>
                  <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange}
                    disabled={isSubmitting} className={inputCls} placeholder="06 12 34 56 78" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Budget approximatif</label>
                    <select name="budget" value={formData.budget} onChange={handleChange}
                      disabled={isSubmitting} className={selectCls}>
                      <option value="">Sélectionnez...</option>
                      <option value="299">Moins de 300 €</option>
                      <option value="499">300 € – 500 €</option>
                      <option value="799">500 € – 800 €</option>
                      <option value="plus">Plus de 800 €</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Objectif de lancement</label>
                    <select name="timeline" value={formData.timeline} onChange={handleChange}
                      disabled={isSubmitting} className={selectCls}>
                      <option value="">Sélectionnez...</option>
                      <option value="urgent">Très urgent (– d'1 semaine)</option>
                      <option value="soon">Sous 2–3 semaines</option>
                      <option value="month">Dans le mois</option>
                      <option value="flexible">Pas de date précise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Votre message *</label>
                  <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
                    disabled={isSubmitting} className={`${inputCls} resize-none`}
                    placeholder="Parlez-moi de votre projet, de vos besoins, de vos idées..." />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-xl font-bold transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-400/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-zinc-900/30 border-t-zinc-900 rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>

                <p className="text-xs text-zinc-600 text-center">
                  * Champs obligatoires · Réponse garantie sous 24h
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-400">
            <Clock className="w-4 h-4 text-amber-400" />
            Disponible lun.–ven. · Réponse sous 24h
          </div>
        </motion.div>
      </div>
    </section>
  );
}
