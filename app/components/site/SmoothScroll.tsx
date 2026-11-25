'use client';

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { MotionConfig } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';

let lenisInstance: Lenis | null = null;

/** Défilement programmatique compatible Lenis (repli natif sinon). */
export function scrollToTop() {
  if (lenisInstance) lenisInstance.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Respect de prefers-reduced-motion : pas d'inertie, scroll natif.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      // Les ancres (#methode, #demande…) passent par Lenis, en tenant compte du header sticky.
      anchors: { offset: -88 },
      // Les zones scrollables internes (menu mobile) gardent leur scroll natif.
      prevent: (node) => node.hasAttribute('data-lenis-prevent'),
    });
    lenisInstance = lenis;
    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // Navigation App Router : repartir du haut sans animation.
  useEffect(() => {
    if (!lenisInstance || window.location.hash) return;
    lenisInstance.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
