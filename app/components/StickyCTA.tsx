'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname === '/contact') return null;

  return (
    <div
      className={`fixed bottom-5 left-4 right-4 z-50 md:hidden transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-2xl font-semibold text-base shadow-2xl active:scale-95 transition-transform"
      >
        Devis gratuit — réponse sous 24h
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
