import type { Metadata } from 'next';
import FAQ from '../components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ — Questions fréquentes sur la création de sites web',
  description:
    'Toutes les réponses à vos questions sur la création de sites web avec AtelierCode : délais de livraison, tarifs, processus, maintenance et support.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/faq',
  },
  openGraph: {
    title: 'FAQ — AtelierCode | Questions fréquentes',
    description:
      'Toutes les réponses à vos questions sur la création de sites web avec AtelierCode : délais, tarifs, processus et support.',
    url: 'https://www.ateliercode.fr/faq',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien de temps pour avoir mon site ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '5 à 21 jours selon le projet. Landing page : 2-3 jours. Site vitrine : 5-15 jours. Site avancé : 2-3 semaines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je modifier mon site moi-même après ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, deux options principales : 1) Panel admin complet avec Sanity.io (+150€ pour la configuration initiale) qui vous permet de modifier tout le contenu facilement, 2) Forfait maintenance à 50€/mois pour des modifications illimitées effectuées par nos soins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel hébergement utilisez-vous ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vercel - optimal pour Next.js, rapide et sécurisé. Le nom de domaine (.fr/.com) est inclus la première année (~12€). Après un an, vous renouvelez vous-même (~12€/an) ou via nous.',
      },
    },
    {
      '@type': 'Question',
      name: 'Et si je ne sais pas quoi écrire sur mon site ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous vous fournissons un guide de rédaction et des exemples pour chaque page. Si nécessaire, nous pouvons rédiger les textes avec vous.',
      },
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous le référencement (SEO) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, chaque forfait inclut du SEO : Landing Page (SEO de base), Site Vitrine (SEO optimisé), Site Avancé (SEO premium).',
      },
    },
    {
      '@type': 'Question',
      name: 'Que se passe-t-il après la première année ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Après la première année, vous payez : nom de domaine (10-15€/an). Nous proposons également un forfait maintenance à 50€/mois pour les mises à jour, sécurité et petites modifications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Travaillez-vous avec des templates ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous utilisons des structures de base mais chaque site est personnalisé selon vos besoins. Nous ne vendons pas de sites clé-en-main identiques. Votre site sera unique et adapté à votre activité.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les méthodes de paiement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paiement 50% à la commande, 50% à la livraison. Virement bancaire, PayPal ou carte bancaire (via Stripe). Pas de TVA (micro-entreprise, article 293 B du CGI). Facture détaillée fournie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Travaillez-vous avec WordPress ou Elementor ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, je ne développe pas sous WordPress ni Elementor. Je construis chaque site en React/Next.js — un code sur-mesure sans thème ni plugins, ce qui donne un site nettement plus rapide et sans les frais de maintenance récurrents d'un CMS classique.",
      },
    },
    {
      '@type': 'Question',
      name: 'Utilisez-vous des outils no-code (Webflow, Bubble) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, tout est développé en code sur-mesure (React/Next.js), pas avec un outil no-code. C'est plus rapide, sans limites de personnalisation et sans dépendance à une plateforme tierce — un vrai avantage pour le référencement Google.",
      },
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous des boutiques Magento ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, je ne travaille pas avec Magento — trop lourd et coûteux à maintenir pour la plupart des TPE/PME. Pour l'e-commerce, je construis des boutiques sur-mesure en Next.js avec paiement Stripe : plus rapides et plus simples à gérer.",
      },
    },
    {
      '@type': 'Question',
      name: 'Développez-vous des applications mobiles natives (iOS/Android) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pas d'application native publiée sur l'App Store ou le Play Store. Je développe des applications web accessibles depuis un navigateur, sur mobile comme sur ordinateur — souvent suffisant, et plus rapide et moins cher à faire évoluer.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQ />
    </>
  );
}
