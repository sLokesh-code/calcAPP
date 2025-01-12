/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffa200",
        secondary: "#242933",
        dark: {
          100: "#242933",
          200: "#1c2129",
          300: "#363e4c",
        },
        background: "#161a20",
        text: "white",
        light: {
          100: "#646361",
          200: "#363636",
          300: "#565655",
        },
        backgroundDark: "#000000",
        textDark: "#fff",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
