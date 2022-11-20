/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/pages/images/hero.png')"
      }
    },
  },
  plugins: [],
};
