import type { Metadata } from 'next';
import Processus from '@/app/components/Processus';

export const metadata: Metadata = {
  title: 'Notre processus — Création de site web en 2 à 3 semaines',
  description:
    'Découvrez notre méthode de travail : brief, design, développement, livraison. Un site web livré en 2 à 3 semaines, sans surprise et avec des prix fixes.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/processus',
  },
  openGraph: {
    title: 'Notre processus — AtelierCode | Création de site en 3 étapes',
    description:
      'Découvrez notre méthode de travail : brief, design, développement, livraison. Un site web livré en 2 à 3 semaines, sans surprise et avec des prix fixes.',
    url: 'https://www.ateliercode.fr/processus',
  },
};

export default function ProcessusPage() {
  return <Processus />;
}
