/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        neutralColour: "#333d4d",
        emerald: "#68cc8c",
        secondary: "#377cfb",
      },
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
    screens: {
      laptoplg: { max: "1280px" },
      laptop: { max: "1024px" },
      tablet: { max: "768px" },
      phone: { max: "480px" },
    },
  },
  plugins: [],
};
