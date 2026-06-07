import type { Metadata } from 'next';
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: 'Devis gratuit — Site web ou Application à Nîmes | AtelierCode',
  description:
    'Demandez votre devis gratuit pour un site vitrine, e-commerce ou application web à Nîmes. Maquette offerte, réponse sous 24h.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/contact',
  },
  openGraph: {
    title: 'Devis gratuit — Site web ou Application à Nîmes | AtelierCode',
    description:
      'Demandez votre devis gratuit pour un site vitrine, e-commerce ou application web à Nîmes. Maquette offerte, réponse sous 24h.',
    url: 'https://www.ateliercode.fr/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}
