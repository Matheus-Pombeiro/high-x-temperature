/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        flowx: {
          "0%": { transform: "skewY(3deg)" },
          "25%": { transform: "skewY(0deg)" },
          "50%": { transform: "skewX(3deg)" },
          "75%": { transform: "skewX(0deg)" },
          "100%": { transform: "skewY(3deg)" },
        },
      },
      animation: {
        "flow-x": "flowx 1s linear infinite"
      },
    },
  },
  plugins: [],
}

