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
        acme: ['acme', 'sans-serif'],
        'circular-book': ['circular-book', 'sans-serif'],
        'circular-medium': ['circular-medium', 'sans-serif'],
        'neue-montreal': ['neue-montreal', 'sans-serif'],
        'roslindale-display': ['roslindale-display', 'sans-serif'],
        gtApina: ['gtAlpina', 'sans-serif'],
        'BebasNeue-Regular': ['BebasNeue-Regular', 'sans-serif'],
        'Canopee-Regular': ['Canopee-Regular', 'sans-serif'],
      },
      screens: {
        '2xl': { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' },
        xs: { max: '380px' },
      },
    },
  },
  plugins: [],
};
