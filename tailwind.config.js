const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Montserrat",
          ...defaultTheme.fontFamily.sans
        ],
      },
      colors: {
        primaryBlue: "#33abf3",
        secondaryBlue: "#EEF6FC"
      }
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1366px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
