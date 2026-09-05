import type { Metadata } from 'next';
import AgenceWebNimesContent from '../components/AgenceWebNimes';

export const metadata: Metadata = {
  title: 'Agence web Nîmes — Sites React/Next.js sur mesure',
  description:
    'Développeur web à Nîmes spécialisé React & Next.js. Sites vitrine, e-commerce et applications rapides, visibles sur Google. Devis gratuit sous 24h.',
  keywords: [
    'création site web Nîmes',
    'développeur web Nîmes',
    'agence web Nîmes',
    'agence React Nîmes',
    'site vitrine Nîmes',
    'e-commerce Nîmes',
    'application web Nîmes',
    'refonte site web Nîmes',
    'développeur React Next.js Nîmes',
  ],
  alternates: {
    canonical: 'https://www.ateliercode.fr/agence-web-nimes',
  },
  openGraph: {
    title: 'Agence web Nîmes — Sites React/Next.js sur mesure | AtelierCode',
    description:
      'Développeur web à Nîmes spécialisé React & Next.js. Sites vitrine, e-commerce et applications rapides, visibles sur Google. Devis gratuit sous 24h.',
    url: 'https://www.ateliercode.fr/agence-web-nimes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence web Nîmes — Sites React/Next.js sur mesure | AtelierCode',
    description:
      'Développeur web à Nîmes spécialisé React & Next.js. Sites vitrine, e-commerce et applications rapides, visibles sur Google. Devis gratuit sous 24h.',
  },
};

export default function AgenceWebNimesPage() {
  return <AgenceWebNimesContent />;
}
