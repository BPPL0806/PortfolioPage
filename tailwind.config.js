/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/index.html'],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'xs': {'max': '1040px'},
      '1200' : {'max': '1200px', 'min': '864px'},
      '600' : {'max': '600px'},
      '350' : {'max': '350px'},
      '530' : {'max': '530px'},
      '460' : {'max': '460px'},
      '1300' : {'max': '1300px', 'min': '864px'},
      '864' : {'max': '864px'},
    },
  },
  plugins: [],
}
