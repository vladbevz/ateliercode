import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Clock, Phone, BarChart3,
  Users, Truck, Wrench, ClipboardList, Package,
  CalendarDays, UserCircle, FileText, TrendingUp, HardHat,
  ArrowRight,
} from 'lucide-react';
import AnimateIn from '../components/AnimateIn';

export const metadata: Metadata = {
  title: 'Application web sur mesure à Nîmes',
  description:
    "AtelierCode développe des applications web sur mesure à Nîmes : gestion d'équipes, automatisation, suivi en temps réel. Pensé pour votre métier. Devis gratuit.",
  keywords: [
    'application web Nîmes',
    'développeur application web Nîmes',
    'application web sur mesure Nîmes',
    'création application web Nîmes',
    'application métier Nîmes',
    'logiciel sur mesure Nîmes',
    'gestion équipes terrain Nîmes',
    'automatisation processus Nîmes',
    'application web Gard',
  ].join(', '),
  openGraph: {
    title: 'Application web sur mesure à Nîmes — AtelierCode',
    description:
      "Automatisation, gestion d'équipes, suivi en temps réel — on construit l'outil qui correspond exactement à votre fonctionnement.",
    url: 'https://www.ateliercode.fr/application-web-nimes',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Application web sur mesure à Nîmes — AtelierCode',
    description:
      "Automatisation, gestion d'équipes, suivi en temps réel — on construit l'outil qui correspond exactement à votre fonctionnement.",
  },
  alternates: {
    canonical: 'https://www.ateliercode.fr/application-web-nimes',
  },
};

const problemes = [
  {
    icon: <Clock className="w-5 h-5" />,
    phrase: 'Vous perdez des heures sur des tâches répétitives.',
    desc: "Saisies manuelles, copier-coller entre fichiers, mises à jour à la main — des tâches qu'un outil bien conçu ferait en quelques secondes.",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    phrase: 'Vos équipes vous appellent pour tout.',
    desc: "Planning, pannes, informations du jour, confirmations — tout passe par vous. Vous ne pouvez pas être partout à la fois, et l'information se perd en route.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    phrase: 'Vous pilotez à l\'aveugle.',
    desc: 'Les chiffres arrivent trop tard — fin de semaine, fin de mois. Quand vous savez ce qui s\'est passé, il est souvent trop tard pour décider.',
  },
];

const exemplesGestion = [
  { icon: <Users className="w-4 h-4" />, label: 'Suivi des heures travaillées et des congés' },
  { icon: <Truck className="w-4 h-4" />, label: 'Outil de gestion pour équipes terrain' },
  { icon: <Wrench className="w-4 h-4" />, label: 'Suivi des interventions (plombiers, électriciens, techniciens)' },
  { icon: <ClipboardList className="w-4 h-4" />, label: 'Rapport journalier depuis le téléphone' },
  { icon: <Package className="w-4 h-4" />, label: 'Gestion des stocks en temps réel' },
];

const exemplesClients = [
  { icon: <CalendarDays className="w-4 h-4" />, label: 'Système de réservation ou de prise de rendez-vous' },
  { icon: <UserCircle className="w-4 h-4" />, label: 'Espace client ou portail partenaire' },
  { icon: <FileText className="w-4 h-4" />, label: 'Outil de devis ou de facturation automatisé' },
  { icon: <TrendingUp className="w-4 h-4" />, label: 'Tableau de bord de rentabilité par projet' },
  { icon: <HardHat className="w-4 h-4" />, label: 'Suivi de chantiers ou de projets en cours' },
];

const etapes = [
  {
    title: '01 — On discute',
    desc: 'Vous décrivez votre activité et le problème à résoudre. Pas besoin de savoir ce que vous voulez techniquement — c\'est notre rôle de traduire ça en solution.',
  },
  {
    title: '02 — On construit',
    desc: "On développe l'application par étapes, avec des points réguliers. Vous voyez l'avancement, vous validez, vous ajustez.",
  },
  {
    title: '03 — Vous prenez la main',
    desc: 'Livraison, formation, documentation. Et je reste disponible après — vous n\'êtes pas seul une fois le projet terminé.',
  },
];

export default function ApplicationWebNimesPage() {
  return (
    <section className="relative bg-white">

      {/* ─── 1. HERO ─── */}
      <div className="min-h-screen flex items-center border-b border-gray-200 py-16">
        <div className="container mx-auto px-4 text-center w-full">
          <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-6 animate-fade-up">
            Développeur indépendant · Nîmes, Gard (30)
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Une application pensée pour votre métier,<br />pas pour un autre.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            Automatisation, gestion d&apos;équipes, suivi en temps réel — on construit l&apos;outil qui correspond exactement à votre fonctionnement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8 animate-fade-up" style={{ animationDelay: '250ms' }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-150"
            >
              Décrire mon projet
            </Link>
            <Link
              href="#cas-concret"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-200 text-gray-700 rounded-md font-medium hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] transition-all duration-150"
            >
              Voir un exemple
            </Link>
          </div>
          <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mt-6 animate-fade-up" style={{ animationDelay: '300ms' }}>
            Déplacement gratuit · Maquette offerte · Devis sous 24h
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">

        {/* ─── 2. LES 3 PROBLÈMES ─── */}
        <div className="py-14 md:py-20">
          <AnimateIn className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problemes.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6">
                <div className="w-10 h-10 rounded-md bg-gray-900 text-white flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <p className="font-bold text-gray-900 mb-2">{item.phrase}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </AnimateIn>
        </div>

        {/* ─── 3. CE QU'ON PEUT CONSTRUIRE ─── */}
        <div className="pb-20 md:pb-28">
          <AnimateIn className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ce qu&apos;on peut construire pour vous.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Chaque application est différente. Voici des exemples de ce qu&apos;on développe — la vôtre sera pensée pour votre fonctionnement précis.
            </p>
          </AnimateIn>

          <AnimateIn className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto" delay={100}>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Gestion & terrain</p>
              <ul className="space-y-4">
                {exemplesGestion.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-gray-400 shrink-0">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Clients & pilotage</p>
              <ul className="space-y-4">
                {exemplesClients.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-gray-400 shrink-0">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn className="text-center mt-12" delay={150}>
            <p className="text-gray-500 max-w-xl mx-auto mb-4">
              Vous avez un besoin qui ne figure pas dans cette liste ?
              C&apos;est souvent le cas — et c&apos;est précisément pour ça qu&apos;on travaille sur mesure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:gap-3 transition-all"
            >
              Décrire mon projet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateIn>
        </div>

        {/* ─── 4. CAS CONCRET ─── */}
        <div id="cas-concret" className="pb-20 md:pb-28 scroll-mt-24">
          <AnimateIn className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Un exemple réel.
            </h2>
          </AnimateIn>

          <AnimateIn className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto items-start" delay={100}>
            <div className="lg:col-span-3 space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Un patron de transport gérait 20 chauffeurs sur la route. Les pannes arrivaient par appel. Le planning par SMS. La rentabilité par tournée — il l&apos;avait une fois par mois, dans un rapport de son donneur d&apos;ordre.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Il pilotait une flotte entière dans sa tête.
              </p>
              <p className="text-gray-600 leading-relaxed">
                On a construit une application avec deux interfaces : une app mobile pour les chauffeurs — démarrer une tournée, signaler une panne avec photo, saisir le carburant. Un dashboard web pour lui — alertes en temps réel, planning de toute l&apos;équipe, rentabilité par chauffeur.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Résultat : les décisions se prennent en 30 secondes. Les informations arrivent avant qu&apos;il ait à les demander.
              </p>
              <Link
                href="/blog/application-web-gestion-flotte-transport"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:gap-3 transition-all pt-2"
              >
                Lire l&apos;article complet
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">20 chauffeurs</p>
                <p className="text-xs text-gray-400 uppercase font-mono tracking-widest">gérés depuis un seul écran</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">&lt; 30 secondes</p>
                <p className="text-xs text-gray-400 uppercase font-mono tracking-widest">pour signaler et traiter une panne</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Temps réel</p>
                <p className="text-xs text-gray-400 uppercase font-mono tracking-widest">au lieu d&apos;un rapport mensuel</p>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* ─── 5. COMMENT ÇA SE PASSE ─── */}
        <div className="pb-20 md:pb-28">
          <AnimateIn className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Comment on travaille.
            </h2>
          </AnimateIn>

          <AnimateIn className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" delay={100}>
            {etapes.map((etape, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-mono text-sm font-bold text-gray-900 mb-3 tracking-wide">{etape.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{etape.desc}</p>
              </div>
            ))}
          </AnimateIn>
        </div>

        {/* ─── 6. CTA FINAL ─── */}
        <div className="pb-24">
          <AnimateIn className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">
              Parlons de votre projet
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
              Vous avez un problème à résoudre.<br />On peut construire l&apos;outil qui le règle.
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
              Décrivez-moi votre activité et ce qui vous prend trop de temps. Je vous réponds sous 24h.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-gray-900 text-white rounded-md font-semibold text-lg hover:bg-gray-800 active:scale-[0.98] transition-all duration-150"
            >
              Décrire mon projet
            </Link>
            <p className="text-sm text-gray-400 mt-4 text-center font-mono uppercase tracking-widest">
              Déplacement gratuit · Maquette offerte · Sans engagement
            </p>
          </AnimateIn>
        </div>

      </div>
    </section>
  );
}
