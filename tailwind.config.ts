/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        kpso: {
          white: "#F0EBE5",
          brown: "#DED0BF",
          blue: "#2A3993",
          "red-primary": "#964B48",
          "red-secondary": "#A69494",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        "inria-serif": ["var(--font-inria-serif)"],
      },
    },
  },
  plugins: [],
};
