import ServicePage from '../../components/site/ServicePage';
import { pageMetadata } from '../../lib/site';

const description =
  'AtelierCode développe des applications et outils de gestion sur mesure pour les entreprises à Nîmes et en Occitanie. Tableau de bord, suivi de flotte, portail client. Audit gratuit.';

export const metadata = pageMetadata({
  title: 'Applications métier sur mesure — AtelierCode Nîmes',
  description,
  path: '/services/applications-metier',
});

export default function ApplicationsMetierPage() {
  return (
    <ServicePage
      slug="applications-metier"
      h1="Applications et outils métier sur mesure"
      schemaDescription={description}
      intro={
        <p>
          Un outil interne adapté à votre activité, c’est souvent ce qui fait gagner du temps là où le tableur ne suffit plus. On développe des applications sur mesure pour les équipes qui ont des besoins spécifiques : gestion, suivi, coordination, reporting.
        </p>
      }
      listTitle="Ce qu’on peut construire"
      items={[
        'Tableaux de bord et reporting en temps réel',
        'Applications de suivi de flotte ou d’équipes terrain',
        'Systèmes de réservation avec gestion des disponibilités',
        'Portails clients avec espace personnalisé',
        'Outils de gestion de commandes ou de stocks',
        'Formulaires métier connectés à votre base de données',
      ]}
      approachTitle="Comment ça se passe"
      approach={
        <p>
          Chaque projet commence par un audit de vos processus actuels. On identifie ce qui ralentit l’équipe, ce qui se fait encore à la main, ce qui peut être simplifié. On définit ensuite l’outil qui correspond, pas plus, pas moins, et on construit.
        </p>
      }
      cta={{ label: 'Parler de votre projet', href: '/contact' }}
      ctaBannerTitle="Un outil interne en tête ?"
    />
  );
}
