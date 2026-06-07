import type { Metadata } from 'next';
import AgenceWebNimesContent from '../components/AgenceWebNimes';

export const metadata: Metadata = {
  title: 'Agence web Nîmes — Sites, E-commerce & Applications React | AtelierCode',
  description:
    'AtelierCode, développeur web à Nîmes spécialisé React & Next.js. Sites vitrine, boutiques e-commerce et applications web sur mesure pour professionnels du Gard.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/agence-web-nimes',
  },
  openGraph: {
    title: 'Agence web Nîmes — Sites, E-commerce & Applications React | AtelierCode',
    description:
      'AtelierCode, développeur web à Nîmes spécialisé React & Next.js. Sites vitrine, boutiques e-commerce et applications web sur mesure pour professionnels du Gard.',
    url: 'https://www.ateliercode.fr/agence-web-nimes',
  },
};

export default function AgenceWebNimesPage() {
  return <AgenceWebNimesContent />;
}
