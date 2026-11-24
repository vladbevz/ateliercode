import ServicePage from '../../components/site/ServicePage';
import { pageMetadata } from '../../lib/site';

const description =
  'AtelierCode automatise vos processus métier et intègre des agents IA pour les entreprises en Occitanie. Qualification de leads, traitement de documents, intégrations. Audit gratuit.';

export const metadata = pageMetadata({
  title: 'Automatisation et agents IA pour entreprises — AtelierCode Nîmes',
  description,
  path: '/services/automatisation-ia',
});

export default function AutomatisationIaPage() {
  return (
    <ServicePage
      slug="automatisation-ia"
      h1="Automatisation et agents IA pour votre activité"
      schemaDescription={description}
      intro={
        <p>
          Certaines tâches se répètent chaque semaine sans nécessiter d’intervention humaine. Qualification de prospects entrants, envoi de notifications, traitement de formulaires, génération de documents, synchronisation entre logiciels : ces flux peuvent tourner seuls.
        </p>
      }
      listTitle="Ce qu’on fait"
      items={[
        'Automatisation de workflows (n8n, Zapier, développement sur mesure)',
        'Agents IA pour qualification, réponse et routage automatique',
        'Traitement automatique de documents et extraction de données',
        'Intégrations entre logiciels existants',
        'Notifications et alertes automatisées',
      ]}
      approachTitle="Ce que ça change"
      approach={
        <p>
          Moins de temps passé sur des tâches répétitives. Des processus qui tournent même quand l’équipe est occupée ailleurs. Et des données disponibles sans avoir à les saisir à la main.
        </p>
      }
      cta={{ label: 'Voir si votre cas s’y prête', href: '/contact' }}
      ctaBannerTitle="Une tâche qui revient chaque semaine ?"
    />
  );
}
