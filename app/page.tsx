import type { Metadata } from 'next';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import ProjectsShowcase from './components/ProjectsShowcase';

export const metadata: Metadata = {
  title: 'AtelierCode — Création de sites web à Nîmes | Agence web',
  description:
    'Agence web à Nîmes. Création de sites web rapides, modernes et optimisés SEO pour indépendants, PME et professions libérales du Gard.',
  alternates: {
    canonical: 'https://www.ateliercode.fr',
  },
  openGraph: {
    title: 'AtelierCode — Création de sites web à Nîmes | Agence web',
    description:
      'Agence web à Nîmes. Création de sites web rapides, modernes et optimisés SEO pour indépendants, PME et professions libérales du Gard.',
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
