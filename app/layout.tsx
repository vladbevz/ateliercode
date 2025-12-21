// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AtelierCode — Création de sites web pour artisans en France',
  description: 'Création de sites vitrines clairs et efficaces pour artisans, indépendants et petites entreprises en France',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="border-b">
          <nav className="container-narrow py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">AtelierCode</div>
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
                <a href="#tarifs" className="hover:text-blue-600 transition-colors">Tarifs</a>
                <a href="#processus" className="hover:text-blue-600 transition-colors">Processus</a>
                <a href="#contact" className="btn-primary text-sm">Devis gratuit</a>
              </div>
            </div>
          </nav>
        </header>
        
        <main>{children}</main>
        
        <footer className="bg-gray-50 border-t mt-20">
          <div className="container-narrow py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">AtelierCode</h3>
                <p className="text-gray-600">
                  Création de sites web pour artisans et indépendants en France.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Informations</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#services" className="hover:text-blue-600">Services</a></li>
                  <li><a href="#tarifs" className="hover:text-blue-600">Tarifs</a></li>
                  <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Légal</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/mentions-legales">Mentions légales</a></li>
                  <li><a href="/politique-confidentialite">Politique de confidentialité</a></li>
                  <li><a href="/politique-cookies">Politique de cookies</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t mt-8 pt-8 text-center text-gray-500 text-sm">
              <p>© 2024 AtelierCode — Micro-entrepreneur — SIRET: [À ajouter après obtention]</p>
              <p className="mt-2">Site créé avec soin en France 🇫🇷</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}