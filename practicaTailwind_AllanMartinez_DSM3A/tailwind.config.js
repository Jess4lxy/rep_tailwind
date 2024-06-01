/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          void: "#000000",
          cream: "#FAF3E0",
          gold: "#D4AF37",
          crate: "#804000",
          jade: "#00A86B",
      },
      fontFamily: {
        rale: ['Raleway'],
      }
    },
  },
  plugins: [],
}