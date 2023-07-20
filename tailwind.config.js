/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./view/*.{html, js}', './view/**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        // Light Theme
        'light-primary-100': '#0077C2',
        'light-primary-200': '#59a5f5',
        'light-primary-300': '#c8ffff',
        'light-acent-100': '#00BFFF',
        'light-acent-200': '#00619a',
        'light-text-100': '#333333',
        'light-text-200': '#5c5c5c',
        'light-bg-100': '#FFFFFF',
        'light-bg-200': '#f5f5f5',
        'light-bg-300': '#cccccc',

        // Dark Theme
        'dark-primary-100': '#0085ff',
        'dark-primary-200': '#69b4ff',
        'dark-primary-300': '#e0ffff',
        'dark-acent-100': '#006fff',
        'dark-acent-200': '#e1ffff',
        'dark-text-100': '#FFFFFF',
        'dark-text-200': '#9e9e9e',
        'dark-bg-100': '#1E1E1E',
        'dark-bg-200': '#2d2d2d',
        'dark-bg-300': '#454545'
      },
      fontFamily: {
        'Quicksand': ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
