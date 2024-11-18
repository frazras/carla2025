/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#00a135',
        'brand-gray': '#333333',
        'brand-black': '#000000',
        'brand-yellow': '#efde36',
      },
    },
  },
  plugins: [],
};
