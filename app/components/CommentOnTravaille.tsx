'use client';

import { MessageCircle, Hammer, UserCheck } from 'lucide-react';
import { useFlipCard } from '../hooks/useFlipCard';

const etapes = [
  {
    title: 'On discute',
    desc: "Vous décrivez votre activité et le problème à résoudre. Pas besoin de savoir ce que vous voulez techniquement — c'est notre rôle de traduire ça en solution.",
    icon: <MessageCircle className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: 'On construit',
    desc: "On développe l'application par étapes, avec des points réguliers. Vous voyez l'avancement, vous validez, vous ajustez.",
    icon: <Hammer className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: 'Vous prenez la main',
    desc: "Livraison, formation, documentation. Et je reste disponible après — vous n'êtes pas seul une fois le projet terminé.",
    icon: <UserCheck className="w-8 h-8" strokeWidth={1.5} />,
  },
];

export default function CommentOnTravaille() {
  useFlipCard();

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {etapes.map((etape, idx) => (
        <div key={idx} className="flip-card h-52 cursor-pointer">
          <div className="flip-card-inner rounded-lg">

            {/* FACE AVANT — icône + titre */}
            <div className="flip-card-front bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center gap-3 p-6 text-center">
              <span className="text-gray-900">{etape.icon}</span>
              <h3 className="text-base font-bold text-gray-900">{etape.title}</h3>
              <span className="text-xs text-gray-400">Toucher pour en savoir plus</span>
            </div>

            {/* FACE ARRIÈRE — description */}
            <div className="flip-card-back bg-gray-900 text-white rounded-lg flex flex-col justify-center p-6">
              <h4 className="text-sm font-bold mb-3">{etape.title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{etape.desc}</p>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
