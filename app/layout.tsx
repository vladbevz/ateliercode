// app/layout.tsx
'use client';

import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import { usePathname } from 'next/navigation';
import 'html5-device-mockups/dist/device-mockups.min.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Pour qui ?', href: '/pourqui' },
    { label: 'Notre processus', href: '/processus' },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'Tarifs', href: '/tarifs' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname?.startsWith(href);
  };

  return (
    <html lang="fr">
      <head>
        <title>AtelierCode — Création des sites Web</title>
        <meta name="description" content="Agence web à Nîmes. Création de sites web rapides, modernes et optimisés SEO pour indépendants, PME et professions libérales." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/images/favicon.svg" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {/* Кастомний курсор */}
        <CustomCursor />

        {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-gray-200' 
              : 'bg-transparent py-5'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link 
                href="/" 
                className="relative group"
              >
                <span className="text-2xl font-bold text-gray-900">
                  Atelier<span className="text-gray-400">Code</span>
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                      isActive(item.href)
                        ? 'text-gray-900'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="ml-4 px-6 py-2.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
                >
                  <span>Devis gratuit</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 overflow-hidden shadow-lg"
              >
                <div className="container mx-auto px-4 py-6">
                  <nav className="flex flex-col space-y-1">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block py-3 px-4 rounded-lg transition-all ${
                            isActive(item.href)
                              ? 'bg-gray-900 text-white font-medium'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                    
                    {/* Mobile CTA */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: menuItems.length * 0.05 }}
                      className="pt-4 mt-2 border-t border-gray-200"
                    >
                      <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-3 px-4 bg-gray-900 text-white rounded-lg font-medium text-center hover:bg-gray-800 transition-colors"
                      >
                        Demander un devis gratuit
                      </Link>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main Content - зменшений відступ */}
        <main className="relative pt-6 md:pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Footer Grid */}
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
                  <a href="https://github.com/vladbevz" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
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
                  <li className="text-sm text-gray-400">
                    Réponse sous 24h
                  </li>
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

        {/* Scroll to top button */}
        <ScrollToTop />
      </body>
    </html>
  );
}

// Composant ScrollToTop
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}