export interface VilleData {
  slug: string;
  nom: string;
  codePostal: string;
  departement: string;
  distanceKm: number;
  dureeTrajet: string;
  contexteLocal: string;
  metaDescription: string;
}

export const villes: VilleData[] = [
  {
    slug: 'ales',
    nom: 'Alès',
    codePostal: '30100',
    departement: 'Gard',
    distanceKm: 45,
    dureeTrajet: '45 minutes via l\'A20/N106',
    contexteLocal: 'Sous-préfecture du Gard et ancien bassin minier, aujourd\'hui porte des Cévennes, avec un commerce de centre-ville actif et la zone d\'activité de Val Fleuri.',
    metaDescription: 'AtelierCode conçoit des sites vitrine, e-commerce et applications web sur mesure pour les commerçants et professionnels d\'Alès et du bassin alésien.',
  },
  {
    slug: 'uzes',
    nom: 'Uzès',
    codePostal: '30700',
    departement: 'Gard',
    distanceKm: 25,
    dureeTrajet: '30 minutes via la D981',
    contexteLocal: 'Premier duché de France, ville touristique et gastronomique connue pour son marché du samedi, ses antiquaires et ses artisans du centre historique.',
    metaDescription: 'AtelierCode crée des sites vitrine et e-commerce sur mesure pour les commerçants, artisans et professionnels du tourisme à Uzès.',
  },
  {
    slug: 'bagnols-sur-ceze',
    nom: 'Bagnols-sur-Cèze',
    codePostal: '30200',
    departement: 'Gard',
    distanceKm: 55,
    dureeTrajet: '55 minutes via l\'A9/D6086',
    contexteLocal: 'Ville marquée par la proximité du site nucléaire de Marcoule (CEA, Orano), avec un tissu économique orienté ingénierie et sous-traitance industrielle, en plus de son centre-ville commerçant.',
    metaDescription: 'AtelierCode développe des sites web et applications sur mesure pour les entreprises et commerçants de Bagnols-sur-Cèze et du Gard rhodanien.',
  },
  {
    slug: 'beaucaire',
    nom: 'Beaucaire',
    codePostal: '30300',
    departement: 'Gard',
    distanceKm: 25,
    dureeTrajet: '25 minutes via la D999',
    contexteLocal: 'Ancienne ville de foire commerciale au bord du Rhône, face à Tarascon, avec un centre historique et un tissu d\'artisans et de commerces de proximité.',
    metaDescription: 'AtelierCode conçoit des sites vitrine et e-commerce sur mesure pour les artisans et commerçants de Beaucaire.',
  },
  {
    slug: 'le-grau-du-roi',
    nom: 'Le Grau-du-Roi',
    codePostal: '30240',
    departement: 'Gard',
    distanceKm: 30,
    dureeTrajet: '30 minutes via la D979',
    contexteLocal: 'Station balnéaire et port de pêche de la côte camarguaise, avec une économie très saisonnière portée par le tourisme et la plaisance (Port Camargue).',
    metaDescription: 'AtelierCode crée des sites vitrine et e-commerce pour les professionnels du tourisme, de la restauration et du commerce au Grau-du-Roi.',
  },
  {
    slug: 'vauvert',
    nom: 'Vauvert',
    codePostal: '30600',
    departement: 'Gard',
    distanceKm: 25,
    dureeTrajet: '25 minutes via la D6572',
    contexteLocal: 'Ville du vignoble des Costières de Nîmes, en lisière de Camargue. AtelierCode y a déjà accompagné Le 438, restaurant local, avec +36 % de réservations depuis le lancement de son site.',
    metaDescription: 'AtelierCode crée des sites vitrine et e-commerce sur mesure pour les restaurateurs, commerçants et artisans de Vauvert.',
  },
  {
    slug: 'saint-gilles',
    nom: 'Saint-Gilles',
    codePostal: '30800',
    departement: 'Gard',
    distanceKm: 20,
    dureeTrajet: '20 minutes via la D42',
    // TODO: vérifier — préciser le tissu économique local (agriculture, tourisme lié à l'abbatiale, commerces de centre-ville) avant publication finale
    contexteLocal: 'Ville proche de la Camargue, étape historique sur le chemin de Saint-Jacques-de-Compostelle.',
    metaDescription: 'AtelierCode conçoit des sites vitrine et e-commerce sur mesure pour les commerçants et professionnels de Saint-Gilles.',
  },
  {
    slug: 'montpellier',
    nom: 'Montpellier',
    codePostal: '34000',
    departement: 'Hérault',
    distanceKm: 50,
    dureeTrajet: '45 minutes via l\'A9',
    contexteLocal: 'Préfecture de l\'Hérault et pôle French Tech, avec un tissu dense de startups, indépendants et professions libérales — un marché plus concurrentiel où un site rapide et bien référencé fait la différence.',
    metaDescription: 'AtelierCode développe des sites vitrine, e-commerce et applications web sur mesure pour les indépendants et petites entreprises de Montpellier.',
  },
  {
    slug: 'avignon',
    nom: 'Avignon',
    codePostal: '84000',
    departement: 'Vaucluse',
    distanceKm: 45,
    dureeTrajet: '45 minutes via l\'A9',
    contexteLocal: 'Cité historique des papes classée à l\'UNESCO, à l\'économie tournée vers le tourisme, la culture (Festival d\'Avignon) et les commerces de centre-ville.',
    metaDescription: 'AtelierCode crée des sites vitrine et e-commerce sur mesure pour les commerçants, artisans et professionnels du tourisme à Avignon.',
  },
];

export function getVilleBySlug(slug: string): VilleData | undefined {
  return villes.find((v) => v.slug === slug);
}
