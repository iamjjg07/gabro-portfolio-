import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  
  // Optional: useful settings
  site: 'https://your-username.github.io', // change this later when you deploy
  // base: '/gabro-portfolio',             // uncomment only if deploying to a subfolder
  
  vite: {
    ssr: {
      noExternal: ['@astrojs/tailwind']
    }
  }
});
