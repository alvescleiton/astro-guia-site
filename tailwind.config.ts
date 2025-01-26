import type { Config } from 'tailwindcss'

const colors = {
  background: 'var(--background)',
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
  foreground: 'var(--foreground)',
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
