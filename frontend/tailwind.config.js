/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#121212",
        foreground: "#b3b3b3",
        "foreground-active": "#fff",
        background: "#1ed760",
        "background-active": "#169c46",
      },
      fontFamily: {
        circularSpBold: ["CircularSp Bold"],
        circularSpBook: ["CircularSp Book"],
        circularSpTitleBlack: ["CircularSpTitle Black"],
        circularSpTitleBold: ["CircularSpTitle Bold"],
      },
    },
  },
  plugins: [],
};
