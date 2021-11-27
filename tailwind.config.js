module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#0E2B64',
      'secondary': '#B10AAB'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
