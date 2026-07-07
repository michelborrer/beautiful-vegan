/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e3ebe3',
          200: '#c7d8c7',
          300: '#a3c0a3',
          400: '#7a9f7a',
          500: '#5a825a',
          600: '#466846',
          700: '#385238',
          800: '#2e412e',
          900: '#283628',
        },
        rose: {
          50: '#fdf5f5',
          100: '#fce8e8',
          200: '#f9d5d5',
          300: '#f4b5b5',
          400: '#ec8a8a',
          500: '#d65a5a',
          600: '#b83f3f',
          700: '#9a3333',
        },
        stone: {
          50: '#faf9f7',
          100: '#f3f1ed',
          200: '#e8e4dc',
          300: '#d4cfc4',
          400: '#b5ad9e',
          500: '#9a8f7e',
          600: '#8a7d6e',
          700: '#73685c',
          800: '#5f564c',
          900: '#4d4640',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '720px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '20px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(26,26,26,0.04)',
        'md': '0 4px 12px rgba(26,26,26,0.06)',
        'lg': '0 8px 30px rgba(26,26,26,0.08)',
      },
      lineHeight: {
        'relaxed': '1.7',
        'snug': '1.3',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'normal': '0',
        'wide': '0.03em',
      },
    },
  },
  plugins: [],
};
