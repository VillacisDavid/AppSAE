/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "media",
  theme: {     
    extend: {},
  },

  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: ["emerald","sunset","cmyk"],
  },
}

