/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#042233",
        secondary: "#A6000C",
        tertiary: "#F8F7F8",
        quaternary: "#075e8c",
        quinary: "#da0010",
        senary: "#f0efea",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    },
  },
  plugins: [],
}