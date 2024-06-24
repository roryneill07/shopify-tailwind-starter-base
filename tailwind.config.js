module.exports = {
  prefix: 'twcss-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    colors: {
      'primary': '#fdb819',
      'secondary': '#212121',
      'white': '#FFFFFF',
      'dark-grey': '#282828',
      'grey': '#D1D2D3'

    },
    fontFamily: {
      sans: 'Rubik, sans-serif',
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
