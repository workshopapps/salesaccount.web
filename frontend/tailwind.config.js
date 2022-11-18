/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Lexend", "sans-serif"],
      },
    },
    colors: {
      blue: "#1570EF",
      gray: "#1D2939",
      likewhite: "#EFF8FF",
      white: "#fff",
    },
  },
  plugins: [],
};
