/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark1: "#1a1a1a", //darkest
        bgDark2: "#282828", // darkest-1
        bgDark3: "#353535", //lighter shade
        bgDark4: "#373737", //lighter shade-1
        bgDarkBtn1: "#3e3e3e",
      },
    },
  },
  plugins: [],
}

