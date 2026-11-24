import type { Metadata } from 'next';

export const SITE_URL = 'https://www.ateliercode.fr';

export const CONTACT = {
  email: 'contact@ateliercode.fr',
  phone: '07 67 77 29 15',
  phoneHref: 'tel:+33767772915',
  whatsapp: 'https://wa.me/33767772915',
  street: '19 rue Ménard',
  postalCode: '30000',
  city: 'Nîmes',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=19+rue+M%C3%A9nard%2C+30000+N%C3%AEmes',
} as const;

export type ServiceLink = {
  slug: string;
  href: string;
  title: string;
  /** Une ligne, utilisée dans le menu déroulant. */
  short: string;
};

export const SERVICES: ServiceLink[] = [
  {
    slug: 'applications-metier',
    href: '/services/applications-metier',
    title: 'Applications & outils métier',
    short: 'Tableaux de bord, suivi d’équipes, portails clients',
  },
  {
    slug: 'automatisation-ia',
    href: '/services/automatisation-ia',
    title: 'Automatisation & IA',
    short: 'Workflows, agents IA, traitement de documents',
  },
  {
    slug: 'sites-web-ecommerce',
    href: '/services/sites-web-ecommerce',
    title: 'Sites web & e-commerce',
    short: 'Vitrine, catalogue, boutique en ligne',
  },
];

export const AUDIT_LINK: ServiceLink = {
  slug: 'audit',
  href: '/audit',
  title: 'Audit digital gratuit',
  short: 'Rapport sous 48 heures, sans engagement',
};

export const NAV = [
  { label: 'Accueil', href: '/' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

/**
 * Métadonnées d'une page : titre absolu (les titres fournis contiennent déjà
 * la marque), description, canonical, Open Graph et Twitter cohérents.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'AtelierCode',
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'AtelierCode',
  description:
    'Agence web à Nîmes — sites web, applications métier et automatisation sur mesure pour les entreprises du Gard et d’Occitanie.',
  url: SITE_URL,
  telephone: '+33767772915',
  email: CONTACT.email,
  image: `${SITE_URL}/images/og-cover.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.street,
    postalCode: CONTACT.postalCode,
    addressLocality: CONTACT.city,
    addressRegion: 'Gard',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 43.8402392, longitude: 4.3564017 },
  areaServed: ['Nîmes', 'Gard', 'Montpellier', 'Occitanie'],
  knowsAbout: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Automatisation', 'Agents IA'],
  makesOffer: SERVICES.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.title, url: `${SITE_URL}${s.href}` },
  })),
  priceRange: '€€',
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    areaServed: ['Nîmes', 'Gard', 'Occitanie'],
    provider: { '@id': `${SITE_URL}/#business` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
