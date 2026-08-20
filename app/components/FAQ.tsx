'use client';

import { useState } from 'react';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import AnimateIn from './AnimateIn';

function renderTextWithLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    const [, label, href] = match;
    return (
      <Link
        key={i}
        href={href}
        className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-900 underline-offset-2 transition-colors"
      >
        {label}
      </Link>
    );
  });
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

 const faqs = [
  {
    question: 'Combien de temps pour avoir mon site ?',
    answer: 'Ça dépend du projet : 7 à 10 jours pour un site vitrine, 2 à 4 semaines pour une boutique e-commerce. Pour une application web, le délai est estimé ensemble selon la complexité du projet.',
  },
  {
    question: 'Puis-je modifier mon site moi-même après la livraison ?',
    answer: "Oui, c'est possible. On en discute ensemble selon vos besoins et je vous propose la solution la plus adaptée à votre situation — pas de système compliqué imposé par défaut.",
  },
  {
    question: 'Quel hébergement utilisez-vous ?',
    answer: "Vercel — optimal pour Next.js, rapide et sécurisé. L'hébergement est inclus la première année. Le nom de domaine (.fr/.com) est également inclus la première année (~12€), puis vous le renouvelez vous-même ou via moi.",
  },
  {
    question: 'Et si je ne sais pas quoi écrire sur mon site ?',
    answer: "Pas de souci, je m'en occupe. Je rédige les textes avec vous en fonction de votre activité, pour que votre site vous ressemble sans que vous ayez à écrire une seule ligne.",
  },
  {
    question: 'Le référencement (SEO) est-il inclus ?',
    answer: "Oui, dans tous les forfaits. Structure optimisée pour Google dès la conception, balises et sitemap, temps de chargement ultra-rapide, et référencement local (Google Maps) pour être visible auprès de vos clients près de chez vous.",
  },
  {
    question: 'Que se passe-t-il après la première année ?',
    answer: "Vous ne payez que le renouvellement du nom de domaine (10-15€/an). Si vous souhaitez des mises à jour, des évolutions ou un suivi régulier au-delà, on en discute ensemble selon vos besoins.",
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
    question: 'Proposez-vous une maquette avant de m’engager ?',
    answer: 'Oui. Avant tout engagement, je vous prépare une maquette gratuite de votre futur site, pour que vous voyiez concrètement à quoi il ressemblera. Aucun paiement n’est demandé à ce stade — vous décidez de continuer uniquement si la direction vous convient.',
  },
  {
    question: 'Mon site sera-t-il adapté aux mobiles ?',
    answer: 'Oui, tous les sites sont conçus mobile-first. Chaque page est testée sur smartphone, tablette et desktop avant la livraison.',
  },
  {
    question: 'Que dois-je vous fournir pour commencer ?',
    answer: "Les éléments de base suffisent : votre logo (ou on en discute), vos photos si vous en avez, une description de votre activité et vos coordonnées. Si vous n'avez pas encore de textes, je m'en charge — je vous guide pour le reste avec un questionnaire de démarrage.",
  },
  {
    question: 'Travaillez-vous avec des clients hors de Nîmes ?',
    answer: 'Oui, je travaille avec des clients partout en France. Tout se passe à distance — appel visio, échanges par mail ou WhatsApp. La localisation ne change rien à la qualité du suivi.',
  },
  {
    question: 'Puis-je suivre l\u2019avancement de mon site pendant sa création ?',
    answer: "Oui, vous suivez tout le processus de développement, pas seulement le résultat final. Je vous partage l'avancement à chaque étape, vous savez toujours où en est votre projet avant la livraison.",
  },
  {
    question: 'Faites-vous aussi du e-commerce ?',
    answer: "Oui, ça fait partie du forfait E-commerce (dès 990€) : boutique sur mesure, paiement sécurisé Stripe et gestion des commandes. Le tarif final dépend du volume de produits et des fonctionnalités souhaitées — voir le détail sur la page [Tarifs](/tarifs).",
  },
  {
    question: 'Proposez-vous aussi des applications web ?',
    answer: "Oui. Au-delà du site vitrine ou de la boutique, je développe des outils métier sur mesure : back-end, API, authentification, dashboard admin, intégrations avec vos outils existants (CRM, paiement...).",
  },
  {
    question: 'Combien coûte une application web ?',
    answer: "Le tarif dépend entièrement de la complexité du projet — c'est pourquoi c'est toujours sur devis. Je vous propose une estimation gratuite sous 24h après avoir échangé sur vos besoins. Voir aussi la page [Application web à Nîmes](/application-web-nimes).",
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
              className="bg-white rounded-md border border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 transition-all duration-200"
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
                  {renderTextWithLinks(faq.answer)}
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
                className="px-8 py-3.5 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150 btn-sweep"
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
