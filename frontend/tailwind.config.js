/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#1570EF',
        },
        grey: {
          500: '#EFF8FF',
        },
        white: {
          500: '#F9FAFB',
        },
      },
      boxShadow: {
        '3xl': '0px 2px 8px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
