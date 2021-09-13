module.exports = {
  mode: "jit",
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      32: '8rem',
      20: '5rem',
      full: '100%',
      fit: 'fit-content'
     },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '0.5': '0.5px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
    },
    extend: {
      colors: {
        adi_gray:{
          light: "#ebeff1",
          DEFAULT: "#363738"
        },
        adi_yellow: {
          DEFAULT: "#ede734"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
