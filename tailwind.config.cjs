/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        neutralColour: "#333d4d",
      },
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
