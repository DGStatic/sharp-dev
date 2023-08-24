import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
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
    boxShadow: ['hover'],
  }
}
export default config
