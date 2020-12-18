const colors = require("tailwindcss/colors");

const beforeAfterVariants = require("./plugins/variants/before-after");
const contentUtilities = require("./plugins/utilities/content");

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter:
        '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'inter-var':
        '"Inter var", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      colors: {
        'light-blue': colors.lightBlue
      },
    },
  },
  variants: {
    extend: {
      display: ['first', 'last', 'before', 'after'],
      borderWidth: ['first', 'last'],
      borderRadius: ['first', 'last'],
      contentSeparator: ['first', 'last'],
    },
  },
  plugins: [
    beforeAfterVariants,
    contentUtilities
  ],
};
