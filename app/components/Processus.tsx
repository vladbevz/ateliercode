// app/components/Processus.tsx
import { PhoneCall, FileText, Code, GraduationCap } from 'lucide-react'

export default function Processus() {
  const steps = [
    {
      icon: <PhoneCall className="w-8 h-8" />,
      number: "01",
      title: "Appel découverte",
      description: "30 minutes gratuites pour discuter de vos besoins, objectifs et budget. Si ça match, je vous envoie un devis détaillé sous 24h.",
      duration: "30 min"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      number: "02",
      title: "Validation & contrat",
      description: "Vous validez le devis, signez le contrat électronique, et versez l'acompte de 50%. Je commence immédiatement le travail.",
      duration: "1-2 jours"
    },
    {
      icon: <Code className="w-8 h-8" />,
      number: "03",
      title: "Développement",
      description: "Je crée votre site, vous montre régulièrement l'avancement, et effectue les tests nécessaires sur tous les appareils.",
      duration: "5-10 jours"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: "04",
      title: "Formation & livraison",
      description: "Je vous forme (en vidéo ou appel) pour gérer votre site, et vous livre tous les accès. Le solde de 50% est dû.",
      duration: "1-2 jours"
    }
  ]

  return (
    <section id="processus" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Comment ça marche ?
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          4 étapes simples, de l'idée à la mise en ligne
        </p>
        
        <div className="relative">
          {/* Ligne de connexion pour desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-300"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 text-center shadow-sm border h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <div className="text-2xl font-bold">{step.number}</div>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary text-lg px-8 py-3">
            Commencer mon projet
          </a>
          <p className="text-gray-500 mt-4">
            Temps total moyen : 2-3 semaines de la première discussion à la livraison
          </p>
        </div>
      </div>
    </section>
  )
}