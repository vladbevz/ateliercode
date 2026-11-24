import Link from 'next/link';
import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

/* ─── Layout ─────────────────────────────────────────────────────────── */

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

/** SectionWrapper : respiration verticale cohérente + séparateur discret optionnel. */
export function Section({
  children,
  id,
  className = '',
  divider = true,
  tone = 'white',
  labelledBy,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  divider?: boolean;
  tone?: 'white' | 'muted';
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tone === 'muted' ? 'bg-gray-50' : 'bg-white'} ${divider ? 'border-t border-gray-200' : ''} py-20 md:py-28 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Grille éditoriale : titre dans la colonne de gauche, contenu à droite. */
export function Split({ title, id, children, aside }: { title: ReactNode; id?: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <h2 id={id} className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-gray-900 text-balance leading-[1.1]">
          {title}
        </h2>
        {aside && <div className="mt-4 text-gray-500">{aside}</div>}
      </div>
      <div className="lg:col-span-8">{children}</div>
    </div>
  );
}

export function Prose({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-[65ch] space-y-5 text-lg leading-relaxed text-gray-600 text-pretty ${className}`}>
      {children}
    </div>
  );
}

/* ─── Buttons ────────────────────────────────────────────────────────── */

type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'inverse-secondary';

const buttonBase =
  'inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 text-[15px] font-medium whitespace-nowrap transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.98]';

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-gray-900 text-white hover:bg-gray-700',
  secondary: 'border border-gray-300 text-gray-900 hover:border-gray-900',
  inverse: 'bg-white text-gray-900 hover:bg-gray-200',
  'inverse-secondary': 'border border-white/30 text-white hover:border-white',
};

export function buttonClass(variant: ButtonVariant = 'primary', extra = '') {
  return `${buttonBase} ${buttonVariants[variant]} ${extra}`;
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
    </Link>
  );
}

/* ─── Page header (pages intérieures) ────────────────────────────────── */

export function PageHeader({
  title,
  intro,
  crumbs,
  children,
}: {
  title: string;
  intro?: ReactNode;
  crumbs?: { label: string; href?: string }[];
  children?: ReactNode;
}) {
  return (
    <header className="bg-white pt-14 pb-16 md:pt-20 md:pb-24">
      <Container>
        {crumbs && (
          <nav aria-label="Fil d’Ariane" className="mb-10">
            <ol className="flex flex-wrap items-center gap-x-2 text-sm text-gray-500">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="text-gray-300">/</span>}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-gray-900 underline-offset-4 hover:underline">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-gray-900">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-4xl text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-gray-900 text-balance">
          {title}
        </h1>
        {intro && <Prose className="mt-8 md:text-xl">{intro}</Prose>}
        {children}
      </Container>
    </header>
  );
}

/* ─── ServiceCard : grille jointe, pas de cartes flottantes ─────────── */

export type ServiceCardProps = {
  href: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
};

export function ServiceGrid({ children, cols = 3 }: { children: ReactNode; cols?: 2 | 3 }) {
  return (
    <ul
      className={`grid overflow-hidden rounded-lg border border-gray-200 divide-y divide-gray-200 md:divide-y-0 md:divide-x ${
        cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
      }`}
    >
      {children}
    </ul>
  );
}

export function ServiceCard({ href, title, icon: Icon, children }: ServiceCardProps) {
  return (
    <li className="flex">
      <Link
        href={href}
        className="service-card group relative flex w-full flex-col bg-white p-7 md:p-8 transition-colors duration-200 hover:bg-gray-50 focus-visible:bg-gray-50"
      >
        <div className="flex items-start justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-900">
            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <ArrowUpRight className="service-card-arrow h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <h3 className="mt-10 text-xl font-semibold tracking-[-0.015em] text-gray-900">{title}</h3>
        <div className="mt-3 space-y-2 text-[15px] leading-relaxed text-gray-600">{children}</div>
        <span className="mt-8 pt-6 text-sm font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 group-hover:decoration-gray-900 md:mt-auto">
          En savoir plus<span className="sr-only"> sur {title}</span>
        </span>
      </Link>
    </li>
  );
}

/* ─── StepList : 01 / 02 / 03 — une vraie séquence ──────────────────── */

export function StepList({ steps }: { steps: { title: string; body: ReactNode }[] }) {
  return (
    <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
      {steps.map((step, i) => (
        <li key={step.title} className="border-t border-gray-900 pt-6">
          <span className="block text-sm font-medium tabular-nums text-gray-500" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-gray-900">{step.title}</h3>
          <div className="mt-3 space-y-2 text-[15px] leading-relaxed text-gray-600">{step.body}</div>
        </li>
      ))}
    </ol>
  );
}

/* ─── Liste à puces sobre (lignes séparées) ─────────────────────────── */

export function RuledList({ items }: { items: string[] }) {
  return (
    <ul className="border-t border-gray-200">
      {items.map((item) => (
        <li key={item} className="flex gap-4 border-b border-gray-200 py-4 text-lg text-gray-900">
          <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
          <span className="leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ─── CTABanner ─────────────────────────────────────────────────────── */

export function CTABanner({
  title,
  text,
  href,
  label,
}: {
  title: string;
  text?: string;
  href: string;
  label: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-16 md:py-24">
      <Container>
        <div className="rounded-xl bg-gray-900 px-6 py-14 sm:px-12 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h2 id="cta-title" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white text-balance leading-[1.08]">
                {title}
              </h2>
              {text && <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-gray-300">{text}</p>}
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <ButtonLink href={href} variant="inverse" className="w-full sm:w-auto">
                {label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── JSON-LD ───────────────────────────────────────────────────────── */

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
