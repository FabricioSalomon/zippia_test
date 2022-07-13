const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
