import type { Metadata } from 'next';
import AgenceWebNimesContent from '../components/AgenceWebNimes';

export const metadata: Metadata = {
  title: 'Agence Web Nîmes — Création de sites internet à Nîmes',
  description:
    'AtelierCode, votre agence web à Nîmes (Gard). Création de sites vitrines, e-commerce et applications web. Devis gratuit sous 24h. Intervention dans tout le Gard et Occitanie.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/agence-web-nimes',
  },
  openGraph: {
    title: 'Agence Web Nîmes — AtelierCode | Création de sites internet',
    description:
      'AtelierCode, votre agence web à Nîmes (Gard). Création de sites vitrines, e-commerce et applications web. Devis gratuit sous 24h.',
    url: 'https://www.ateliercode.fr/agence-web-nimes',
  },
};

export default function AgenceWebNimesPage() {
  return <AgenceWebNimesContent />;
}
