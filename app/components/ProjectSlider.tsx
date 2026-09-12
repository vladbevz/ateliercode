'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type SliderProject = { name: string; category: string; image: string };

export default function ProjectSlider({ projects }: { projects: SliderProject[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden animate-fade-up" style={{ animationDelay: '300ms' }}>
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-gray-50 border-b border-gray-200">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="font-mono text-xs text-gray-400 ml-2 flex-1 text-center">
          ateliercode.fr
        </span>
      </div>

      {/* Slides */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, idx) => (
            <div key={idx} className="relative w-full shrink-0 aspect-video bg-gray-50">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Prev / Next */}
        <button
          onClick={prev}
          aria-label="Projet précédent"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-white border border-gray-200 rounded-md flex items-center justify-center hover:border-gray-400 active:scale-95 transition-all duration-150"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={next}
          aria-label="Projet suivant"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-white border border-gray-200 rounded-md flex items-center justify-center hover:border-gray-400 active:scale-95 transition-all duration-150"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Caption + dots */}
      <div className="px-4 py-3 bg-white border-t border-gray-200 flex items-center justify-between">
        <div>
          <span className="text-sm font-medium text-gray-900">{projects[current].name}</span>
          <span className="text-xs text-gray-400 ml-2">{projects[current].category}</span>
        </div>
        <div className="flex gap-1.5">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Projet ${idx + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === current ? 'bg-gray-900' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
