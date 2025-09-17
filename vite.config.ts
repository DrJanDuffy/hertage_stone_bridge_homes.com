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
          // Enable advanced tree shaking
          outDir: "dist",
          // Optimize bundle splitting
          rollupOptions: {
            output: {
              // Advanced chunk splitting for optimal loading
              manualChunks: {
                vendor: ["@builder.io/qwik"],
                realestate: ["./src/components/real-estate"],
                luxury: ["./src/components/luxury"],
                seo: ["./src/components/seo"],
              },
              // Optimize asset naming for better caching
              assetFileNames: (assetInfo) => {
                const info = assetInfo.name?.split(".") || [];
                const ext = info[info.length - 1];
                if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
                  return `assets/images/[name]-[hash][extname]`;
                }
                if (/woff2?|eot|ttf|otf/i.test(ext)) {
                  return `assets/fonts/[name]-[hash][extname]`;
                }
                return `assets/[name]-[hash][extname]`;
              },
              chunkFileNames: "assets/js/[name]-[hash].js",
              entryFileNames: "assets/js/[name]-[hash].js",
            },
          },
        },
        ssr: {
          outDir: "dist/server",
        },
      }),
      tsconfigPaths(),
    ],
    // Advanced build optimizations
    build: {
      // Enable advanced minification
      minify: "terser",
      terserOptions: {
        compress: {
          // Remove console logs in production
          drop_console: true,
          drop_debugger: true,
          // Advanced compression
          pure_funcs: ["console.log", "console.info", "console.debug"],
          passes: 2,
        },
        mangle: {
          // Optimize variable names
          toplevel: true,
        },
      },
      // Optimize chunk size
      chunkSizeWarningLimit: 1000,
      // Enable source maps for debugging
      sourcemap: false,
      // Advanced CSS optimization
      cssCodeSplit: true,
      // Optimize asset handling
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
      // Pre-bundle dependencies for faster loading
      include: [
        "@builder.io/qwik",
        "@builder.io/qwik-city",
      ],
    },
    // Advanced CSS handling
    css: {
      // Enable CSS modules
      modules: {
        localsConvention: "camelCase",
      },
    },
  };
});