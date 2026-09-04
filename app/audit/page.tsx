import type { Metadata } from 'next';
import Audit from '../components/Audit';

export const metadata: Metadata = {
  title: 'Audit gratuit de site web | AtelierCode — Nîmes',
  description:
    'Testez gratuitement la performance, la vitesse et le SEO de votre site en 30 secondes. Résultats détaillés avec explications.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/audit',
  },
};

export default function AuditPage() {
  return <Audit />;
}
