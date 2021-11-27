module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "img-card1": "url('/src/assets/img1.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
