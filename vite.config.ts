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

          const importMap = {
            imports: {
              react: `https://esm.sh/react@${reactV}`,
              "react/": `https://esm.sh/react@${reactV}/`,
              "react-dom": `https://esm.sh/react-dom@${reactDomV}?external=react`,
              "react-dom/client": `https://esm.sh/react-dom@${reactDomV}/client?external=react`,
            },
          };
          return html.replace(
            "<!-- IsProd -->",
            `<script type="importmap">${JSON.stringify(importMap)}</script>`,
          );
        },
      },
      sitemap({
        hostname: "https://theseon.my.id",
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
        external: (id) => /^react(?:-dom)?(?:\/|$)/.test(id),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules") || id.includes(".pnpm")) {
              if (id.includes("react-router")) {
                return "vendor-react-router";
              }
              if (id.includes("griffel")) {
                return "vendor-griffel";
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
  };
});
