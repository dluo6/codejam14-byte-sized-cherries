/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        knewave: ["Knewave", "system-ui"],
        "slackside-one": ["Slackside\\ One", "cursive"],
        mclaren: ["McLaren", "sans-serif"],
      },
    },
    colors: {
      cherry: "#7C0201",
      coral: "#EE898C",
      white: "#ffffff",
      cream: "#FFE3E0",
    },
  },
  plugins: [],
};
