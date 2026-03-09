// app/components/FAQ.tsx
'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, Search, Sparkles, MessageCircle, FileText, CreditCard, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function FAQ() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'process', name: 'Processus', icon: <FileText className="w-4 h-4" /> },
    { id: 'payment', name: 'Paiement', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'support', name: 'Support', icon: <MessageCircle className="w-4 h-4" /> }
  ];

  const faqs = [
    {
      question: "Combien de temps pour avoir mon site ?",
      answer: "5 à 21 jours selon le projet. Landing page : 2-3 jours. Site vitrine : 5-15 jours. Site avancé : 2-3 semaines.",
      category: 'process',
      icon: "⏱️"
    },
    {
      question: "Puis-je modifier mon site moi-même après ?",
      answer: "Oui, deux options principales : 1) Panel admin complet avec Sanity.io (+150€ pour la configuration initiale) qui vous permet de modifier tout le contenu facilement, 2) Forfait maintenance à 50€/mois pour des modifications illimitées effectuées par mes soins.",
      category: 'support',
      icon: "✏️"
    },
    {
      question: "Quel hébergement utilisez-vous ?",
      answer: "Vercel - optimal pour Next.js, rapide et sécurisé. Le nom de domaine (.fr/.com) est inclus la première année (~12€). Après un an, vous renouvelez vous-même (~12€/an) ou via moi.",
      category: 'process',
      icon: "🌐"
    },
    {
      question: "Et si je ne sais pas quoi écrire sur mon site ?",
      answer: "Je vous fournis un guide de rédaction et des exemples pour chaque page. Si nécessaire, je peux rédiger les textes avec vous.",
      category: 'support',
      icon: "📝"
    },
    {
      question: "Proposez-vous le référencement (SEO) ?",
      answer: "Oui, chaque forfait inclut du SEO : Landing Page (SEO de base), Site Vitrine (SEO optimisé), Site Avancé (SEO premium).",
      category: 'process',
      icon: "🔍"
    },
    {
      question: "Que se passe-t-il après la première année ?",
      answer: "Après la première année, vous payez : nom de domaine (10-15€/an). Je propose également un forfait maintenance à 50€/mois pour les mises à jour, sécurité et petites modifications.",
      category: 'payment',
      icon: "📅"
    },
    {
      question: "Travaillez-vous avec des templates ?",
      answer: "J'utilise des structures de base mais chaque site est personnalisé selon vos besoins. Je ne vends pas de sites clé-en-main identiques. Votre site sera unique et adapté à votre activité.",
      category: 'process',
      icon: "🎨"
    },
    {
      question: "Quelles sont les méthodes de paiement ?",
      answer: "Paiement 50% à la commande, 50% à la livraison. Virement bancaire, PayPal ou carte bancaire (via Stripe). Pas de TVA (micro-entreprise, article 293 B du CGI). Facture détaillée fournie.",
      category: 'payment',
      icon: "💳"
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Des réponses à toutes vos <br />
            <span className="text-gray-400">questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir avant de vous lancer
          </p>
        </motion.div>

        {/* Barre de recherche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none shadow-lg"
            />
          </div>
        </motion.div>

        {/* Catégories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-start gap-4"
                  >
                    <div className="text-2xl">{faq.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 pr-8">
                        {faq.question}
                      </h3>
                      
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-600 mt-4 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </button>
                </motion.div>
              ))}

              {filteredFaqs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-500">Aucune question ne correspond à votre recherche.</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-gray-600 mb-8">
              Chaque projet est unique. Discutons de vos questions spécifiques en direct.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
              >
                Poser une question
              </Link>
              <a
                href="tel:+33767772915"
                className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 transition-colors"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}