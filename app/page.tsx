import type { Metadata } from 'next';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import ProjectsShowcase from './components/ProjectsShowcase';

export const metadata: Metadata = {
  title: 'Développeur web à Nîmes — Sites, E-commerce & Applications | AtelierCode',
  description:
    'AtelierCode crée des sites vitrine, boutiques e-commerce et applications web sur mesure à Nîmes. React & Next.js, performances 98/100, devis gratuit. À partir de 499 €.',
  alternates: {
    canonical: 'https://www.ateliercode.fr',
  },
  openGraph: {
    title: 'Développeur web à Nîmes — Sites, E-commerce & Applications | AtelierCode',
    description:
      'AtelierCode crée des sites vitrine, boutiques e-commerce et applications web sur mesure à Nîmes. React & Next.js, performances 98/100, devis gratuit. À partir de 499 €.',
    url: 'https://www.ateliercode.fr',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ProcessSection />
      <ProjectsShowcase />
    </main>
  );
}
