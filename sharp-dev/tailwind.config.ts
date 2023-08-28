import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'br' : '5px 5px 2px 1px rgba(0, 0, 0, 0.5)',
        'bl' : '-5px 5px 2px 1px rgba(0, 0, 0, 0.5)',
        'tr' : '5px -5px 2px 1px rgba(0, 0, 0, 0.5)',
        'tl' : '-5px -5px 2px 1px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
  variants: {
  }
}
export default config
