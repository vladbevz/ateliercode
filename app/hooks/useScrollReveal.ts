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
            // On fixe l'état "révélé" en style inline plutôt qu'en classe :
            // toute classe ajoutée hors de React sur un élément dont le
            // className est contrôlé par JSX est effacée au prochain
            // re-render (ex. clic qui change un state local dans le même
            // composant — voir PourQui.tsx). Le style inline, lui, n'est
            // jamais réécrit par React sur des propriétés qu'il ne gère
            // pas lui-même (ici JSX ne fixe que transitionDelay).
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      const style = (el as HTMLElement).style;
      if (style.opacity === '1') return;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);
}
