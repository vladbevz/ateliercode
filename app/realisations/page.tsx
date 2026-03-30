import type { Metadata } from 'next';
import Realisations from '../components/Realisations';

export const metadata: Metadata = {
  title: 'Réalisations — Portfolio de sites web créés par AtelierCode',
  description:
    'Découvrez nos dernières réalisations : sites vitrines, e-commerce et applications web créés par AtelierCode pour des professionnels à Nîmes et dans le Gard.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/realisations',
  },
  openGraph: {
    title: 'Réalisations — AtelierCode | Portfolio de sites web',
    description:
      'Découvrez nos dernières réalisations : sites vitrines, e-commerce et applications web créés pour des professionnels à Nîmes et dans le Gard.',
    url: 'https://www.ateliercode.fr/realisations',
  },
};

export default function RealisationsPage() {
  return <Realisations />;
}
