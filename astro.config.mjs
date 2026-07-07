import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://beautiful-vegan.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Cloudflare serves clean URLs (/about, not /about.html) and 404/duplicate pages stay out
      filter: (page) => !page.includes('/404') && !page.includes('is-kiehls-cruelty-free'),
      serialize: (item) => ({ ...item, url: item.url.replace(/\.html$/, '') }),
    }),
  ],
});
