// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()]
  },
  
  experimental: {
    svgo: true,
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Raleway",
        cssVariable: "--font-raleway",
      },
      {
        provider: fontProviders.google(),
        name: "Noto Sans Mono",
        cssVariable: "--font-noto-sans-mono"
      }
    ]
  }
});
