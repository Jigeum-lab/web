/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path'; // eslint-disable-next-line import/default

import react from '@vitejs/plugin-react';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite'; // eslint-disable-next-line import/default
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['./src'],
      outDir: 'dist',
      insertTypesEntry: true,
    }),
    svgr(),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
      formats: ['es', 'cjs'],
      name: '@repo/ui',
      fileName: (format, entryName) =>
        `${entryName}.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) {
            return 'assets/[name].[ext]';
          }

          if (assetInfo.name === 'style.css') {
            return 'style.css';
          }

          return assetInfo.name;
        },
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      plugins: [preserveDirectives()],
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        // NOTE: 전역설정
        additionalData: '@import "./src/styles/index.scss";',
      },
    },
  },
});
