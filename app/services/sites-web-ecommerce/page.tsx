import ServicePage from '../../components/site/ServicePage';
import { pageMetadata } from '../../lib/site';

const description =
  'Agence web à Nîmes. Création de sites vitrines, catalogues et boutiques en ligne en Next.js, optimisés pour le référencement local. Artisans, commerçants, PME du Gard.';

export const metadata = pageMetadata({
  title: 'Création de sites web à Nîmes — vitrine, e-commerce, sur mesure',
  description,
  path: '/services/sites-web-ecommerce',
});

export default function SitesWebEcommercePage() {
  return (
    <ServicePage
      slug="sites-web-ecommerce"
      h1="Création de sites web à Nîmes et dans le Gard"
      schemaDescription={description}
      intro={
        <p>
          Un site web conçu pour convertir les visiteurs en clients. On développe en Next.js, ce qui garantit des performances élevées, un bon référencement naturel et une maintenance simplifiée.
        </p>
      }
      listTitle="Ce qu’on propose"
      items={[
        'Sites vitrines pour artisans et prestataires de services',
        'Catalogues produits et sites institutionnels',
        'Boutiques e-commerce',
        'Sites multilingues',
        'Refontes de sites existants',
        'Optimisation SEO et performances',
      ]}
      approachTitle="Notre approche"
      approach={
        <p>
          Chaque site est développé sur mesure. Pas de template WordPress ou de constructeur no-code. Le code est propre, le site est rapide, et vous n’êtes pas dépendant d’un abonnement ou d’un plugin tiers pour faire fonctionner vos pages.
        </p>
      }
      extra={
        <dl className="mt-12 grid overflow-hidden rounded-lg border border-gray-200 bg-white sm:grid-cols-2 divide-y divide-gray-200 sm:divide-y-0 sm:divide-x">
          <div className="p-6">
            <dt className="text-[15px] text-gray-600">Site vitrine</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-gray-900">dès 799 €</dd>
          </div>
          <div className="p-6">
            <dt className="text-[15px] text-gray-600">Boutique e-commerce</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-gray-900">dès 1 290 €</dd>
          </div>
        </dl>
      }
      cta={{ label: 'Demander un devis', href: '/contact' }}
      ctaBannerTitle="Un site à créer ou à refaire ?"
    />
  );
}
