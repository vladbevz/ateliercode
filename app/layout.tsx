// app/layout.tsx
'use client';

import { Inter } from 'next/font/google'
import './globals.css'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Pour qui ?', href: '#pourqui' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Processus', href: '#processus' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <html lang="fr" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AtelierCode — Sites web pour artisans et petites entreprises</title>
        <meta name="description" content="Création de sites web simples et efficaces pour artisans, indépendants et petites entreprises en France" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {/* Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800 py-3' 
            : 'bg-transparent py-5'
        }`}>
          <div className="container-narrow">
            <div className="flex justify-between items-center">
              {/* Logo - AtelierCode */}
              <a 
                href="#"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-lg">AC</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">
                    AtelierCode
                  </span>
                  <span className="text-xs text-gray-400">
                    Sites web artisanaux
                  </span>
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-400 font-medium hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                ))}
                
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors"
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400"
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
                className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 overflow-hidden"
              >
                <div className="container-narrow py-6">
                  <div className="flex flex-col space-y-3">
                    {menuItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="py-3 px-4 rounded-lg hover:bg-gray-900 text-gray-300 font-medium hover:text-white transition-all"
                      >
                        {item.label}
                      </a>
                    ))}
                    <a
                      href="#contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="py-3 px-4 rounded-lg bg-white text-black font-medium text-center mt-2"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800">
          <div className="container-narrow">
            <div className="py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {/* Brand - AtelierCode */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-lg">AC</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">AtelierCode</h3>
                      <p className="text-sm text-gray-400">Sites web artisanaux</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-500 text-sm">
                    Création de sites web simples et efficaces pour les artisans et petites entreprises en France.
                  </p>
                </div>

                {/* Links */}
                <div>
                  <h4 className="font-medium text-white mb-4">Liens</h4>
                  <div className="space-y-2">
                    {menuItems.map((item) => (
                      <a 
                        key={item.label}
                        href={item.href}
                        className="block text-gray-500 hover:text-white transition-colors text-sm"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="font-medium text-white mb-4">Contact</h4>
                  <div className="space-y-3">
                    <a 
                      href="mailto:contact@ateliercode.fr" 
                      className="block text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      contact@ateliercode.fr
                    </a>
                    
                    <a 
                      href="tel:+33612345678" 
                      className="block text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      06 12 34 56 78
                    </a>
                    
                    <p className="text-gray-500 text-sm">
                      Basé en France
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="pt-8 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  {/* Copyright */}
                  <div className="text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} AtelierCode</p>
                  </div>

                  {/* Legal */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      Mentions légales
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      Politique de confidentialité
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating CTA (mobile only) */}
        <a
          href="#contact"
          className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-medium shadow-lg"
        >
          <ArrowRight className="w-4 h-4" />
          <span>Contact</span>
        </a>
      </body>
    </html>
  )
}