import type { Metadata } from 'next';
import CGVContent from './CGVContent';

export const metadata: Metadata = {
  title: 'CGV — Conditions Générales de Vente | AtelierCode',
  description:
    'Conditions Générales de Vente de AtelierCode, agence web à Nîmes. Tarifs, modalités de paiement, délais et garanties pour vos projets de création de sites web.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/cgv',
  },
  openGraph: {
    title: 'CGV — Conditions Générales de Vente | AtelierCode',
    description: 'Conditions Générales de Vente de AtelierCode, agence web à Nîmes.',
    url: 'https://www.ateliercode.fr/cgv',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CGVPage() {
  return <CGVContent />;
}
