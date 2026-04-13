import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6E5CCC',
          bright: '#9B8EE8',
          light: '#F3F1FC',
          mid: '#DDD8F7'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F7F7F7',
          tertiary: '#F0F0F0'
        },
        text: {
          DEFAULT: '#0F0F0F',
          secondary: '#8A8A8A',
          tertiary: '#A1A1A1'
        },
        border: {
          DEFAULT: '#E2E2E2'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Geist Mono', 'SF Mono', 'Fira Code', 'Fira Mono', 'monospace']
      }
    }
  },
  plugins: []
} satisfies Config
