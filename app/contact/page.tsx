import type { Metadata } from 'next';
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: 'Contact — Demandez un devis gratuit sous 24h',
  description:
    'Contactez AtelierCode pour votre projet de site web à Nîmes. Devis gratuit sous 24h. Email : contact@ateliercode.fr | Tél : 07 67 77 29 15',
  alternates: {
    canonical: 'https://www.ateliercode.fr/contact',
  },
  openGraph: {
    title: 'Contact — AtelierCode | Devis gratuit sous 24h',
    description:
      'Contactez AtelierCode pour votre projet de site web à Nîmes. Devis gratuit sous 24h. Email : contact@ateliercode.fr | Tél : 07 67 77 29 15',
    url: 'https://www.ateliercode.fr/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}
