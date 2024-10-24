/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
