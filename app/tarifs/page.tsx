import type { Metadata } from 'next';
import Tarifs from '@/app/components/Tarifs';

export const metadata: Metadata = {
  title: 'Tarifs — Prix fixes et transparents pour votre site web',
  description:
    'Nos offres et tarifs pour la création de sites web à Nîmes. Prix fixes, sans surprise, adaptés aux indépendants, professions libérales et PME du Gard.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/tarifs',
  },
  openGraph: {
    title: 'Tarifs — AtelierCode | Prix fixes et transparents',
    description:
      'Nos offres et tarifs pour la création de sites web à Nîmes. Prix fixes, sans surprise, adaptés aux indépendants et PME.',
    url: 'https://www.ateliercode.fr/tarifs',
  },
};

export default function TarifsPage() {
  return <Tarifs />;
}
