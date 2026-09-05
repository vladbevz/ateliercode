import type { Metadata } from 'next';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';

export const metadata: Metadata = {
  title: 'AtelierCode — Développeur web freelance à Nîmes (React/Next.js)',
  description:
    'Sites vitrine, e-commerce et applications sur mesure, développés en React/Next.js à Nîmes. 5× plus rapide que WordPress. Devis gratuit, maquette offerte.',
  alternates: {
    canonical: 'https://www.ateliercode.fr',
  },
  openGraph: {
    title: 'AtelierCode — Développeur web freelance à Nîmes (React/Next.js)',
    description:
      'Sites vitrine, e-commerce et applications sur mesure, développés en React/Next.js à Nîmes. 5× plus rapide que WordPress. Devis gratuit, maquette offerte.',
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
