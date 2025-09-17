import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite({
        // Advanced 2025 optimizations
        client: {
          outDir: "dist",
        },
        ssr: {
          outDir: "dist/server",
        },
      }),
      tsconfigPaths(),
    ],
    // Build optimizations
    build: {
      minify: "esbuild",
      chunkSizeWarningLimit: 1000,
      sourcemap: false,
      cssCodeSplit: true,
      assetsInlineLimit: 4096,
    },
    // Advanced development optimizations
    server: {
      // Enable HMR for faster development
      hmr: {
        overlay: true,
      },
    },
    // Performance optimizations
    optimizeDeps: {
      include: [
        "@builder.io/qwik",
        "@builder.io/qwik-city",
      ],
    },
  };
});