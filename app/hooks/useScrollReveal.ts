'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useScrollReveal() {
  // Le layout racine ne se remonte pas lors des navigations côté client
  // (App Router) — on ré-observe donc à chaque changement de route pour
  // que les `.reveal` des pages visitées après la première soient captés.
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);
}
