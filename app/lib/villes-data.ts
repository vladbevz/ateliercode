export interface VilleData {
  slug: string;
  nom: string;
  codePostal: string;
  departement: string;
  distanceKm: number;
  dureeTrajet: string;
  contexteLocal: string;
  metaDescription: string;
  contenuUnique: string[];
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
    contenuUnique: [
      'Alès, ancienne capitale du bassin minier cévenol, connaît depuis dix ans une reconversion économique active. La zone d\'activité de Val Fleuri concentre aujourd\'hui artisans, PME et commerces de services qui cherchent à développer leur clientèle en dehors du bouche-à-oreille. Le centre-ville, en cours de requalification, voit émerger de nouveaux commerces et professions libérales qui ont besoin d\'une présence en ligne sérieuse pour exister face aux enseignes nationales.',
      'Sous-préfecture du Gard avec près de 40 000 habitants dans l\'agglomération, Alès est aussi une ville de formation et de santé — CHU, lycées, écoles techniques — ce qui crée une demande réelle pour des sites de prise de rendez-vous, de présentation de services ou de formations en ligne.',
      'Je travaille avec des clients à Alès et dans le bassin alésien depuis le lancement d\'AtelierCode. La distance avec Nîmes (45 minutes) ne change rien au suivi : les échanges se font à distance ou en présentiel selon vos préférences, et le résultat est identique.',
    ],
  },
  {
    slug: 'uzes',
    nom: 'Uzès',
    codePostal: '30700',
    departement: 'Gard',
    distanceKm: 25,
    dureeTrajet: '30 minutes via la D981',
    contexteLocal: 'Premier duché de France, ville touristique et gastronomique connue pour son marché du samedi, ses antiquaires et ses artisans du centre historique.',
    metaDescription: 'AtelierCode crée des sites vitrine et e-commerce sur mesure pour les commerçants, artisans et professionnels du tourisme à Uzès. Devis gratuit sous 24h.',
    contenuUnique: [
      'Uzès est une ville à part dans le Gard. Premier duché de France, classée parmi les plus beaux détours de France, elle attire chaque semaine des milliers de visiteurs — notamment pour son marché provençal du samedi, l\'un des plus fréquentés de la région. Ce flux touristique représente une opportunité réelle pour les commerces et artisans locaux : un site bien référencé capte des clients qui cherchent en ligne avant même d\'arriver sur place.',
      'Les professionnels uzétiens — médecins, avocats, architectes, artisans d\'art — ont souvent besoin d\'une vitrine digitale qui soit à la hauteur de leur cadre. Pas un template générique, mais un site qui reflète l\'identité et le savoir-faire d\'une ville où la qualité est une exigence.',
      'À 25 km de Nîmes, Uzès est une zone d\'intervention naturelle pour AtelierCode. Je connais le tissu économique local et les attentes d\'une clientèle qui valorise l\'artisanat — y compris numérique.',
    ],
  },
  {
    slug: 'bagnols-sur-ceze',
    nom: 'Bagnols-sur-Cèze',
    codePostal: '30200',
    departement: 'Gard',
    distanceKm: 50,
    dureeTrajet: '50 minutes via l\'A9/D6086',
    contexteLocal: 'Ville marquée par la proximité du site nucléaire de Marcoule (CEA, Orano), avec un tissu économique orienté ingénierie et sous-traitance industrielle, en plus de son centre-ville commerçant.',
    metaDescription: 'AtelierCode développe des sites web et applications sur mesure pour les entreprises et commerçants de Bagnols-sur-Cèze et du Gard rhodanien.',
    contenuUnique: [
      'Bagnols-sur-Cèze est le deuxième pôle urbain du Gard, positionné dans la vallée du Rhône à la frontière avec l\'Ardèche et le Vaucluse. La proximité du CEA de Marcoule et des installations nucléaires de la région a généré un tissu dense de sous-traitants, de prestataires techniques et de PME industrielles qui ont souvent des besoins spécifiques : site institutionnel, intranet, application métier ou e-commerce B2B.',
      'La ville compte également un centre commercial actif et une zone artisanale développée. Les commerçants du centre-ville font face à la concurrence des enseignes périphériques : un site bien positionné sur Google Maps et optimisé pour les recherches locales peut faire une vraie différence.',
      'Bagnols-sur-Cèze se trouve à environ 50 km de Nîmes. J\'interviens sur place pour les projets qui le nécessitent, ou à distance pour ceux qui préfèrent travailler sans déplacement.',
    ],
  },
  {
    slug: 'beaucaire',
    nom: 'Beaucaire',
    codePostal: '30300',
    departement: 'Gard',
    distanceKm: 25,
    dureeTrajet: '25 minutes via la D999',
    contexteLocal: 'Ancienne ville de foire commerciale au bord du Rhône, face à Tarascon, avec un centre historique et un tissu d\'artisans et de commerces de proximité.',
    metaDescription: 'AtelierCode conçoit des sites vitrine et e-commerce sur mesure pour les artisans et commerçants de Beaucaire. Rapides, optimisés pour Google, devis gratuit.',
    contenuUnique: [
      'Beaucaire occupe une position stratégique aux portes de la Camargue, en face de Tarascon, à la frontière entre le Gard et les Bouches-du-Rhône. La ville est connue pour son histoire commerciale — ses foires médiévales en faisaient l\'une des places marchandes les plus importantes d\'Europe — et cette tradition entrepreneuriale persiste dans un tissu local actif.',
      'La zone commerciale de Beaucaire concentre de nombreux commerçants et artisans qui cherchent à toucher une clientèle qui dépasse les frontières du Gard. Un site e-commerce ou un site vitrine bien référencé permet d\'atteindre des clients de Tarascon, Arles ou Saint-Rémy sans frais supplémentaires.',
      'Beaucaire se trouve à 25 km de Nîmes, facilement accessible via la N113. Je peux me déplacer pour les rendez-vous si nécessaire.',
    ],
  },
  {
    slug: 'le-grau-du-roi',
    nom: 'Le Grau-du-Roi',
    codePostal: '30240',
    departement: 'Gard',
    distanceKm: 45,
    dureeTrajet: '40 minutes via la D979',
    contexteLocal: 'Station balnéaire et port de pêche de la côte camarguaise, avec une économie très saisonnière portée par le tourisme et la plaisance (Port Camargue).',
    metaDescription: 'AtelierCode crée des sites vitrine et e-commerce pour les professionnels du tourisme, de la restauration et du commerce au Grau-du-Roi. Devis gratuit sous 24h.',
    contenuUnique: [
      'Le Grau-du-Roi et Port-Camargue constituent le seul débouché maritime du Gard sur la Méditerranée. Station balnéaire très fréquentée en été — avec une population qui triple ou quadruple en juillet-août — la ville présente un profil économique particulier : des commerces, restaurants et hébergeurs qui ont neuf mois pour préparer leur saison estivale et trois mois pour en vivre.',
      'Dans ce contexte, un site bien référencé sur Google est indispensable. Les touristes cherchent en ligne : restaurant avec terrasse, location de vélos, crêperie au bord du canal, cours de voile. Être présent et visible sur ces requêtes, c\'est remplir sa salle ou son planning avant même l\'ouverture de saison.',
      'Le Grau-du-Roi se trouve à 45 km de Nîmes. Je travaille avec des professionnels du tourisme et de la restauration dans le secteur depuis le lancement d\'AtelierCode.',
    ],
  },
  {
    slug: 'vauvert',
    nom: 'Vauvert',
    codePostal: '30600',
    departement: 'Gard',
    distanceKm: 20,
    dureeTrajet: '20 minutes via la D6572',
    contexteLocal: 'Ville du vignoble des Costières de Nîmes, en lisière de Camargue. AtelierCode y a déjà accompagné Le 438, restaurant local, avec +36 % de réservations depuis le lancement de son site.',
    metaDescription: 'AtelierCode crée des sites vitrine et e-commerce sur mesure pour les restaurateurs, commerçants et artisans de Vauvert, avec un suivi local et un devis gratuit.',
    contenuUnique: [
      'Vauvert est une commune dynamique de la Petite Camargue gardoise, au cœur d\'un territoire marqué par l\'agriculture, la viticulture et l\'élevage. Mais la ville accueille également des commerces de proximité, des professions libérales et des artisans qui servent une population locale de plus de 11 000 habitants.',
      'Les entrepreneurs de Vauvert font souvent face au même défi : leur activité est connue localement, mais ils peinent à attirer des clients des communes voisines — Aigues-Mortes, Le Grau-du-Roi, Vergèze, Sommières. Un site référencé sur leur zone de chalandise réelle change la donne.',
      'Vauvert se trouve à 20 km de Nîmes. C\'est une zone d\'intervention que je connais bien — j\'y ai déjà livré des projets pour des professionnels locaux.',
    ],
  },
  {
    slug: 'saint-gilles',
    nom: 'Saint-Gilles',
    codePostal: '30800',
    departement: 'Gard',
    distanceKm: 20,
    dureeTrajet: '20 minutes via la D42',
    contexteLocal: 'Ville porte de la Camargue, connue pour son abbatiale classée au patrimoine mondial de l\'UNESCO et son marché agricole actif, au carrefour de Nîmes, Arles et le littoral.',
    metaDescription: 'AtelierCode conçoit des sites vitrine et e-commerce sur mesure pour les commerçants et professionnels de Saint-Gilles, rapides et optimisés pour Google.',
    contenuUnique: [
      'Saint-Gilles est une commune gardoise à la porte de la Camargue, connue pour son abbatiale classée au patrimoine mondial de l\'UNESCO et pour son marché agricole actif. Carrefour entre Nîmes, Arles et le littoral, la ville bénéficie d\'une position géographique qui lui permet d\'attirer une clientèle venue de plusieurs directions.',
      'Le tissu économique local mêle agriculture, artisanat, commerces de proximité et petites entreprises de services. Des secteurs qui ont souvent en commun une même problématique : être visible sur Google pour les recherches locales, sans avoir le budget des grandes agences.',
      'Saint-Gilles se trouve à 20 km de Nîmes, facilement accessible via la N572. Je peux intervenir en présentiel ou à distance selon vos préférences.',
    ],
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
    contenuUnique: [
      'Montpellier est la huitième ville de France et l\'une des métropoles qui croît le plus vite en Europe. Son écosystème économique est dominé par le numérique, la santé, l\'enseignement supérieur et une scène startup active — un terrain favorable pour des projets web ambitieux.',
      'La concurrence y est plus forte qu\'à Nîmes, ce qui rend la qualité technique encore plus déterminante. Un site rapide, bien référencé et pensé pour la conversion n\'est pas un luxe dans ce marché — c\'est un minimum. React et Next.js donnent ici un avantage concret sur les sites WordPress que l\'on trouve en masse chez les prestataires locaux.',
      'Je travaille avec des clients montpelliérains sur des projets variés : sites vitrine pour professions libérales, boutiques e-commerce, applications web métier. À 50 km de Nîmes, Montpellier fait partie de ma zone d\'intervention naturelle en Occitanie.',
    ],
  },
  {
    slug: 'avignon',
    nom: 'Avignon',
    codePostal: '84000',
    departement: 'Vaucluse',
    distanceKm: 45,
    dureeTrajet: '45 minutes via l\'A9',
    contexteLocal: 'Cité historique des papes classée à l\'UNESCO, à l\'économie tournée vers le tourisme, la culture (Festival d\'Avignon) et les commerces de centre-ville.',
    metaDescription: 'AtelierCode crée des sites vitrine et e-commerce sur mesure pour les commerçants, artisans et professionnels du tourisme à Avignon. Devis gratuit sous 24h.',
    contenuUnique: [
      'Avignon est une ville à double visage : capitale culturelle mondiale pendant trois semaines en juillet avec son Festival, et ville active le reste de l\'année avec un tissu commercial et tertiaire solide. Préfecture du Vaucluse, elle concentre administrations, professions libérales, commerces et une économie touristique qui génère des besoins web spécifiques.',
      'Pour les professionnels avignonnais, le référencement local est particulièrement stratégique : la ville attire des visiteurs qui cherchent en ligne avant d\'arriver (hébergements, restaurants, activités, services). Être présent sur ces requêtes avec un site rapide et bien positionné, c\'est capter une clientèle que vous n\'auriez pas autrement.',
      'Avignon se trouve à 45 km de Nîmes. Je travaille avec des clients du Vaucluse et peux me déplacer pour les rendez-vous si nécessaire. Tous les échanges peuvent aussi se faire à distance.',
    ],
  },
];

export function getVilleBySlug(slug: string): VilleData | undefined {
  return villes.find((v) => v.slug === slug);
}
