// app/components/PourquoiNous.tsx
import { Shield, Euro, Users, Zap, MessageSquare } from 'lucide-react'

export default function PourquoiNous() {
  const advantages = [
    {
      icon: <Euro className="w-10 h-10" />,
      title: "Prix fixes",
      description: "Pas de dépassement, pas de frais cachés. Le prix annoncé est le prix final."
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Communication claire",
      description: "Suivi régulier, explications simples en français, réponses rapides."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Formation incluse",
      description: "Vous êtes autonome après la livraison. Je vous montre comment tout gérer."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Spécialiste petites entreprises",
      description: "Je comprends vos contraintes (temps, budget) et vos objectifs concrets."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Sites rapides",
      description: "Technologies modernes pour des sites qui chargent vite et convertissent mieux."
    }
  ]

  return (
    <section id="pourquoinous" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Pourquoi choisir AtelierCode ?
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Votre tranquillité d'esprit, ma priorité
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carte supplémentaire pour compléter la grille */}
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 md:col-span-2 lg:col-span-3">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Basé en France 🇫🇷</h3>
              <p className="text-gray-700">
                Je comprends le marché français, les besoins des artisans locaux, 
                et je parle votre langue. Support en français, facturation en euros, 
                et hébergement sur des serveurs en France.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 text-gray-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">24h</div>
              <div className="text-sm">Délai moyen de réponse</div>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">100%</div>
              <div className="text-sm">Satisfaction client</div>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">FR</div>
              <div className="text-sm">Support en français</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}