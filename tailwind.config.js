module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      primary: "#0E2B64",
      secondary: "#B10AAB",
    }),
    extend: {
      backgroundImage: {
        "img-card1": "url('/src/assets/img1.png')",
        // "img-card2":
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
