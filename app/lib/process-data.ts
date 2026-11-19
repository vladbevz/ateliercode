import { Search, Palette, Code2, Rocket, LucideIcon } from 'lucide-react';

export interface ProcessStep {
  n: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  icon: LucideIcon;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    n: '01',
    title: 'Analyse & Stratégie',
    shortDescription: "On étudie votre marché, vos concurrents et vos objectifs pour créer une stratégie sur mesure.",
    fullDescription: 'On étudie votre marché, vos objectifs et vos concurrents pour définir une stratégie gagnante.',
    duration: '1–2 jours',
    icon: Search,
    details: [
      'Audit de votre positionnement',
      'Analyse des concurrents',
      'Définition des objectifs',
      'Proposition commerciale',
    ],
  },
  {
    n: '02',
    title: 'Design & UX',
    shortDescription: "Création d'une interface qui reflète votre image et guide vos visiteurs vers l'action.",
    fullDescription: "Création de maquettes qui reflètent votre image et optimisent l'expérience utilisateur.",
    duration: '3–4 jours',
    icon: Palette,
    details: [
      'Wireframes interactifs',
      'Design unique et personnalisé',
      'Validation client',
      'Adaptation mobile',
    ],
  },
  {
    n: '03',
    title: 'Développement',
    shortDescription: 'Code propre, performant et optimisé SEO. Votre site est rapide et visible sur Google.',
    fullDescription: 'Intégration avec les dernières technologies pour un site rapide, sécurisé et évolutif.',
    duration: '5–7 jours',
    icon: Code2,
    details: [
      'Code propre et maintenable',
      'Optimisation SEO',
      'Tests de performance',
      'Sécurisation des données',
    ],
  },
  {
    n: '04',
    title: 'Lancement & Suivi',
    shortDescription: 'Mise en ligne, formation et accompagnement. On ne vous laisse pas tomber après la livraison.',
    fullDescription: 'Mise en ligne, formation et accompagnement pour une transition en douceur.',
    duration: '1–2 jours',
    icon: Rocket,
    details: [
      'Déploiement sur Vercel',
      'Configuration nom de domaine',
      "Formation à l'administration",
      'Support post-lancement',
    ],
  },
];
