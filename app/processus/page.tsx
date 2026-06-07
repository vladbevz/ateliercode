import type { Metadata } from 'next';
import Processus from '@/app/components/Processus';

export const metadata: Metadata = {
  title: "Notre processus — De l'idée au site web livré en 3 semaines | AtelierCode",
  description:
    'Découvrez comment AtelierCode développe votre site vitrine, e-commerce ou application web à Nîmes : de la maquette à la mise en ligne en 3 étapes claires.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/processus',
  },
  openGraph: {
    title: "Notre processus — De l'idée au site web livré en 3 semaines | AtelierCode",
    description:
      'Découvrez comment AtelierCode développe votre site vitrine, e-commerce ou application web à Nîmes : de la maquette à la mise en ligne en 3 étapes claires.',
    url: 'https://www.ateliercode.fr/processus',
  },
};

export default function ProcessusPage() {
  return <Processus />;
}
