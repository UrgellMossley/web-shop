const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      quickSand: ['"Lato"', "sans-serif"],
    },
    screens: {
      xs: "520px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        sand: "#e0e0e0",
        pebble: "#C8CCBC",
        dark: "rgba(245, 246, 252, 0.52)",
        light: "rgba(117, 19, 93, 0.73))",
      },
      brightness: {
        60: ".60",
      },
      backgroundImage: {
        headerImage: "url('../src/assets/img/headerImg.jpg')",
        girl: "url('../src/assets/img/glasses.jpg')",
        man: "url('../src/assets/img/man.jpg')",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.05, 0, 0.4, 1) 3",
      },
      gridTemplateRows: {
        remaining: "grid-auto-rows: minmax(min-content, max-content) 1fr 1fr",
      },
      gridTemplateColumns: {
        remainingCols:
          "grid-auto-rows: minmax(min-content, max-content) 1fr 1fr",
      },
    },
  },
  daisyui: {
    themes: [],
    styled: true,
    base: true,
    utils: true,
    logs: true,
  },
  plugins: [require("daisyui")],
};
