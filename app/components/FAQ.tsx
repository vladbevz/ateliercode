// app/components/FAQ.tsx
'use client'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Combien de temps pour avoir mon site ?",
      answer: "Entre 5 et 15 jours ouvrés selon la complexité du projet. Une landing page simple peut être livrée en 5 jours, un site vitrine complet en 10-15 jours."
    },
    {
      question: "Puis-je modifier mon site moi-même après ?",
      answer: "Absolument ! Je vous forme gratuitement à la gestion de votre site (1h de formation incluse). Vous pourrez modifier le texte, les images, ajouter des pages simples. Pour des modifications techniques plus complexes, je propose un service de maintenance mensuelle à partir de 50€/mois."
    },
    {
      question: "Quel hébergement utilisez-vous ?",
      answer: "J'utilise Vercel, une plateforme professionnelle avec des serveurs en Europe. La première année d'hébergement est incluse dans tous les packages. Après la première année, l'hébergement coûte environ 20€/an. Vous êtes libre de changer d'hébergeur si vous le souhaitez."
    },
    {
      question: "Et si je ne sais pas quoi écrire sur les pages ?",
      answer: "Pas de panique ! Je vous guide dans la rédaction avec un template et des questions clés. Si besoin, je propose un service de rédaction en option (+200€) où je rédige les textes basiques pour vous."
    },
    {
      question: "Proposez-vous le référencement (SEO) ?",
      answer: "Oui, l'optimisation SEO de base est incluse dans tous les packages : optimisation des titres et descriptions, vitesse de chargement, structure propre, mobile-friendly. Pour un référencement avancé (recherche de mots-clés, contenu optimisé, backlinks), je propose un package SEO en option à partir de 500€."
    },
    {
      question: "Que se passe-t-il après la première année ?",
      answer: "Vous possédez votre site à 100%. Après la première année, vous payez seulement : 1) Le renouvellement du nom de domaine (environ 12€/an), 2) L'hébergement (environ 20€/an), 3) Optionnellement, un abonnement de maintenance (à partir de 50€/mois). Aucun frais caché."
    },
    {
      question: "Travaillez-vous avec des templates pré-faits ?",
      answer: "Non, tous les sites sont créés sur mesure en fonction de vos besoins. J'utilise des composants modernes mais chaque design est unique et adapté à votre activité. Pas de sites 'copier-coller'."
    },
    {
      question: "Quelles sont les méthodes de paiement ?",
      answer: "Je travaille avec un acompte de 50% pour commencer le projet, et le solde de 50% à la livraison. Paiements acceptés : virement bancaire, PayPal, ou carte bleue via une plateforme sécurisée. Tous les prix sont hors TVA (je suis en micro-entreprise, TVA non applicable)."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Questions fréquentes
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Tout ce que vous devez savoir avant de commencer
        </p>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-200"
            >
              <button
                className="w-full py-6 text-left flex justify-between items-center hover:text-blue-600 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Vous avez une autre question ?
          </p>
          <a href="#contact" className="btn-secondary">
            Me poser une question
          </a>
        </div>
      </div>
    </section>
  )
}