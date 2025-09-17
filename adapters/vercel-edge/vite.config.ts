import { vercelEdgeAdapter } from '@builder.io/qwik-city/adapters/vercel-edge/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ['src/entry.vercel-edge.tsx', '@qwik-city-plan'],
        external: [
          'node:fs', 'node:path', 'node:url', 'node:crypto', 'node:stream', 'node:buffer',
          'fs', 'path', 'url', 'crypto', 'stream', 'util', 'events', 'buffer', 'os', 'child_process'
        ],
        output: {
          format: 'es',
          manualChunks: undefined,
          inlineDynamicImports: false,
        },
      },
      outDir: '.vercel/output/functions/_qwik-city.func',
      target: 'esnext',
    },
    plugins: [vercelEdgeAdapter()],
  };
});
