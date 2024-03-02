/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#1d1d1f',
        cyan: '#37EBA9',
        violet: '#7A8FFF',
      },
      fontFamily: {
        acme: ['var(--font-acme)'],
        'circular-book': ['var(--font-circular-book)'],
        'circular-medium': ['var(--font-circular-medium)'],
        'neue-montreal': ['var(--font-neue-montreal)'],
        'roslindale-display': ['var(--font-roslindale-display)'],
        gtApina: ['var(--font-gtApina)'],
      },
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }

        xs: { max: '380px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
