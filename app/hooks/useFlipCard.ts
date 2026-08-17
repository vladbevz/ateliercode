'use client';
import { useEffect } from 'react';

export function useFlipCard() {
  useEffect(() => {
    const cards = document.querySelectorAll('.flip-card');
    const handleTouch = (e: Event) => {
      const card = e.currentTarget as HTMLElement;
      card.classList.toggle('flipped');
    };
    cards.forEach((card) => {
      card.addEventListener('click', handleTouch);
    });
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('click', handleTouch);
      });
    };
  }, []);
}
