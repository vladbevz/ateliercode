import type { Metadata } from 'next';
import PourQui from '../components/PourQui';

export const metadata: Metadata = {
  title: 'Pour qui ? — Sites web pour professionnels et indépendants',
  description:
    "AtelierCode s'adresse aux professions libérales, PME, TPE et indépendants qui souhaitent un site web professionnel, rapide et performant à Nîmes et dans le Gard.",
  alternates: {
    canonical: 'https://www.ateliercode.fr/pourqui',
  },
  openGraph: {
    title: 'Pour qui ? — AtelierCode | Sites web pour professionnels',
    description:
      "AtelierCode s'adresse aux professions libérales, PME, TPE et indépendants qui souhaitent un site web professionnel, rapide et performant.",
    url: 'https://www.ateliercode.fr/pourqui',
  },
};

export default function PourquiPage() {
  return <PourQui />;
}
