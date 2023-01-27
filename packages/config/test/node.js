const { defineConfig } = require('vitest/config');
const { mergeConfig } = require('vite');
const { base } = require('./base');

const node = mergeConfig(
  base,
  defineConfig({
    test: {
      environment: 'node',
    },
  })
);

module.exports = {
  node,
};
