'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { AUDIT_LINK, NAV, SERVICES } from '../../lib/site';

const DROPDOWN_ITEMS = [...SERVICES, AUDIT_LINK];

export default function NavBar() {
  const pathname = usePathname() ?? '/';
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();
  const mobileId = useId();

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const servicesActive = pathname.startsWith('/services') || pathname.startsWith('/audit');

  // Fermer tous les menus à chaque navigation.
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Échap + clic extérieur.
  useEffect(() => {
    if (!servicesOpen && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (servicesOpen) {
        setServicesOpen(false);
        triggerRef.current?.focus();
      }
      setMobileOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (servicesOpen && wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [servicesOpen, mobileOpen]);

  // Ouverture au survol uniquement pour un pointeur fin (souris).
  const hoverOpen = useCallback((e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);
  const hoverClose = useCallback((e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  }, []);

  // Le dropdown se ferme quand le focus clavier le quitte.
  const onBlurWithin = (e: React.FocusEvent) => {
    if (!wrapperRef.current?.contains(e.relatedTarget as Node)) setServicesOpen(false);
  };

  const linkClass = (active: boolean) =>
    `relative inline-flex h-10 items-center rounded-md px-3 text-[15px] transition-colors duration-150 ${
      active ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-[box-shadow] duration-200 ${
        scrolled ? 'shadow-[0_1px_0_0_#e5e7eb]' : ''
      }`}
    >
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-gray-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu
      </a>
      <div className="mx-auto flex h-16 md:h-[72px] max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-[22px] font-bold tracking-[-0.02em] text-gray-900" aria-label="AtelierCode, accueil" translate="no">
          Atelier<span className="text-gray-400">Code</span>
        </Link>

        {/* Desktop */}
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-1">
          <Link href="/" className={linkClass(isActive('/'))} aria-current={isActive('/') ? 'page' : undefined}>
            Accueil
          </Link>

          <div
            ref={wrapperRef}
            className="relative"
            onPointerEnter={hoverOpen}
            onPointerLeave={hoverClose}
            onBlur={onBlurWithin}
          >
            <button
              ref={triggerRef}
              type="button"
              aria-expanded={servicesOpen}
              aria-controls={menuId}
              onClick={() => setServicesOpen((o) => !o)}
              className={`${linkClass(servicesActive)} gap-1.5`}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            <div id={menuId} data-open={servicesOpen} className="nav-dropdown absolute left-0 top-full pt-2">
              <ul className="w-[22rem] rounded-lg border border-gray-200 bg-white p-1.5 shadow-[0_12px_32px_-12px_rgba(17,24,39,0.22)]">
                {DROPDOWN_ITEMS.map((item, i) => (
                  <li key={item.href} className={i === SERVICES.length ? 'mt-1.5 border-t border-gray-100 pt-1.5' : ''}>
                    <Link
                      href={item.href}
                      tabIndex={servicesOpen ? 0 : -1}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className="block rounded-md px-3.5 py-3 transition-colors duration-150 hover:bg-gray-50 focus-visible:bg-gray-50"
                    >
                      <span className="block text-[15px] font-medium text-gray-900">{item.title}</span>
                      <span className="mt-0.5 block text-sm text-gray-500">{item.short}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {NAV.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(isActive(item.href))}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/audit"
            className="hidden sm:inline-flex h-10 items-center rounded-md bg-gray-900 px-5 text-[15px] font-medium text-white transition-colors duration-150 hover:bg-gray-700"
          >
            Audit gratuit
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls={mobileId}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 text-gray-900"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div
        id={mobileId}
        data-open={mobileOpen}
        className="mobile-panel lg:hidden overscroll-contain absolute inset-x-0 top-full max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-gray-200 bg-white"
      >
        <nav aria-label="Navigation mobile" className="mx-auto max-w-6xl px-4 pb-8 pt-4 sm:px-6">
          <ul className="divide-y divide-gray-100">
            <li>
              <Link href="/" className="flex h-12 items-center text-lg text-gray-900" tabIndex={mobileOpen ? 0 : -1}>
                Accueil
              </Link>
            </li>
            <li className="py-3">
              <p className="pb-2 text-sm text-gray-500">Services</p>
              <ul>
                {DROPDOWN_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      tabIndex={mobileOpen ? 0 : -1}
                      className="flex min-h-12 flex-col justify-center py-1.5 text-lg text-gray-900"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {NAV.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  tabIndex={mobileOpen ? 0 : -1}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="flex h-12 items-center text-lg text-gray-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/audit"
            tabIndex={mobileOpen ? 0 : -1}
            className="mt-6 flex h-12 items-center justify-center rounded-md bg-gray-900 text-[15px] font-medium text-white"
          >
            Demander un audit gratuit
          </Link>
        </nav>
      </div>
    </header>
  );
}
