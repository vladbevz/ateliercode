import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import 'html5-device-mockups/dist/device-mockups.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ateliercode.fr'),
  title: {
    default: 'AtelierCode — Création de sites web à Nîmes | Agence web',
    template: '%s | AtelierCode',
  },
  description:
    'Agence web à Nîmes. Création de sites web rapides, modernes et optimisés SEO pour indépendants, PME et professions libérales du Gard.',
  alternates: {
    canonical: 'https://www.ateliercode.fr',
  },
  openGraph: {
    siteName: 'AtelierCode',
    locale: 'fr_FR',
    type: 'website',
    title: 'AtelierCode — Création de sites web à Nîmes | Agence web',
    description:
      'Agence web à Nîmes. Création de sites web rapides, modernes et optimisés SEO pour indépendants, PME et professions libérales du Gard.',
    url: 'https://www.ateliercode.fr',
    images: [
      {
        url: '/images/image.webp',
        width: 1200,
        height: 630,
        alt: 'AtelierCode — Agence web à Nîmes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AtelierCode — Création de sites web à Nîmes | Agence web',
    description:
      'Agence web à Nîmes. Création de sites web rapides, modernes et optimisés SEO pour indépendants, PME et professions libérales du Gard.',
    images: ['/images/image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AtelierCode',
  description:
    'Agence web à Nîmes — création de sites web sur mesure pour professionnels, indépendants et PME.',
  url: 'https://www.ateliercode.fr',
  telephone: '+33767772915',
  email: 'contact@ateliercode.fr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nîmes',
    addressRegion: 'Gard',
    addressCountry: 'FR',
  },
  areaServed: ['Nîmes', 'Gard', 'Occitanie'],
  serviceType: [
    'Création de sites web',
    'Développement web',
    'Référencement naturel',
    'Site vitrine',
    'E-commerce',
  ],
  priceRange: '€€',
};

const menuItems = [
  { label: 'Accueil', href: '/' },
  { label: 'A propos', href: '/a-propos' },
  { label: 'Pour qui ?', href: '/pourqui' },
  { label: 'Notre processus', href: '/processus' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <CustomCursor />
        <Header />

        <main className="relative pt-6 md:pt-16">
          {children}
        </main>

        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
              <div className="space-y-4">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                  Atelier<span className="text-gray-400">Code</span>
                </Link>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Création de sites web sur mesure pour professionnels.
                  Minimaliste, performant, efficace.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/vladbevz"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="GitHub AtelierCode"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Navigation
                </h3>
                <ul className="space-y-3">
                  {menuItems.slice(0, 5).map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Contact
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:contact@ateliercode.fr"
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      contact@ateliercode.fr
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+33767772915"
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      07 67 77 29 15
                    </a>
                  </li>
                  <li className="text-sm text-gray-400">Réponse sous 24h</li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Infos légales
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/mentions-legales"
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      Mentions légales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cgv"
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      CGV
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/politique-confidentialite"
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      Politique de confidentialité
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} AtelierCode — Tous droits réservés
                </p>
                <p className="text-sm text-gray-400">
                  Micro-entreprise • TVA non applicable, art. 293 B du CGI
                </p>
              </div>
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </body>
    </html>
  );
}
