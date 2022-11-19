/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "760px",
      lg: "1024px",
      xl: "1280px",
    },
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
