/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        135: "135deg",
      },
      scale: {
        150: "1.5",
      },
      screens: {
        bp5: "340px",
        bp4: "660px",
        bp3: "950px",
        bp1: "1180px",
        bp2: "1350px",
        xl1: "1440px",
      },
      colors: {
        footerColor: "#222222",
        footerChild: "#7D7D7D",
        appGreen: "#47e0c9",
        bluish: "#eafbee",
        grayish: "#86949c",
      },
      boxShadow: {
        gray: "0px -15px 20px 0px rgba(128, 128, 128, 0.3)",
        all: "0px 0px 3px 2px rgba(128, 128, 128, 0.3)",
      },
    },
  },
  plugins: [],
};

