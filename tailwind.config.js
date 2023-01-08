/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "800px",
      md: "1100px",
      lg: "1400px",
      xl: "1600px",
    },
    extend: {
      fontFamily: { Helvetica: ["Helvetica", "sans-serif"] },
    },
  },
  plugins: [],
};
