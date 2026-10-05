import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://iamjjg07.github.io',
  base: '/gabro-portfolio-',
  integrations: [tailwind()],
});
