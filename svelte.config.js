import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			components: 'src/components',
			content: 'src/content'
		}
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		sveltePreprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;
