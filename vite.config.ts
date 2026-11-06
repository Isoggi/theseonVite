import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import fs from "node:fs";
import path from "node:path";

const pkgPath = path.resolve(import.meta.dirname, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
const getVersion = (libName: string): string => {
  return pkg.dependencies[libName].replace(/[\^~]/g, "");
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction =
    mode === "production" || process.env.NODE_ENV === "production";

  const reactV = getVersion("react");
  const reactDomV = getVersion("react-dom");
  return {
    plugins: [
      react(),
      {
        name: "html-transform",
        transformIndexHtml(html) {
          if (!isProduction) {
            return html.replace("<!-- IsProd -->", "");
          }

          const baseUrl = "https://cdnjs.cloudflare.com/ajax/libs/";
          const cdnScripts = `<script crossorigin="anonymous" src="${baseUrl}react/${reactV}/cjs/react.production.min.js"></script><script crossorigin="anonymous" src="${baseUrl}react-dom/${reactDomV}/cjs/react-dom.production.min.js"></script>`;
          return html.replace("<!-- IsProd -->", cdnScripts);
        },
      },
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
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react/jsx-runtime": "React",
            "react-dom": "ReactDOM",
            "react-dom/client": "ReactDOM",
          },
          manualChunks(id) {
            // Put node_modules dependencies into separate vendor chunks
            if (id.includes("node_modules") || id.includes(".pnpm")) {
              // if (/node_modules\/(react-router-dom)\//.test(id)) {
              if (id.includes("react-router")) {
                console.log(
                  id
                    .replace(/^.+node_modules/, "react:")
                    .replace("node_modules/", ""),
                );
                return "vendor-react-router";
              }
              if (id.includes("griffel")) {
                console.log(
                  id
                    .replace(/^.+node_modules/, "griffel:")
                    .replace("node_modules/", ""),
                );
                return "vendor-griffel";
              }
              if (id.includes("fluentui")) {
                console.log(
                  id
                    .replace(/^.+node_modules/, "fluentui:")
                    .replace("node_modules/", ""),
                );
                return "vendor-fluentui";
              }
              console.log(
                id
                  .replace(/^.+node_modules/, "vendor:")
                  .replace("node_modules/", ""),
              );
              return "vendor";
            }
          },
        },
      },
    },
  };
});
