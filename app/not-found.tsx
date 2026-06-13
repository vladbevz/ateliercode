import Link from 'next/link';
import { Home, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-white px-4">
      <div className="max-w-lg w-full text-center">

        <p className="text-8xl font-bold text-gray-100 select-none mb-0 leading-none">404</p>

        <div className="-mt-4 relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Page introuvable
          </h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Cette page n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil ou contactez-nous directement.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            <Home className="w-4 h-4" />
            Accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Nous contacter
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          Des questions ?{' '}
          <a href="mailto:contact@ateliercode.fr" className="text-gray-900 hover:underline font-medium">
            contact@ateliercode.fr
          </a>
        </p>

      </div>
    </div>
  );
}
