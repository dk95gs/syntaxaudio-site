module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./contact.html",
    "./artists.html",
    "./src/**/*.{html,js}",
  ],
  safelist: [
    'fa',
    'fa-brands',
    'fa-solid',
    'fa-instagram',
    'fa-facebook',
    'fa-youtube'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
