/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "dm-elements": "hsl(209, 23%, 22%)",
        "dm-bg": "hsl(207, 26%, 17%)",
        "lm-text": "hsl(200, 15%, 8%)",
        "lm-input": "hsl(0, 0%, 52%)",
        "lm-bg": "hsl(0, 0%, 98%)",
        "lm-elements-dm-text": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
