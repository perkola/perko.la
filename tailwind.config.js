module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '767px',
      xl: '900px',
    },
    extend: {
      colors: {
        love: {
          '100': '#FEE8EF',
          '200': '#FABFD0',
          '300': '#F496B1',
          '400': '#ED698F',
          '500': '#E54773',
          '600': '#D52255',
          '700': '#AA0D39',
        }
      }
    },
    linearGradients: {
      colors: {
        'lady': ['#b06b61', '#ffa8ae']
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-gradients')(),
  ]
}
