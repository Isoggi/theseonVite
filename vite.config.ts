import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://theseon.my.id", // Replace with your production domain
      dynamicRoutes: [
        "/",
        "/about",
        "/privacy",
        "/portfolio",
        "/articles",
        "/articles/:id/:title?",
      ],
      // Optional: automatically add lastmod date
      lastmod: new Date(),
      // Optional: change file output readability
      readable: true,
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Put node_modules dependencies into separate vendor chunks
          if (id.includes("node_modules") || id.includes(".pnpm")) {
            // if (/node_modules\/(react|react-dom|react-router-dom)\//.test(id)) {
            if (id.includes("react")) {
              return "vendor-react";
            }
            if (id.includes("fluentui")) {
              return "vendor-fluentui";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
