'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useCountUp() {
  // Même remarque que useScrollReveal : re-scan à chaque changement de
  // route puisque le layout racine ne se remonte pas en navigation client.
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const counters = document.querySelectorAll('[data-count]:not([data-counted])');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.setAttribute('data-counted', 'true');
        const target = parseInt(el.dataset.count || '0');
        if (prefersReduced) { el.textContent = String(target); return; }
        let start = 0;
        const duration = 1200;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          el.textContent = String(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = String(target);
        };
        requestAnimationFrame(step);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}
