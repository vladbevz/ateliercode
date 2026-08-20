import type { Metadata } from 'next';
import AgenceWebNimesContent from '../components/AgenceWebNimes';

export const metadata: Metadata = {
  title: 'Agence web Nîmes — Sites & Applications',
  description:
    'AtelierCode, agence web à Nîmes. Sites vitrine, boutiques e-commerce et applications sur mesure pour professionnels du Gard. Devis gratuit, maquette offerte.',
  keywords: [
    'création site web Nîmes',
    'développeur web Nîmes',
    'agence web Nîmes',
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
    title: 'Agence web Nîmes — Sites & Applications | AtelierCode',
    description:
      'AtelierCode, agence web à Nîmes. Sites vitrine, boutiques e-commerce et applications sur mesure pour professionnels du Gard. Devis gratuit, maquette offerte.',
    url: 'https://www.ateliercode.fr/agence-web-nimes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence web Nîmes — Sites & Applications | AtelierCode',
    description:
      'AtelierCode, agence web à Nîmes. Sites vitrine, boutiques e-commerce et applications sur mesure pour professionnels du Gard. Devis gratuit, maquette offerte.',
  },
};

export default function AgenceWebNimesPage() {
  return <AgenceWebNimesContent />;
}
