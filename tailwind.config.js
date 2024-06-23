/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  darkmode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "13xl": "13rem",
        "14xl": "14rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1220px",
        "2xl": "1220px",
      },
      backgroundImage: {
        hero: 'url("/images/hero/yin-und-bird-v2.gif")',
        me: 'url("/images/hero/eu-v2.png")',
        form: 'url("/images/hero/yin-und-bird.gif")'
      },
      colors: {
        lightmode: {
          100: "#F4F1F1",
          200: "#E2E2E2",
          300: "#6A6A6A",
          500: "#4A4747",
        },
        darkmode: {
          100: "#F8F8F8",
          200: "#292929",
          300: "#0A0A0A",
          500: "#D3E97A",
        },
      },
      keyframes: {
        //Our fall animation keyframes
        left: {
          "0%": { transform: "translate(5%,0%) skewX(0deg)" },
          "50%": { transform: "translate(0%,0%) skewX(-1deg)" },
          // "100%": { transform: "translate(0%,150%) skewX(0deg)" },
        },
        right: {
          "0%": { transform: "translate(-2%,0%) skewX(0deg)" },
          "50%": { transform: "translate(0%,0%) skewX(-1deg)" },
          // "100%": { transform: "translate(0%,150%) skewX(0deg)" },
        },
        fall: {
          "0%": { transform: "translate(0%,-15%) skewX(0deg)" },
          "50%": { transform: "translate(0%,0%) skewX(-5deg)" },
          // "100%": { transform: "translate(0%,150%) skewX(0deg)" },
        },
        zoom: {
          "0%": { transform: "scale(1,1)" },
          "100%": { transform: "scale(1.05, 1.05)" },
        },
        glitch: {
          "0%": {
            transform: "translate(-4px, 0) ",
            opacity: 0.5,
          },

          "100%": {
            transform: "translate(0)",
            opacity: 1,
          },
          // "20%, 40%, 60%, 80%": {
          //   transform: "translate(0) skewX(-10deg)",
          // },
        },
        scale: {
          "0%": { transform: "scale(1.05, 1.05)" },
          "33%": { transform: "scale(1, 1)" },
          "66%": { transform: "scale(1.05, 1.05)" },
          "100%": { transform: "scale(1, 1)" },
        },
        about1: {
          "0%": { transform: "translate(-15px, 0)", opacity: 0.5 },
          "100%": { transform: "translate(0px, 0)", opacity: 1 },
        },
        about2: {
          "0%": { transform: "translate(15px, 0)" },
          "100%": { transform: "translate(0px, 0)" },
        },
      },

      animation: {
        // You can then reference these keyframes by name in the
        // animation section of your theme configuration
        left: "left 5s ease ",
        fall: "fall 5s ease",
        zoom: "zoom 1s ease",
        right: "right 3s ease",
        glitch: "glitch 3s ease",
        about1: "about1 1s ease",
        about2: "about2 1s ease",
        scale: "scale 4s ease ",
        // animation shorthand CSS property i.e
        // animation-name | animation-duration | animation-timing-function
        // animation-iteration-count
      },
    },
    plugins: [],
  },
};
