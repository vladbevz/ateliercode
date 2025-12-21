// app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Votre site web professionnel,{' '}
          <span className="text-blue-600">enfin simple</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Création de sites vitrines clairs et efficaces pour artisans, 
          indépendants et petites entreprises en France
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="#contact" 
            className="btn-primary text-lg px-8 py-4"
          >
            Demander un devis gratuit
          </a>
          <a 
            href="#realisations" 
            className="btn-secondary text-lg px-8 py-4"
          >
            Voir nos réalisations
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">399€</div>
            <div className="text-gray-600">à partir de</div>
            <div className="text-sm text-gray-500 mt-2">Landing page simple</div>
          </div>
          
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">5-15 jours</div>
            <div className="text-gray-600">délai moyen</div>
            <div className="text-sm text-gray-500 mt-2">de la commande à la livraison</div>
          </div>
          
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">formation incluse</div>
            <div className="text-sm text-gray-500 mt-2">vous gérez votre site après</div>
          </div>
        </div>
      </div>
    </section>
  )
}