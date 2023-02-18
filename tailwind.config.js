/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
        secondaryText: "#00df9a",
        tertiaryText: "#00CCBB",
      },
      fontFamily: {
        sans: ["Roboto mono", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(4px)" },
          "50%": { transform: "translateX(2px)" },
        },
        wiggleReverse: {
          "0%, 100%": { transform: "translateX(-4px)" },
          "50%": { transform: "translateX(-2px)" },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        html: { color: theme("colors.slate.100") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
