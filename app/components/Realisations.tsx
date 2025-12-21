// app/components/Realisations.tsx
import { ExternalLink } from 'lucide-react'

export default function Realisations() {
  const projects = [
    {
      title: "Boulangerie 'Le Pain Doré'",
      type: "Site vitrine",
      description: "Site 5 pages avec menu des produits, horaires et localisation interactive.",
      result: "+30% de contacts en ligne",
      image: "/images/boulangerie.jpg", // Додай зображення пізніше
      tags: ["Artisanat", "Local", "Mobile"]
    },
    {
      title: "Coach Sportif Personnel",
      type: "Landing page",
      description: "Page unique avec présentation des services, planning et formulaire de RDV.",
      result: "15 nouveaux clients/mois",
      image: "/images/coach.jpg",
      tags: ["Services", "RDV en ligne", "Optimisé"]
    },
    {
      title: "Plombier Indépendant",
      type: "Site + devis",
      description: "Site vitrine avec galerie d'interventions et formulaire de devis en ligne.",
      result: "40% de devis en ligne",
      image: "/images/plombier.jpg",
      tags: ["Artisan", "Devis", "Urgence"]
    }
  ]

  return (
    <section id="realisations" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Quelques projets récents
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Des sites qui font la différence pour les petites entreprises
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
              {/* Placeholder pour зображення */}
              <div className="h-48 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">📱</div>
                  <div className="text-gray-500 text-sm">Exemple de projet</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-sm text-blue-600 font-medium mb-1">{project.type}</div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-1">Résultat :</div>
                  <div className="text-green-600 font-semibold">{project.result}</div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-sm text-gray-500">
                  Durée : 10 jours • Prix : À partir de 899€ HT
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded-xl border shadow-sm">
            <div className="text-left">
              <h4 className="font-semibold mb-1">Votre projet ici ?</h4>
              <p className="text-gray-600 text-sm">
                Discutons de votre site idéal lors d'un appel gratuit de 30 minutes.
              </p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">
              Réserver un appel
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}