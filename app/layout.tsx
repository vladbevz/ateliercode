import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/site/NavBar';
import Footer from './components/site/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollRevealProvider from './components/ScrollRevealProvider';
import { JsonLd } from './components/site/ui';
import SmoothScroll from './components/site/SmoothScroll';
import { SITE_URL, localBusinessSchema } from './lib/site';
import 'html5-device-mockups/dist/device-mockups.min.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const DEFAULT_TITLE = 'Agence web à Nîmes — sites, applications métier, automatisation | AtelierCode';
const DEFAULT_DESCRIPTION =
  'AtelierCode, agence web à Nîmes : sites web, applications métier et automatisation sur mesure pour les entreprises du Gard et d’Occitanie. Audit gratuit.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: '%s | AtelierCode' },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    siteName: 'AtelierCode',
    locale: 'fr_FR',
    type: 'website',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/images/og-cover.png`, width: 1280, height: 720, alt: 'AtelierCode, agence web à Nîmes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [`${SITE_URL}/images/og-cover.png`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const viewport: Viewport = { themeColor: '#ffffff' };

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vladyslav Bevz',
  jobTitle: 'Développeur web fullstack, fondateur d’AtelierCode',
  worksFor: { '@id': `${SITE_URL}/#business` },
  url: `${SITE_URL}/a-propos`,
  knowsAbout: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Automatisation'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <JsonLd data={[localBusinessSchema, personSchema]} />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <SmoothScroll>
          <ScrollRevealProvider />
          <NavBar />
          <main id="contenu" className="relative">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <ScrollToTop />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
