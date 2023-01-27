const { defineConfig } = require('vitest/config');
const { mergeConfig } = require('vite');
const react = require('@vitejs/plugin-react').default;

const { base } = require('./base');

const ui = mergeConfig(
  base,
  defineConfig({
    plugins: [react()],
    test: {
      environment: 'jsdom',
    },
  })
);

module.exports = {
  ui,
};
