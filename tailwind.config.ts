import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--tw-moss)',
          pine: 'var(--tw-pine)',
          fern: 'var(--tw-fern)',
          sage: 'var(--tw-sage)',
          tint: 'var(--tw-sage-tint)',
          terra: 'var(--tw-terra)'
        },
        surface: {
          DEFAULT: '#FAFAF8',
          secondary: '#F5F5F2',
          tertiary: '#EEECEA'
        },
        text: {
          DEFAULT: '#1E2B1A',
          secondary: '#4A5244',
          tertiary: '#8A9082'
        },
        border: {
          DEFAULT: '#E2E0DC'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['Geist Mono', 'SF Mono', 'Fira Code', 'Fira Mono', 'monospace']
      }
    }
  },
  plugins: []
} satisfies Config
