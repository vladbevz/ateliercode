'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Wrench, FileText, RotateCcw, ArrowRight } from 'lucide-react';
import AnimateIn from './AnimateIn';

type Recommendation = 'vitrine' | 'ecommerce' | 'app';

const recommendations: Record<Recommendation, {
  name: string;
  price: string;
  icon: React.ReactNode;
  reason: string;
  features: string[];
}> = {
  vitrine: {
    name: 'Site Vitrine',
    price: 'dès 799 €',
    icon: <FileText className="w-6 h-6" />,
    reason: "Vous présentez votre activité sans vente en ligne ni outil sur mesure — c'est exactement ce que couvre ce forfait, livré en 7 à 10 jours.",
    features: ['4 à 6 pages personnalisées', 'SEO local optimisé (Google Maps)', '1 mois de suivi & corrections inclus'],
  },
  ecommerce: {
    name: 'E-commerce',
    price: 'dès 1290 €',
    icon: <ShoppingCart className="w-6 h-6" />,
    reason: 'Vous voulez vendre en ligne — ce forfait inclut une boutique complète avec paiement sécurisé et gestion de catalogue.',
    features: ['Paiement sécurisé Stripe', 'Catalogue produits & gestion stock', 'SEO e-commerce optimisé'],
  },
  app: {
    name: 'Application web',
    price: 'sur devis',
    icon: <Wrench className="w-6 h-6" />,
    reason: "Un espace client, une réservation en temps réel ou un outil interne demandent du développement sur mesure — c'est le terrain de ce forfait.",
    features: ['Back-end, API, authentification', 'Dashboard & interface admin', 'Tarif estimé selon la complexité'],
  },
};

export default function TarifsWizard() {
  const [vendOnline, setVendOnline] = useState<boolean | null>(null);
  const [needsCustomTool, setNeedsCustomTool] = useState<boolean | null>(null);

  const recommendation: Recommendation | null =
    vendOnline === true ? 'ecommerce'
    : vendOnline === false && needsCustomTool === true ? 'app'
    : vendOnline === false && needsCustomTool === false ? 'vitrine'
    : null;

  const reset = () => {
    setVendOnline(null);
    setNeedsCustomTool(null);
  };

  return (
    <AnimateIn className="max-w-3xl mx-auto mb-24">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-10">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Quel forfait me correspond ?</h3>
          <p className="text-sm text-gray-500">Répondez à 1 ou 2 questions pour avoir une recommandation.</p>
        </div>

        {recommendation === null ? (
          <div className="space-y-6">
            {/* Question 1 */}
            <div>
              <p className="text-center font-medium text-gray-800 mb-3">
                Allez-vous vendre des produits en ligne ?
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setVendOnline(true)}
                  className="px-6 py-2.5 rounded-md border-2 border-gray-200 hover:border-gray-900 hover:bg-white font-medium text-sm transition-all duration-150"
                >
                  Oui
                </button>
                <button
                  onClick={() => setVendOnline(false)}
                  className="px-6 py-2.5 rounded-md border-2 border-gray-200 hover:border-gray-900 hover:bg-white font-medium text-sm transition-all duration-150"
                >
                  Non
                </button>
              </div>
            </div>

            {/* Question 2 — only if not e-commerce */}
            {vendOnline === false && (
              <div className="pt-6 border-t border-gray-200">
                <p className="text-center font-medium text-gray-800 mb-3">
                  Avez-vous besoin d&apos;un espace client, d&apos;une réservation en temps réel, ou d&apos;un outil interne sur mesure ?
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => setNeedsCustomTool(true)}
                    className="px-6 py-2.5 rounded-md border-2 border-gray-200 hover:border-gray-900 hover:bg-white font-medium text-sm transition-all duration-150"
                  >
                    Oui
                  </button>
                  <button
                    onClick={() => setNeedsCustomTool(false)}
                    className="px-6 py-2.5 rounded-md border-2 border-gray-200 hover:border-gray-900 hover:bg-white font-medium text-sm transition-all duration-150"
                  >
                    Non, juste présenter mon activité
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-md bg-gray-900 text-white flex items-center justify-center">
                  {recommendations[recommendation].icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xl font-bold text-gray-900">
                    Recommandé pour vous : {recommendations[recommendation].name}
                    <span className="text-gray-400 font-normal text-base ml-2">
                      {recommendations[recommendation].price}
                    </span>
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">
                    {recommendations[recommendation].reason}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {recommendations[recommendation].features.map((f, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5 mt-6">
              <button
                onClick={reset}
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Recommencer
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md font-semibold text-sm hover:bg-gray-800 active:scale-[0.98] transition-all duration-150 btn-sweep"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </AnimateIn>
  );
}
