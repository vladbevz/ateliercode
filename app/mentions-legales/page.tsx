import type { Metadata } from 'next';
import MentionsLegalesContent from './MentionsLegalesContent';

export const metadata: Metadata = {
  title: 'Mentions légales — AtelierCode',
  description:
    'Mentions légales de AtelierCode, agence web à Nîmes. Informations sur l\'éditeur, l\'hébergement et la propriété intellectuelle du site.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/mentions-legales',
  },
  openGraph: {
    title: 'Mentions légales — AtelierCode',
    description: 'Mentions légales de AtelierCode, agence web à Nîmes.',
    url: 'https://www.ateliercode.fr/mentions-legales',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesContent />;
}
