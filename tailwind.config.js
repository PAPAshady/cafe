/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "2xl": "1440px",
      },
      colors: {
        primary: {
          DEFAULT: "#C19977",
          100: "#D8C0AB",
          200: "#D2B69D",
          300: "#CCAB8F",
          400: "#BF9673",
          500: "#B88C65",
          600: "#B28257",
        },
        secondary: "#222D3B",
        tertiary: "#090C0F",
        quaternary: "#B1B5B7",
        bgColor: '#0E1317'
      },
      fontFamily: {
        iransans: ["iransans", "sans-serif"],
        vazir: ["vazir", "sans-serif"],
      },
    },
  },
  plugins: [],
};
