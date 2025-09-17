import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    ssr: true,
    rollupOptions: {
      input: ['src/entry.static.tsx'],
      output: {
        format: 'es',
        entryFileNames: 'index.js',
      },
    },
    outDir: '.vercel/output/functions/_qwik-city.func',
    target: 'esnext',
    minify: false,
  },
});
