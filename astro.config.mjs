import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config

// https://astro.build/config
import react from "@astrojs/react";

// https://code.juliancataldo.com/component/astro-diagram/#doc
import remarkMermaid from "astro-diagram/remark-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://super-solstice.vercel.app/",
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    tailwind(),
    sitemap(),
    prefetch({
      throttle: 3,
    }),
    react(),
  ],
  markdown: {
    remarkPlugins: [remarkMermaid],
  },
});
