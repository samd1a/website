/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      'bg': '#ECEFF6',
      'txt': '#1D1D1F'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      spacing: {
        '512': '36rem',
        'border': '3rem'
      }
    },
  },
  plugins: [],
}
