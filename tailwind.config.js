module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      mmd: '992px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'pg-bg': '#0D2436',
        'hover-color': '#CCCCCC',
        'card-bg': '#cfe2f3',
        'card-selected-bg': '#009B86',
        'card-hover-bg': '#34AC9C',
        'btn-focus-bg': '#6b6d6e',
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
      boxShadow: {
        'card-hv-shadow': '1px 1px 5px 3px #64839f',
      },
      minWidth: {
        '300px': '300px',
        '400px': '400px',
        '500px': '500px',
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
}
