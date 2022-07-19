/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#090909",
        secondary: "#FDC03A",
        third: "#FFAF00",
        fourth: "#E28904",
        red: "#CD0F0E",
      },
    },
  },
  plugins: [],
};
