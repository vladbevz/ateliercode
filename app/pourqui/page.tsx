import type { Metadata } from 'next';
import PourQui from '../components/PourQui';

export const metadata: Metadata = {
  title: 'Pour qui ? Artisans, commerces, startups à Nîmes | AtelierCode',
  description:
    'AtelierCode crée des sites et applications pour artisans, restaurants, photographes, e-commerçants et startups à Nîmes et dans le Gard.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/pourqui',
  },
  openGraph: {
    title: 'Pour qui ? Artisans, commerces, startups à Nîmes | AtelierCode',
    description:
      'AtelierCode crée des sites et applications pour artisans, restaurants, photographes, e-commerçants et startups à Nîmes et dans le Gard.',
    url: 'https://www.ateliercode.fr/pourqui',
  },
};

export default function PourquiPage() {
  return <PourQui />;
}
