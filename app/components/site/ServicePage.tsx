import type { ReactNode } from 'react';
import { LayoutDashboard, Workflow, Globe, type LucideIcon } from 'lucide-react';
import {
  ButtonLink,
  CTABanner,
  JsonLd,
  PageHeader,
  Prose,
  RuledList,
  Section,
  ServiceCard,
  ServiceGrid,
  Split,
  unsplash,
} from './ui';
import { SERVICES, breadcrumbSchema, serviceSchema } from '../../lib/site';

const IMAGES: Record<string, { src: string; alt: string }> = {
  'applications-metier': {
    src: unsplash('1551288049-bebda4e38f71'),
    alt: 'Tableau de bord avec graphiques de performance sur un écran d’ordinateur portable',
  },
  'automatisation-ia': {
    src: unsplash('1784652852605-6945598f2af3'),
    alt: 'Salle de serveurs aux armoires alignées',
  },
  'sites-web-ecommerce': {
    src: unsplash('1759752394755-1241472b589d'),
    alt: 'Mains sur le clavier d’un ordinateur portable affichant une interface web',
  },
};

const ICONS: Record<string, LucideIcon> = {
  'applications-metier': LayoutDashboard,
  'automatisation-ia': Workflow,
  'sites-web-ecommerce': Globe,
};

export type ServicePageProps = {
  slug: string;
  h1: string;
  intro: ReactNode;
  listTitle: string;
  items: string[];
  approachTitle: string;
  approach: ReactNode;
  cta: { label: string; href: string };
  ctaBannerTitle: string;
  /** Description courte pour le schema Service. */
  schemaDescription: string;
  extra?: ReactNode;
};

export default function ServicePage({
  slug,
  h1,
  intro,
  listTitle,
  items,
  approachTitle,
  approach,
  cta,
  ctaBannerTitle,
  schemaDescription,
  extra,
}: ServicePageProps) {
  const current = SERVICES.find((s) => s.slug === slug)!;
  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(current.title, schemaDescription, current.href),
          breadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: current.title, path: current.href },
          ]),
        ]}
      />

      <PageHeader
        title={h1}
        intro={intro}
        crumbs={[{ label: 'Accueil', href: '/' }, { label: 'Services' }, { label: current.title }]}
        image={IMAGES[slug]}
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
          <ButtonLink href="/audit" variant="secondary">Demander un audit gratuit</ButtonLink>
        </div>
      </PageHeader>

      <Section labelledBy="liste-title">
        <Split title={listTitle} id="liste-title">
          <RuledList items={items} />
        </Split>
      </Section>

      <Section tone="muted" labelledBy="approche-title">
        <Split title={approachTitle} id="approche-title">
          <Prose>{approach}</Prose>
          {extra}
        </Split>
      </Section>

      <Section labelledBy="autres-title">
        <h2 id="autres-title" className="mb-10 text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-gray-900">
          Nos autres services
        </h2>
        <ServiceGrid cols={2}>
          {others.map((s) => (
            <ServiceCard key={s.slug} href={s.href} title={s.title} icon={ICONS[s.slug]}>
              <p>{s.short}.</p>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </Section>

      <CTABanner
        title={ctaBannerTitle}
        text="Premier échange gratuit et sans engagement. On répond sous 24 heures."
        href={cta.href}
        label={cta.label}
      />
    </>
  );
}
