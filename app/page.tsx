import type { Metadata } from 'next';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';

export const metadata: Metadata = {
  title: 'AtelierCode — Création de sites web & applications à Nîmes',
  description:
    'Développeur web à Nîmes : sites vitrine, e-commerce et applications sur mesure pour votre activité. Rapide, visible sur Google. Devis gratuit, maquette offerte.',
  alternates: {
    canonical: 'https://www.ateliercode.fr',
  },
  openGraph: {
    title: 'AtelierCode — Création de sites web & applications à Nîmes',
    description:
      'Développeur web à Nîmes : sites vitrine, e-commerce et applications sur mesure pour votre activité. Rapide, visible sur Google. Devis gratuit, maquette offerte.',
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
