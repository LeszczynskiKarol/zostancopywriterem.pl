import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.zostancopywriterem.pl",
  output: "static",
  build: {
    assets: "_assets",
    inlineStylesheets: "auto",
  },
  integrations: [sitemap()],
  vite: {
    build: {
      cssMinify: true,
    },
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
