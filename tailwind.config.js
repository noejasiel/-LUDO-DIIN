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
        "img-card2": "url('/src/assets/img2.png')",
        "img-card7": "url('/src/assets/img7.png')",
        "img-card4": "url('/src/assets/img4.png')",
        "img-card5": "url('/src/assets/img5.png')",
        "img-card6": "url('/src/assets/img6.png')",
        bgHome: "url('/src/assets/lgtbiHome.jpg')",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }