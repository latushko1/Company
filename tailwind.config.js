/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'lg': {'max': '410px'},
      'md': {'max': '768px'},
      'lg': {'max': '992px'},
      'xl': {'max': '1780px'},
      'ad':{'max':'340px'},
    },

    container:{
      padding: '20px',
      center: true
    },

    extend: {
      colors: {
        primary: '#FFFFFF',
        gray: '#838383',
        darkGray: '#1D1D1F',
      },

      backgroundImage: {
      }
    },


  },
  plugins: [],
}
