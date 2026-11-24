import Link from 'next/link';
import CookieResetButton from '../CookieResetButton';
import { villes } from '../../lib/villes-data';
import { AUDIT_LINK, CONTACT, SERVICES } from '../../lib/site';

const linkCls = 'text-[15px] text-gray-600 transition-colors duration-150 hover:text-gray-900';

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-900">{title}</h2>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}

export default function Footer() {
  const zones = [{ slug: 'nimes', nom: 'Nîmes' }, ...villes.map((v) => ({ slug: v.slug, nom: v.nom }))];

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" translate="no" className="text-[22px] font-bold tracking-[-0.02em] text-gray-900">
              Atelier<span className="text-gray-400">Code</span>
            </Link>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-gray-600">
              Agence web indépendante à Nîmes. Sites web, applications métier et automatisation pour les entreprises du Gard et d’Occitanie.
            </p>
            <address className="mt-6 not-italic text-[15px] leading-relaxed text-gray-600">
              {CONTACT.street}, {CONTACT.postalCode} {CONTACT.city}
              <br />
              <a href={`mailto:${CONTACT.email}`} className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
                {CONTACT.email}
              </a>
              <br />
              <a href={CONTACT.phoneHref} className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
                {CONTACT.phone}
              </a>
            </address>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <Column title="Services">
              {[...SERVICES, AUDIT_LINK].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={linkCls}>{s.title}</Link>
                </li>
              ))}
            </Column>
            <Column title="Agence">
              {[
                { label: 'Réalisations', href: '/realisations' },
                { label: 'À propos', href: '/a-propos' },
                { label: 'Blog', href: '/blog' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>{l.label}</Link>
                </li>
              ))}
            </Column>
            <Column title="Zones d’intervention">
              {zones.map((z) => (
                <li key={z.slug}>
                  <Link href={`/agence-web/${z.slug}`} className={linkCls}>Agence web {z.nom}</Link>
                </li>
              ))}
            </Column>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AtelierCode. Micro-entreprise, TVA non applicable, art. 293 B du CGI.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/mentions-legales" className="hover:text-gray-900">Mentions légales</Link></li>
            <li><Link href="/cgv" className="hover:text-gray-900">CGV</Link></li>
            <li><Link href="/politique-confidentialite" className="hover:text-gray-900">Confidentialité</Link></li>
            <li><CookieResetButton /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
