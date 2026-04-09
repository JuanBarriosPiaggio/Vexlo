import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        'surface-2': '#1a1a1a',
        'surface-3': '#242424',
        'border-dark': '#2a2a2a',
        primary: {
          DEFAULT: '#d97706',
          light: '#f59e0b',
          dark: '#b45309',
        },
        'text-base': '#e8e8e8',
        'text-muted': '#888888',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      animation: {
        'float': 'floatBadge 4s ease-in-out infinite',
        'float-delayed': 'floatBadge 4s 1s ease-in-out infinite',
        'hero-glow': 'heroGlowPulse 6s ease-in-out infinite',
      },
      keyframes: {
        floatBadge: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        heroGlowPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
export default config
