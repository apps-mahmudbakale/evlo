/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9fa',
          100: '#dcf2f3',
          200: '#bee5e7',
          300: '#93d2d5',
          400: '#5ab2b7',
          500: '#03989e',
          600: '#027a81',
          700: '#056269',
          800: '#095056',
          900: '#0c4349',
          950: '#042b31',
        },
        secondary: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        }
      }
    },
  },
  plugins: [],
};
