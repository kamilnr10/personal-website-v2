/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "#FFFFFF",
        secondaryText: "#00CCBB",
      },
      fontFamily: {
        sans: ["Roboto mono", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
