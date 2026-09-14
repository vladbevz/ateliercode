import type { Metadata } from 'next';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';

export const metadata: Metadata = {
  title: 'AtelierCode — Sites web & Applications à Nîmes',
  description:
    'AtelierCode crée des sites vitrine, e-commerce et applications sur mesure à Nîmes et en Occitanie. Rapide, visible sur Google. Devis gratuit, maquette offerte.',
  alternates: {
    canonical: 'https://www.ateliercode.fr',
  },
  openGraph: {
    title: 'AtelierCode — Sites web & Applications à Nîmes',
    description:
      'AtelierCode crée des sites vitrine, e-commerce et applications sur mesure à Nîmes et en Occitanie. Rapide, visible sur Google. Devis gratuit, maquette offerte.',
    url: 'https://www.ateliercode.fr',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ProcessSection />
    </main>
  );
}
