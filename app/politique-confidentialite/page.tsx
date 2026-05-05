import type { Metadata } from 'next';
import PolitiqueConfidentialiteContent from './PolitiqueConfidentialiteContent';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — AtelierCode',
  description:
    'Politique de confidentialité de AtelierCode. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/politique-confidentialite',
  },
  openGraph: {
    title: 'Politique de confidentialité — AtelierCode',
    description: 'Politique de confidentialité de AtelierCode, agence web à Nîmes. Protection de vos données conformément au RGPD.',
    url: 'https://www.ateliercode.fr/politique-confidentialite',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolitiqueConfidentialitePage() {
  return <PolitiqueConfidentialiteContent />;
}
