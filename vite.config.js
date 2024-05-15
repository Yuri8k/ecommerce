import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const WORKING_DIR = process.cwd();

const SASS_PATH = resolve(WORKING_DIR, 'src', 'assets', 'scss').replace(
  /\\/g,
  '/'
);

const SASS_AUTO_IMPORT = `@use "sass:color";
@use "sass:math";
@import "${SASS_PATH}/variables";
@import "${SASS_PATH}/themes";
@import "${SASS_PATH}/reset";
@import "${SASS_PATH}/mixins";`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: SASS_AUTO_IMPORT,
        sassOptions: {
          precision: 8,
          outputStyle: 'compressed',
          sourceComments: false,
          includePaths: [SASS_PATH],
          quietDeps: true,
        },
      },
    },
  }
})

