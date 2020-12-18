const plugin = require("tailwindcss/plugin");

// Modified from the code posted by @sarahdayan (https://github.com/sarahdayan)
// https://github.com/tailwindlabs/tailwindcss/discussions/2119#discussioncomment-200587

const contentUtilities = plugin(({ addUtilities, variants }) => {
  const contentUtils = {
    '.content': {
      content: 'var(--tw-content)',
    },
  };

  const separatorUtils = {
    '.content-separator-none': {
      '--tw-content': '\'\'',
    },
    '.content-separator-dot': {
      '--tw-content': '\' • \'',
    },
    '.content-separator-hyphen': {
      '--tw-content': '\' - \'',
    },
  };

  addUtilities(contentUtils, variants('content', []));
  addUtilities(separatorUtils, variants('contentSeparator', []));
}, {
  variants: {
    content: ['responsive', 'before', 'after'],
    contentSeparator: ['responsive']
  }
});

module.exports = contentUtilities;
