import Image from 'next/image';
import { CTABanner, JsonLd, PageHeader, Prose, Section, Split, unsplash } from '../components/site/ui';
import { breadcrumbSchema, pageMetadata } from '../lib/site';

export const metadata = pageMetadata({
  title: 'À propos — AtelierCode, agence web à Nîmes',
  description:
    'AtelierCode est une agence web indépendante à Nîmes. Développement sur mesure en Next.js pour artisans, PME et entreprises du Gard et d’Occitanie.',
  path: '/a-propos',
});

const STACK = [
  { label: 'Interface', value: 'Next.js / React' },
  { label: 'Langage', value: 'TypeScript' },
  { label: 'Données', value: 'PostgreSQL' },
  { label: 'Déploiement', value: 'Vercel' },
];

export default function AProposPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'À propos', path: '/a-propos' }])} />

      <PageHeader
        title="À propos d’AtelierCode"
        crumbs={[{ label: 'Accueil', href: '/' }, { label: 'À propos' }]}
        image={{
          src: unsplash('1555066931-4365d14bab8c'),
          alt: 'Ordinateur portable ouvert affichant du code sur un bureau sombre',
        }}
        intro={
          <p>
            AtelierCode est une agence web indépendante basée à Nîmes. On développe des sites web, des applications métier et des outils d’automatisation pour les entreprises qui ont besoin de solutions concrètes.
          </p>
        }
      />

      <Section labelledBy="approche-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <figure className="lg:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
              <Image
                src="/images/image.webp"
                alt="Vladyslav Bevz, fondateur d’AtelierCode"
                fill
                sizes="(min-width: 1024px) 360px, 90vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-4 text-[15px] text-gray-600">
              <span className="font-medium text-gray-900">Vladyslav Bevz</span>, fondateur et développeur full-stack
            </figcaption>
          </figure>

          <div className="lg:col-span-8">
            <h2 id="approche-title" className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-gray-900 text-balance">
              Chaque projet part du contexte réel
            </h2>
            <Prose className="mt-8">
              <p>
                Le travail qu’on fait n’est pas standardisé. Chaque projet commence par une compréhension du contexte réel : comment l’entreprise fonctionne, où sont les points de friction, ce qui peut réellement changer quelque chose. On construit à partir de là.
              </p>
              <p>
                On travaille principalement avec des PME et des artisans du Gard et de l’Occitanie, mais aussi avec des clients plus éloignés quand le projet s’y prête.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      <Section tone="muted" labelledBy="stack-title">
        <Split title="Stack technique" id="stack-title">
          <dl className="grid grid-cols-2 border-t border-gray-300 md:grid-cols-4">
            {STACK.map((s) => (
              <div key={s.label} className="border-b border-gray-300 py-6 pr-4">
                <dt className="text-[15px] text-gray-500">{s.label}</dt>
                <dd className="mt-1 text-xl font-semibold tracking-[-0.015em] text-gray-900">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Split>
      </Section>

      <CTABanner
        title="Un projet à nous présenter ?"
        text="On répond sous 24 heures."
        href="/contact"
        label="Prendre contact"
      />
    </>
  );
}
