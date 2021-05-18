module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'main': "url('/images/cover pictures/desktop-in-office.jpg')",
      }),
      scale: {
          '65': '.65',
      },
      textColor: {
          'navyblue': '#0B214A',
      },
      height: {
          '112': '26rem',
          '126': '28rem',
          '144': '32rem',
          '162': '38rem',
          '170': '46rem',
          '188': '56rem',
          '206': '68rem'
      },
      boxShadow: {
          blue: '0 4px 14px 0 rgba(19, 51, 81, 0.39)',
          theme: '0 1px 3px 0 rgba(157, 23, 77, 0.4), 0 1px 2px 0 rgba(157, 23, 77, 0.06)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}