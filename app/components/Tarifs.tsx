// app/components/Tarifs.tsx
import { Check } from 'lucide-react'

export default function Tarifs() {
  const plans = [
    {
      name: "LANDING PAGE",
      price: "399€",
      description: "Idéal pour: Test, offre unique, événement",
      features: [
        "1 page responsive (mobile parfait)",
        "Formulaire de contact",
        "Intégration Google Maps",
        "1 correction de design",
        "Mise en ligne + hébergement 1 an",
        "Formation de 30 min (vidéo)"
      ],
      cta: "Choisir cette offre",
      popular: false
    },
    {
      name: "SITE VITRINE",
      price: "899€",
      description: "Idéal pour: Artisans, indépendants, petites boutiques",
      features: [
        "3 à 5 pages sur mesure",
        "Galerie photo/vidéo intégrée",
        "SEO de base optimisé",
        "2 corrections de design",
        "Formation de 1h (à distance)",
        "1 mois de support gratuit"
      ],
      cta: "Choisir cette offre",
      popular: true
    },
    {
      name: "REFONTE COMPLÈTE",
      price: "1 499€",
      description: "Idéal pour: Entreprises avec site existant",
      features: [
        "Analyse de l'ancien site",
        "Design moderne et épuré",
        "Migration des contenus",
        "Optimisation performance (90+ Google)",
        "3 corrections de design",
        "3 mois de support inclus"
      ],
      cta: "Choisir cette offre",
      popular: false
    }
  ]

  return (
    <section id="tarifs" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Des solutions adaptées, prix fixes
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Pas de surprises, pas de frais cachés. Tout est inclus.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl border p-8 relative ${
                plan.popular 
                  ? 'border-blue-600 shadow-lg transform md:-translate-y-2' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Le plus choisi
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                <div className="text-gray-500 text-sm">HT</div>
                <p className="text-gray-600 mt-2 text-sm">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block w-full text-center py-3 rounded-lg font-medium ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {plan.cta}
              </a>
              
              <div className="text-center mt-4 text-sm text-gray-500">
                Paiement : 50% à la commande, 50% à la livraison
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-600">
          <p className="mb-2">Tous les prix sont hors TVA (TVA non applicable, article 293 B du CGI)</p>
          <p>Besoin d'une solution personnalisée ? <a href="#contact" className="text-blue-600 font-medium">Contactez-moi</a></p>
        </div>
      </div>
    </section>
  )
}