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
        background: '#020403', // Very dark green-tinted black
        surface: '#0A120C', // Slightly lighter dark green for cards
        primary: {
          DEFAULT: '#00FFA3', // Cyber Neon Green
          light: '#5CFFC4',
          dark: '#00CC82',
        },
        secondary: {
          DEFAULT: '#00F0FF', // Cyber Cyan
          light: '#70F7FF',
          dark: '#00C0CC',
        },
        accent: {
          DEFAULT: '#CCFF00', // Lime Green
          light: '#E5FF80',
        },
        gray: {
          100: '#E6F4EB',
          200: '#CBE5D6',
          300: '#94B8A3',
          400: '#648F7A',
          500: '#476655',
          600: '#334D40',
          700: '#1E3329',
          800: '#0F1F18',
          900: '#020A06',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #00FFA3 0deg, #00F0FF 180deg, #CCFF00 360deg)',
      },
      animation: {
        blob: 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
