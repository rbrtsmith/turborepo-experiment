import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import { ui } from '@rbrtsmith-co/test';

export default mergeConfig(
  ui,
  defineConfig({
    test: {
      setupFiles: './test.setup.ts',
    },
  })
);
