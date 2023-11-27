/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-page-background": "url('/Vero-Background.svg')",
      },
      colors: {
        blue: {
          light: "#85d7ff",
          DEFAULT: "#203945",
        },
      },
      fontFamily: {
        sans: ["var(--font-dmsans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
