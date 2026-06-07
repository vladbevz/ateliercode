import type { Metadata } from 'next';
import Tarifs from '@/app/components/Tarifs';

export const metadata: Metadata = {
  title: 'Tarifs — Sites web, E-commerce & Applications à Nîmes | À partir de 499 €',
  description:
    'Forfaits clairs pour site vitrine, boutique e-commerce ou application web à Nîmes. À partir de 499 €, sans abonnement caché. Devis gratuit.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/tarifs',
  },
  openGraph: {
    title: 'Tarifs — Sites web, E-commerce & Applications à Nîmes | À partir de 499 €',
    description:
      'Forfaits clairs pour site vitrine, boutique e-commerce ou application web à Nîmes. À partir de 499 €, sans abonnement caché. Devis gratuit.',
    url: 'https://www.ateliercode.fr/tarifs',
  },
};

export default function TarifsPage() {
  return <Tarifs />;
}
