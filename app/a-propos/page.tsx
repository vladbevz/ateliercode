import type { Metadata } from 'next';
import Apropos from '../components/Apropos';

export const metadata: Metadata = {
  title: 'À propos — AtelierCode | Agence web à Nîmes',
  description:
    'Découvrez AtelierCode, votre agence web à Nîmes. Une approche simple, directe et sans complication pour créer votre site internet sur mesure.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/a-propos',
  },
  openGraph: {
    title: 'À propos — AtelierCode | Agence web à Nîmes',
    description:
      'Découvrez AtelierCode, votre agence web à Nîmes. Une approche simple, directe et sans complication pour créer votre site internet sur mesure.',
    url: 'https://www.ateliercode.fr/a-propos',
  },
};

export default function AProposPage() {
  return <Apropos />;
}
