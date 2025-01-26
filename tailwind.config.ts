import type { Config } from 'tailwindcss'

const colors = {
  background: 'var(--background)',
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
  foreground: 'var(--foreground)',

  'mega-sena': '#2f994f',
  'dupla-sena': '#bf194e',
  lotomania: '#F78100',
  quina: '#5124c1',
  'loteria-federal': '#0071a2',
  loteca: '#de3634',
  lotofacil: '#930989',
  timemania: '#d1c138',
  'dia-de-sorte': '#cb852b',
  'super-sete': '#a8cf45',
  'mais-milionaria': '#1d1f51',
}

const safelist = [
  {
    pattern: new RegExp(`.+-(${Object.keys(colors).join('|')})$`),
  },
]

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
  safelist,
}
export default config
