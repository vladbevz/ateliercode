// app/mentions-legales/page.tsx
export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-narrow bg-white p-8 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Éditeur du site</h2>
            <p className="text-gray-600">
              <strong>AtelierCode</strong><br />
              Micro-entreprise<br />
              SIRET : [À ajouter après obtention]<br />
              Numéro de TVA intracommunautaire : Non applicable, article 293 B du CGI
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Hébergement</h2>
            <p className="text-gray-600">
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              United States<br />
              <a href="https://vercel.com" className="text-blue-600 hover:underline">
                https://vercel.com
              </a>
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-600">
              L'ensemble de ce site relève de la législation française et internationale 
              sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
              reproduction sont réservés, y compris pour les documents téléchargeables 
              et les représentations iconographiques et photographiques.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">4. Données personnelles</h2>
            <p className="text-gray-600">
              Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée 
              et au Règlement Général sur la Protection des Données (RGPD), vous disposez 
              d'un droit d'accès, de rectification, de suppression et d'opposition aux 
              données personnelles vous concernant.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">5. Contact</h2>
            <p className="text-gray-600">
              Pour toute question relative aux mentions légales, vous pouvez nous 
              contacter à l'adresse suivante : contact@ateliercode.fr
            </p>
          </section>
          
          <div className="text-sm text-gray-500 border-t pt-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </div>
        </div>
      </div>
    </div>
  )
}