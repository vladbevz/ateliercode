// app/components/FAQ.tsx
'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, Search, MessageCircle, FileText, CreditCard, HelpCircle, Clock, PenLine, Globe, Calendar, Paintbrush, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

const categories = [
  { id: 'all', name: 'Toutes', icon: <HelpCircle className="w-4 h-4" /> },
  { id: 'process', name: 'Processus', icon: <FileText className="w-4 h-4" /> },
  { id: 'payment', name: 'Paiement', icon: <CreditCard className="w-4 h-4" /> },
  { id: 'support', name: 'Support', icon: <MessageCircle className="w-4 h-4" /> },
];

const faqs: { question: string; answer: string; category: string; icon: ReactNode }[] = [
  { question: 'Combien de temps pour avoir mon site ?', answer: '5 à 21 jours selon le projet. Landing page : 2–3 jours. Site vitrine : 5–15 jours. Site avancé : 2–3 semaines.', category: 'process', icon: <Clock className="w-5 h-5" /> },
  { question: 'Puis-je modifier mon site moi-même après ?', answer: 'Oui, deux options : 1) Panel admin Sanity.io (+150€) pour modifier le contenu vous-même, 2) Forfait maintenance à 50€/mois pour des modifications illimitées effectuées par mes soins.', category: 'support', icon: <PenLine className="w-5 h-5" /> },
  { question: 'Quel hébergement utilisez-vous ?', answer: 'Vercel — optimal pour Next.js, rapide et sécurisé. Le nom de domaine (.fr/.com) est inclus la première année (~12€). Après un an, vous renouvelez vous-même (~12€/an).', category: 'process', icon: <Globe className="w-5 h-5" /> },
  { question: 'Et si je ne sais pas quoi écrire sur mon site ?', answer: 'Je vous fournis un guide de rédaction et des exemples pour chaque page. Si nécessaire, je peux rédiger les textes avec vous.', category: 'support', icon: <FileText className="w-5 h-5" /> },
  { question: 'Proposez-vous le référencement (SEO) ?', answer: 'Oui, chaque forfait inclut du SEO : Landing Page (SEO de base), Site Vitrine (SEO optimisé), Site Avancé (SEO premium).', category: 'process', icon: <Search className="w-5 h-5" /> },
  { question: "Que se passe-t-il après la première année ?", answer: "Après la première année, vous payez le nom de domaine (10–15€/an). Forfait maintenance à 50€/mois disponible pour les mises à jour, sécurité et petites modifications.", category: 'payment', icon: <Calendar className="w-5 h-5" /> },
  { question: 'Travaillez-vous avec des templates ?', answer: "J'utilise des structures de base mais chaque site est personnalisé selon vos besoins. Votre site sera unique et adapté à votre activité — pas un template clé-en-main.", category: 'process', icon: <Paintbrush className="w-5 h-5" /> },
  { question: 'Quelles sont les méthodes de paiement ?', answer: 'Paiement 50% à la commande, 50% à la livraison. Virement bancaire, PayPal ou carte bancaire (via Stripe). Pas de TVA (micro-entreprise, art. 293 B du CGI). Facture fournie.', category: 'payment', icon: <CreditCard className="w-5 h-5" /> },
];

export default function FAQ() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section ref={containerRef} className="relative py-20 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-violet-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">FAQ</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-100 leading-[0.9] mb-5">
            Des réponses claires,<br />
            <span className="text-zinc-500">sans jargon.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Tout ce que vous devez savoir avant de vous lancer.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="max-w-xl mx-auto mb-7"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:border-amber-400/50 focus:outline-none transition-colors"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-zinc-950'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-3"
            >
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-start gap-4"
                  >
                    <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center transition-colors ${
                      openIndex === index ? 'bg-amber-400/10 text-amber-400' : 'bg-zinc-800 text-zinc-500'
                    }`}>
                      {faq.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-base font-semibold pr-6 ${openIndex === index ? 'text-zinc-100' : 'text-zinc-200'}`}>
                        {faq.question}
                      </h3>
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-zinc-400 text-sm leading-relaxed mt-3 overflow-hidden"
                          >
                            {faq.answer}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 mt-0.5"
                    >
                      <ChevronDown className={`w-5 h-5 transition-colors ${openIndex === index ? 'text-amber-400' : 'text-zinc-600'}`} />
                    </motion.div>
                  </button>
                </motion.div>
              ))}

              {filteredFaqs.length === 0 && (
                <p className="text-center py-12 text-zinc-500">Aucune question ne correspond à votre recherche.</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-zinc-900 border border-zinc-800 rounded-2xl max-w-sm mx-auto">
            <p className="font-bold text-zinc-100">Vous ne trouvez pas votre réponse ?</p>
            <p className="text-sm text-zinc-400">Posez votre question directement — réponse sous 24h.</p>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-xl font-bold text-sm transition-all"
            >
              Poser une question
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
