import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    files: {
      routes: 'src/app/routes/',
      appTemplate: 'src/app/app.html',
      assets: 'public',
      hooks: {
        server: 'src/app/hooks.server.ts',
      }
    },
    alias: {
      $app: path.resolve('./src/app'),
      $lib: path.resolve('./src/lib'),
      $routes: '.svelte-kit/types/src/app/routes',
      $src: path.resolve('./src'),
      $static: path.resolve('./src/static'),
    }
  }
};

export default config;
