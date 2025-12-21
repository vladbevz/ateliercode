// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
   darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Для v4 theme не обов'язковий, але може бути
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s ease infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }},
  },
  plugins: [],
}
export default config