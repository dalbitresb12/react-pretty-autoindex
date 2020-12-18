const plugin = require("tailwindcss/plugin");

// Modified from the code posted by @sarahdayan (https://github.com/sarahdayan)
// https://github.com/tailwindlabs/tailwindcss/discussions/2119#discussioncomment-200587

const beforeAfterVariants = plugin(({ addVariant, e }) => {
  addVariant('before', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`before${separator}${className}`)}::before`;
    });
  });
  addVariant('after', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`after${separator}${className}`)}::after`;
    });
  });
});

module.exports = beforeAfterVariants;
