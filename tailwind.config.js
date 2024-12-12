/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["BrownSugar", "sans-serif"],
      },
      colors: {
        primary: "#1b4d20", // Deep green
        accent: "#f6ba02", // Gold
        highlight: "#ffde59", // Bright yellow
        softGreen: "#c4d7b2", // Light green
        beige: "#d6cc99", // Earthy beige
        darkGreen: "#163020", // Darker green
        cream: "#fff9f0", // Cream white
      },
    },
  },
  plugins: [require("daisyui")],
};

