/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
