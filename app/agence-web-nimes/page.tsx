import type { Metadata } from 'next';
import AgenceWebNimesContent from '../components/AgenceWebNimes';

export const metadata: Metadata = {
  title: 'Agence web Nîmes — Sites & Applications',
  description:
    'AtelierCode, agence web à Nîmes spécialisée React & Next.js. Sites vitrine, boutiques e-commerce et applications web sur mesure pour professionnels du Gard.',
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
      'AtelierCode, agence web à Nîmes spécialisée React & Next.js. Sites vitrine, boutiques e-commerce et applications web sur mesure pour professionnels du Gard.',
    url: 'https://www.ateliercode.fr/agence-web-nimes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence web Nîmes — Sites & Applications | AtelierCode',
    description:
      'AtelierCode, agence web à Nîmes spécialisée React & Next.js. Sites vitrine, boutiques e-commerce et applications web sur mesure pour professionnels du Gard.',
  },
};

export default function AgenceWebNimesPage() {
  return <AgenceWebNimesContent />;
}
