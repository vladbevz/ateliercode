// app/components/PourQui.tsx
import { Users, TrendingUp, RefreshCw } from 'lucide-react'

export default function PourQui() {
  const clients = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "L'artisan qui débute en ligne",
      description: "Vous avez un super métier, mais personne ne vous trouve sur Internet. Je crée votre site vitrine pour attirer vos premiers clients."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "L'indépendant qui veut grandir",
      description: "Vous avez des clients, mais vous voulez en avoir plus, sans perdre des heures en administration. Votre site devient votre meilleur commercial."
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-blue-600" />,
      title: "La petite entreprise qui veut moderniser son image",
      description: "Votre site a 10 ans et ne ressemble plus à votre entreprise. Je le refais simple, moderne et rapide."
    }
  ]

  return (
    <section id="pourqui" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Vous êtes...
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Je crée des sites pour ceux qui font vivre la France
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-6">
                {client.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {client.title}
              </h3>
              <p className="text-gray-600 text-center">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}