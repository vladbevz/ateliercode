// app/layout.tsx
'use client';

import Link from 'next/link';

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
    { label: 'Pour qui ?', href: '/pourqui' },
    { label: 'Processus', href: '/processus' },
    { label: 'Tarifs', href: '/tarifs' },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'FAQ', href: '/faq' },
  ]

  return (
    <html lang="fr" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AtelierCode — Sites web sur mesure pour professionnels</title>
        <meta name="description" content="Création de sites web minimalistes et performants pour artisans, indépendants, professions libérales et entreprises" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {/* Монохромний градієнт */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-800/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/0 via-black/30 to-black"></div>
        </div>

        {/* Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md border-b border-gray-800 py-3' 
            : 'bg-transparent py-5'
        }`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link 
                href="/"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center group-hover:border-gray-600 transition-colors">
                  <span className="font-bold text-lg text-white">AC</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight">
                    AtelierCode
                  </span>
                  <span className="text-xs text-gray-400 font-medium tracking-wide">
                    Création web professionnelle
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-400 font-medium hover:text-white transition-colors text-sm tracking-wide relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
                
                {/* Contact Button */}
                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-all shadow hover:shadow-lg"
                >
                  Contact
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
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
                className="lg:hidden bg-black/98 backdrop-blur-md border-t border-gray-800 overflow-hidden"
              >
                <div className="container-narrow py-6">
                  <div className="flex flex-col space-y-2">
                    {menuItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="py-3 px-4 rounded-lg hover:bg-gray-900 text-gray-300 font-medium hover:text-white transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="#contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="py-3 px-4 rounded-lg bg-white text-black font-medium text-center mt-4 hover:bg-gray-100 transition-all"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {/* Brand */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-lg text-white">AC</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">AtelierCode</h3>
                      <p className="text-sm text-gray-400">Web minimaliste & efficace</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Sites web épurés pour artisans, indépendants, professions libérales 
                    et entreprises recherchant l'essentiel : clarté, performance et élégance.
                  </p>
                </div>

                {/* Navigation */}
                <div>
                  <h4 className="font-medium text-white mb-4 tracking-wide">Navigation</h4>
                  <div className="space-y-3">
                    {menuItems.map((item) => (
                      <Link 
                        key={item.label}
                        href={item.href}
                        className="block text-gray-500 hover:text-white transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link 
                      href="#contact"
                      className="block text-gray-500 hover:text-white transition-colors text-sm font-medium mt-2"
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="font-medium text-white mb-4 tracking-wide">Contact</h4>
                  <div className="space-y-3">
                    <Link 
                      href="mailto:contact@ateliercode.fr" 
                      className="block text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      contact@ateliercode.fr
                    </Link>
                    
                    <Link 
                      href="tel:+33612345678" 
                      className="block text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      06 12 34 56 78
                    </Link>
                    
                    <p className="text-gray-500 text-sm">
                      Basé en France • Disponible à distance
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="pt-8 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  {/* Copyright */}
                  <div className="text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} AtelierCode — Tous droits réservés</p>
                  </div>

                  {/* Legal */}
                  <div className="flex flex-wrap gap-6">
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      Mentions légales
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      Politique de confidentialité
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      CGV
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating CTA (mobile only) */}
        <Link
          href="#contact"
          className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-medium shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <ArrowRight className="w-4 h-4" />
          <span>Contact</span>
        </Link>
      </body>
    </html>
  )
}