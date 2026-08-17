'use client';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

export default function ScrollRevealProvider() {
  useScrollReveal();
  useCountUp();
  return null;
}
