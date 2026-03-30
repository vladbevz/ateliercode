import type { Metadata } from 'next';
import FAQ from '../components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ — Questions fréquentes sur la création de sites web',
  description:
    'Toutes les réponses à vos questions sur la création de sites web avec AtelierCode : délais de livraison, tarifs, processus, maintenance et support.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/faq',
  },
  openGraph: {
    title: 'FAQ — AtelierCode | Questions fréquentes',
    description:
      'Toutes les réponses à vos questions sur la création de sites web avec AtelierCode : délais, tarifs, processus et support.',
    url: 'https://www.ateliercode.fr/faq',
  },
};

export default function FAQPage() {
  return <FAQ />;
}
