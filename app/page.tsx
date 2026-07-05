import type { Metadata } from 'next';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';

export const metadata: Metadata = {
  title: 'AtelierCode — Création de sites web & applications à Nîmes',
  description:
    'Développeur web freelance à Nîmes : sites vitrine, e-commerce et applications sur mesure en React & Next.js. Rapide, moderne, visible sur Google. Devis gratuit, dès 499 €.',
  alternates: {
    canonical: 'https://www.ateliercode.fr',
  },
  openGraph: {
    title: 'AtelierCode — Création de sites web & applications à Nîmes',
    description:
      'Développeur web freelance à Nîmes : sites vitrine, e-commerce et applications sur mesure en React & Next.js. Rapide, moderne, visible sur Google. Devis gratuit, dès 499 €.',
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
