import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import oxlintPlugin from "vite-plugin-oxlint";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Raleway",
        cssVariable: "--font-raleway",
      },
      {
        provider: fontProviders.google(),
        name: "Noto Sans Mono",
        cssVariable: "--font-noto-sans-mono",
      },
    ],
    svgo: true,
  },

  vite: {
    plugins: [tailwindcss(), oxlintPlugin()],
  },
});
