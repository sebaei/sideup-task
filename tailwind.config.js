/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "500px",
      sm: "900px",
      md: "1200px",
      lg: "1500px",
      xl: "1800px",
    },
    extend: {
      fontFamily: { Helvetica: ["Helvetica", "sans-serif"] },
    },
  },
  plugins: [],
};
