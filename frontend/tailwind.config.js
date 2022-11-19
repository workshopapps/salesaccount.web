/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily : {
      Lexend : ["Lexend", "sans-serif"],
    },
    colors: {
      primary : "#2E90FA",
      thead : "#D1E9FF",
      sideIcon : "#CBCBCB",
      searchBar : "#F9FAFB",
      search : "#6B6868",
      notificationIcon : "#ACACAC",
      notifyBubble : "#EF4444",
      white : "#FFFFFF",
      accpal : "#E3E3E3",
      borderB : "#4E4E4E",
      withdraw : "#F04438",
      deposit : "#12B76A",
      reconcile : "#D1E9FF",
      reconcileClick : "#1570EF"
    },
    extend: {},
  },
  plugins: [],
};
