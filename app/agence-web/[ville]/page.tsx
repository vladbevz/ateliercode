import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { villes, getVilleBySlug } from '../../lib/villes-data';
import AgenceWebVilleContent from '../../components/AgenceWebVilleContent';

type Props = { params: Promise<{ ville: string }> };

export function generateStaticParams() {
  return villes.map((v) => ({ ville: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville: slug } = await params;
  const ville = getVilleBySlug(slug);
  if (!ville) return {};

  const title = `Agence web ${ville.nom} — Sites, E-commerce & Applications React`;

  return {
    title,
    description: ville.metaDescription,
    alternates: {
      canonical: `https://www.ateliercode.fr/agence-web/${ville.slug}`,
    },
    openGraph: {
      title: `${title} | AtelierCode`,
      description: ville.metaDescription,
      url: `https://www.ateliercode.fr/agence-web/${ville.slug}`,
    },
  };
}

export default async function AgenceWebVillePage({ params }: Props) {
  const { ville: slug } = await params;
  const ville = getVilleBySlug(slug);
  if (!ville) notFound();

  return <AgenceWebVilleContent ville={ville} />;
}
