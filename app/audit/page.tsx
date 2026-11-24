import Audit from '../components/Audit';
import FormContact from '../components/site/FormContact';
import { Container, JsonLd, Prose, Section, Split } from '../components/site/ui';
import { breadcrumbSchema, pageMetadata } from '../lib/site';

export const metadata = pageMetadata({
  title: 'Audit digital gratuit — site web et processus — AtelierCode Nîmes',
  description:
    'Audit gratuit de votre site web et de vos processus digitaux. Performances, SEO local, points d’amélioration. Résultats en 48h, sans engagement. AtelierCode, Nîmes.',
  path: '/audit',
});

const ANALYSE = [
  {
    title: 'Votre site web',
    body: 'Performances techniques (vitesse, mobile, Core Web Vitals), structure SEO, accessibilité, points de friction pour les visiteurs.',
  },
  {
    title: 'Votre visibilité locale',
    body: 'Fiche Google Business Profile, cohérence des informations sur les annuaires, avis et signaux de réputation.',
  },
  {
    title: 'Vos processus internes',
    optional: true,
    body: 'On regarde comment vous gérez vos opérations et on identifie ce qui pourrait être simplifié ou automatisé.',
  },
];

export default function AuditPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'Audit digital gratuit', path: '/audit' }])} />

      <section aria-labelledby="audit-title" className="bg-white pt-14 pb-20 md:pt-20 md:pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 lg:pt-4">
              <h1
                id="audit-title"
                className="text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-gray-900 text-balance"
              >
                Audit digital gratuit
              </h1>
              <Prose className="mt-8 md:text-xl">
                <p>
                  Avant de proposer quoi que ce soit, on regarde ce qui existe. En 48 heures, on analyse votre présence en ligne et vos outils actuels, et on vous remet un rapport sur ce qui fonctionne et ce qui peut être amélioré.
                </p>
              </Prose>
              <dl className="mt-10 grid grid-cols-3 border-t border-gray-200 pt-6 text-[15px]">
                <div>
                  <dt className="text-gray-500">Délai</dt>
                  <dd className="mt-1 font-medium text-gray-900">48 heures</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Prix</dt>
                  <dd className="mt-1 font-medium text-gray-900">Gratuit</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Engagement</dt>
                  <dd className="mt-1 font-medium text-gray-900">Aucun</dd>
                </div>
              </dl>
            </div>
            <div id="demande" className="lg:col-span-6 scroll-mt-24">
              <h2 className="sr-only">Demander mon audit</h2>
              <FormContact variant="audit" />
            </div>
          </div>
        </Container>
      </section>

      <Section tone="muted" labelledBy="analyse-title">
        <Split title="Ce qu’on analyse" id="analyse-title">
          <ul className="border-t border-gray-300">
            {ANALYSE.map((a) => (
              <li key={a.title} className="grid gap-2 border-b border-gray-300 py-7 md:grid-cols-[14rem_1fr] md:gap-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  {a.title}
                  {a.optional && <span className="block text-[15px] font-normal text-gray-500">Optionnel</span>}
                </h3>
                <p className="text-[17px] leading-relaxed text-gray-600">{a.body}</p>
              </li>
            ))}
          </ul>
        </Split>
      </Section>

      <Section labelledBy="recu-title">
        <Split title="Ce que vous recevez" id="recu-title">
          <Prose>
            <p>
              Un rapport structuré avec les points prioritaires, des recommandations concrètes, et si pertinent, une proposition d’accompagnement.
            </p>
            <p className="font-medium text-gray-900">Gratuit. Sans engagement.</p>
          </Prose>
          <a
            href="#demande"
            className="mt-8 inline-flex h-12 items-center rounded-md bg-gray-900 px-6 text-[15px] font-medium text-white transition-colors duration-150 hover:bg-gray-700"
          >
            Demander mon audit
          </a>
        </Split>
      </Section>

      <Section tone="muted">
        <Audit />
      </Section>
    </>
  );
}
