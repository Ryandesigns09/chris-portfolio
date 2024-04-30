/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      translate: ['group-hover'],
    },
  },

  plugins: [],
}