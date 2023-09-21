import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://jesusmira.github.io',
  base: '/frontendmentor-flio-dar',
  integrations: [tailwind(), react()],
});