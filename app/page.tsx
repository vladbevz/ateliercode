import type { Metadata } from 'next';
import HeroPremium from './components/HeroPremium';
import StatsStrip from './components/StatsStrip';
import PillarsPremium from './components/PillarsPremium';
import ProjectsDark from './components/ProjectsDark';
import TestimonialsPremium from './components/TestimonialsPremium';
import PricingPremium from './components/PricingPremium';
import CtaPremium from './components/CtaPremium';

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
      {/* Dark hero — wow factor */}
      <HeroPremium />

      {/* Proof strip — stays dark */}
      <StatsStrip />

      {/* 3 pillars — light break */}
      <PillarsPremium />

      {/* Projects — dark */}
      <ProjectsDark />

      {/* Testimonials — light break */}
      <TestimonialsPremium />

      {/* Pricing — dark */}
      <PricingPremium />

      {/* Final CTA — dark */}
      <CtaPremium />
    </main>
  );
}
