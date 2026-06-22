'use client';

import { useState } from 'react';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import AnimateIn from './AnimateIn';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'Combien de temps pour avoir mon site ?',
      answer: '5 à 21 jours selon le projet. Landing page : 2-3 jours. Site vitrine : 5-15 jours. Site avancé : 2-3 semaines.',
    },
    {
      question: 'Puis-je modifier mon site moi-même après ?',
      answer: 'Oui, deux options principales : 1) Panel admin complet avec Sanity.io (+150€ pour la configuration initiale) qui vous permet de modifier tout le contenu facilement, 2) Forfait maintenance à 50€/mois pour des modifications illimitées effectuées par mes soins.',
    },
    {
      question: 'Quel hébergement utilisez-vous ?',
      answer: 'Vercel - optimal pour Next.js, rapide et sécurisé. Le nom de domaine (.fr/.com) est inclus la première année (~12€). Après un an, vous renouvelez vous-même (~12€/an) ou via moi.',
    },
    {
      question: 'Et si je ne sais pas quoi écrire sur mon site ?',
      answer: 'Je vous fournis un guide de rédaction et des exemples pour chaque page. Si nécessaire, je peux rédiger les textes avec vous.',
    },
    {
      question: 'Proposez-vous le référencement (SEO) ?',
      answer: 'Oui, chaque forfait inclut du SEO : Landing Page (SEO de base), Site Vitrine (SEO optimisé), Site Avancé (SEO premium).',
    },
    {
      question: 'Que se passe-t-il après la première année ?',
      answer: 'Après la première année, vous payez : nom de domaine (10-15€/an). Je propose également un forfait maintenance à 50€/mois pour les mises à jour, sécurité et petites modifications.',
    },
    {
      question: 'Travaillez-vous avec des templates ?',
      answer: "J'utilise des structures de base mais chaque site est personnalisé selon vos besoins. Je ne vends pas de sites clé-en-main identiques. Votre site sera unique et adapté à votre activité.",
    },
    {
      question: 'Quelles sont les méthodes de paiement ?',
      answer: 'Paiement 50% à la commande, 50% à la livraison. Virement bancaire, PayPal ou carte bancaire (via Stripe). Pas de TVA (micro-entreprise, article 293 B du CGI). Facture détaillée fournie.',
    },
    {
      question: 'Mon site sera-t-il adapté aux mobiles ?',
      answer: 'Oui, tous les sites sont conçus mobile-first. Chaque page est testée sur smartphone, tablette et desktop avant la livraison.',
    },
    {
      question: 'Que dois-je vous fournir pour commencer ?',
      answer: 'Les éléments de base suffisent : votre logo (ou on en discute), vos photos si vous en avez, une description de votre activité et vos coordonnées. Je vous guide pour le reste avec un questionnaire de démarrage.',
    },
    {
      question: 'Travaillez-vous avec des clients hors de Nîmes ?',
      answer: 'Oui, je travaille avec des clients partout en France. Tout se passe à distance — appel visio, échanges par mail ou WhatsApp. La localisation ne change rien à la qualité du suivi.',
    },
    {
      question: 'Puis-je voir le site avant de payer le solde ?',
      answer: "Oui. Avant la livraison finale, vous accédez à une version de prévisualisation en ligne. Le solde n'est dû qu'une fois que vous êtes satisfait du résultat.",
    },
    {
      question: 'Faites-vous aussi du e-commerce ?',
      answer: "Oui, je développe des boutiques en ligne avec panier, paiement sécurisé (Stripe) et gestion des commandes. C'est inclus dans le forfait Site Avancé ou sur devis selon le volume de produits.",
    },
    {
      question: 'Que se passe-t-il si le résultat ne me convient pas ?',
      answer: "Deux rondes de corrections sont incluses dans chaque forfait. Si après ça le résultat ne vous convient toujours pas, on en discute directement — mon objectif est que vous soyez satisfait à la livraison.",
    },
  ];

  const filteredFaqs = faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-white pt-16 pb-24">
      <div className="container mx-auto px-4">

        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 animate-fade-up">
            Des réponses à toutes vos questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Tout ce que vous devez savoir avant de vous lancer
          </p>
        </div>

        {/* Barre de recherche */}
        <AnimateIn className="max-w-2xl mx-auto mb-10" delay={150}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-md border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
            />
          </div>
        </AnimateIn>

        {/* FAQ List */}
        <AnimateIn className="max-w-4xl mx-auto space-y-4" delay={200}>
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-md border border-gray-200 hover:border-gray-300 transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-start gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 mt-0.5 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed px-6 pb-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucune question ne correspond à votre recherche.</p>
            </div>
          )}
        </AnimateIn>

        {/* Still have questions */}
        <AnimateIn className="mt-20" delay={100}>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-gray-600 mb-8">
              Chaque projet est unique. Discutons de vos questions spécifiques en direct.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150"
              >
                Poser une question
              </Link>
              <a
                href="tel:+33767772915"
                className="px-8 py-3.5 border border-gray-200 text-gray-700 rounded-md font-semibold hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] transition-all duration-150"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
