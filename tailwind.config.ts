// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Для v4 theme не обов'язковий, але може бути
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config