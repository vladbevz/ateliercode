import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, Workflow, Globe } from 'lucide-react';
import {
  ButtonLink,
  CTABanner,
  Container,
  Marquee,
  Section,
  ServiceCard,
  ServiceGrid,
  SplitHeading,
  StepList,
  unsplash,
} from './components/site/ui';
import { RotatingWord } from './components/site/motion';
import { CONTACT, pageMetadata } from './lib/site';
import { villes } from './lib/villes-data';

export const metadata = pageMetadata({
  title: 'Agence web à Nîmes — sites, applications métier, automatisation | AtelierCode',
  description:
    'AtelierCode, agence web à Nîmes : sites web, applications métier et automatisation sur mesure pour les entreprises du Gard et d’Occitanie. Audit gratuit et sans engagement.',
  path: '/',
});

const STEPS = [
  {
    title: 'Audit',
    body: (
      <>
        <p>On analyse votre situation : site existant, processus internes, outils en place.</p>
        <p>C’est gratuit et ça ne vous engage à rien.</p>
      </>
    ),
  },
  {
    title: 'Proposition',
    body: (
      <>
        <p>On définit ensemble ce qu’on construit, pourquoi, et comment.</p>
        <p>Délai, budget, périmètre : tout est posé avant de commencer.</p>
      </>
    ),
  },
  {
    title: 'Réalisation',
    body: (
      <>
        <p>Développement, tests, mise en ligne. Vous suivez l’avancement à chaque étape.</p>
        <p>Vous gardez la main après.</p>
      </>
    ),
  },
];

export default function Home() {
  const zones = [{ slug: 'nimes', nom: 'Nîmes' }, ...villes.map((v) => ({ slug: v.slug, nom: v.nom }))];

  return (
    <>
      {/* Hero — typographie seule, fond sombre, aucune animation d'entrée */}
      <section aria-labelledby="hero-title" className="bg-gray-900 text-white">
        <Container className="pt-20 pb-14 md:pt-32 md:pb-20">
          <SplitHeading
            id="hero-title"
            text={'Agence web à Nîmes — développement sur mesure pour les entreprises'}
            className="max-w-5xl text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[5.25rem] font-semibold tracking-[-0.04em] text-balance"
          />

          <p className="mt-8 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-gray-500">
            <span className="sr-only">On construit vos sites web, applications et automatisations.</span>
            <span aria-hidden="true">
              On construit vos{' '}
              <RotatingWord
                words={['sites web', 'applications', 'automatisations']}
                className="text-white underline decoration-white/30 decoration-2 underline-offset-[0.18em]"
              />
            </span>
          </p>

          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end">
            <p className="md:col-span-7 max-w-[54ch] text-lg md:text-xl leading-relaxed text-gray-300 text-pretty">
              Sites web, applications métier, automatisation. On conçoit et développe les outils numériques dont votre activité a besoin.
            </p>
            <div className="md:col-span-5 flex flex-col gap-3 sm:flex-row md:justify-end">
              <ButtonLink href="/audit" variant="inverse">Demander un audit gratuit</ButtonLink>
              <ButtonLink href="/realisations" variant="inverse-secondary">Voir nos réalisations</ButtonLink>
            </div>
          </div>

          <dl className="mt-20 grid gap-6 border-t border-white/15 pt-8 text-[15px] sm:grid-cols-3 md:mt-28">
            <div>
              <dt className="text-gray-400">Adresse</dt>
              <dd className="mt-1 text-white">{CONTACT.street}, {CONTACT.city}</dd>
            </div>
            <div>
              <dt className="text-gray-400">Délai de réponse</dt>
              <dd className="mt-1 text-white">Sous 24 heures</dd>
            </div>
            <div>
              <dt className="text-gray-400">Premier rendez-vous</dt>
              <dd className="mt-1 text-white">Audit gratuit, sans engagement</dd>
            </div>
          </dl>
        </Container>
      </section>

      <Marquee items={['Applications', 'Automatisation', 'Sites web', 'Nîmes', 'Développement sur mesure', 'Audit gratuit']} />

      {/* Services */}
      <Section divider={false} labelledBy="services-title">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 id="services-title" className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-gray-900">
            Ce qu’on fait
          </h2>
          <p className="max-w-md text-gray-600">
            Trois métiers, une même méthode : comprendre votre activité avant d’écrire une ligne de code.
          </p>
        </div>
        <ServiceGrid>
          <ServiceCard href="/services/applications-metier" title="Applications & outils métier" icon={LayoutDashboard}>
            <p>Tableaux de bord, suivi de flotte, gestion d’équipes, portails clients.</p>
            <p>Du logiciel construit pour votre façon de travailler, pas l’inverse.</p>
          </ServiceCard>
          <ServiceCard href="/services/automatisation-ia" title="Automatisation & IA" icon={Workflow}>
            <p>Notifications automatiques, traitement de documents, agents IA.</p>
            <p>Les tâches répétitives gérées sans intervention humaine.</p>
          </ServiceCard>
          <ServiceCard href="/services/sites-web-ecommerce" title="Sites web & e-commerce" icon={Globe}>
            <p>Vitrine, catalogue, boutique en ligne.</p>
            <p>Rapide, sécurisé, optimisé pour le référencement local.</p>
          </ServiceCard>
        </ServiceGrid>
      </Section>

      {/* Méthode */}
      <Section id="methode" tone="muted" labelledBy="methode-title">
        <h2 id="methode-title" className="mb-12 text-3xl md:mb-16 md:text-5xl font-semibold tracking-[-0.03em] text-gray-900">
          Comment on travaille
        </h2>
        <StepList steps={STEPS} />
      </Section>

      {/* Ancrage local — photo des Arènes de Nîmes, voile sombre pour la lisibilité */}
      <section aria-labelledby="local-title" className="relative isolate overflow-hidden bg-gray-900 py-24 text-white md:py-36">
        <Image
          src={unsplash('1753469202827-656b6e6a3764')}
          alt="Façade des Arènes de Nîmes, amphithéâtre romain"
          fill
          sizes="100vw"
          className="-z-10 object-cover grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-gray-900/70" aria-hidden="true" />
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <h2 id="local-title" className="lg:col-span-4 text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-balance">
              Basés à Nîmes
            </h2>
            <div className="lg:col-span-8">
              <p className="max-w-[60ch] text-lg md:text-xl leading-relaxed text-gray-200 text-pretty">
                On travaille pour des entreprises du Gard et de l’Occitanie. Artisans, commerçants, PME, transporteurs : on connaît le tissu économique local et on intervient directement chez vous si besoin.
              </p>
              <p className="mt-10 text-sm text-gray-300">Zones d’intervention</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {zones.map((z) => (
                  <li key={z.slug}>
                    <Link
                      href={`/agence-web/${z.slug}`}
                      className="inline-flex h-10 items-center rounded-full border border-white/30 bg-gray-900/40 px-4 text-[15px] text-white transition-colors duration-150 hover:border-white hover:bg-white hover:text-gray-900"
                    >
                      {z.nom}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-xs text-gray-400">
                Photo : Krzysztof,{' '}
                <a
                  href="https://unsplash.com/photos/an-ancient-roman-amphitheater-Gj6xH5v5UPU"
                  className="underline underline-offset-2 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unsplash
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Un projet ? Une question ?"
        text="L’audit est gratuit et sans engagement. On répond sous 24 heures."
        href="/audit"
        label="Demander un audit gratuit"
      />
    </>
  );
}
