import type { Metadata } from 'next';
import Realisations from '../components/Realisations';

export const metadata: Metadata = {
  title: 'Réalisations — Sites web & Applications créés à Nîmes | AtelierCode',
  description:
    'Découvrez les sites vitrine, e-commerce et applications web réalisés par AtelierCode pour des clients à Nîmes et en Occitanie.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/realisations',
  },
  openGraph: {
    title: 'Réalisations — Sites web & Applications créés à Nîmes | AtelierCode',
    description:
      'Découvrez les sites vitrine, e-commerce et applications web réalisés par AtelierCode pour des clients à Nîmes et en Occitanie.',
    url: 'https://www.ateliercode.fr/realisations',
  },
};

export default function RealisationsPage() {
  return <Realisations />;
}
