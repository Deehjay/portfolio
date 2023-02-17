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
      laptop: { min: "1024px", max: "1600px" },
      tablet: { max: "820px" },
      phone: { max: "480px" },
    },
  },
  plugins: [],
};
