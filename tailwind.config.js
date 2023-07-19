/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./view/*.{html, js}', './view/**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        'primary': '#52796f',
        'secondary-light': '#84a98c',
        'secondary-dark': '#354f52',
        'back-light': '#cad2c5',
        'back-dark': '#2f3e46',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
