import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Brand */
        brand:        '#f7941d',
        'brand-dark': '#d97906',
        'brand-light':'#fdb64a',
        'brand-soft': '#fef3e3',
        /* Ink (dark scale) */
        ink:    '#0a0a0a',
        'ink-2':'#1a1a1a',
        'ink-3':'#2c2c2c',
        /* Muted */
        muted:    '#6b6b6b',
        'muted-2':'#9a9a9a',
        /* Paper (light scale) */
        paper:    '#ffffff',
        'paper-2':'#fafaf7',
        'paper-3':'#f3f1ec',
        /* Line / borders — named "line" to avoid conflict with Tailwind's border-width utilities */
        line:    '#e6e3dd',
        'line-2':'#d0ccc4',
      },

      /* ── Fonts ────────────────────────────────────────────────────
         Each font-family references a CSS variable defined in index.css.
         To swap a font: update the @import URL + the variable in index.css.
         The class names (font-sans, font-display, font-mono) stay the same.
      ──────────────────────────────────────────────────────────────── */
      fontFamily: {
        sans:    ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono:    ['var(--font-mono)'],
      },

      /* ── Radii ────────────────────────────────────────────────── */
      borderRadius: {
        'r-sm': '6px',
        'r-md': '10px',
        'r-lg': '18px',
        'r-xl': '28px',
      },

      /* ── Shadows ──────────────────────────────────────────────── */
      boxShadow: {
        sm: '0 1px 2px rgba(10,10,10,.04), 0 1px 1px rgba(10,10,10,.03)',
        md: '0 4px 16px rgba(10,10,10,.06), 0 2px 4px rgba(10,10,10,.04)',
        lg: '0 20px 60px rgba(10,10,10,.12), 0 6px 18px rgba(10,10,10,.06)',
      },

      /* ── Container ────────────────────────────────────────────── */
      maxWidth: {
        container: '1320px',
      },
    },
  },
  plugins: [],
} satisfies Config
