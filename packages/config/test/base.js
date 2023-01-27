const { defineConfig } = require('vitest/config');

const base = defineConfig({
  test: {
    globals: true,
  },
});

module.exports = {
  base,
};
