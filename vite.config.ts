import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		port: 5160, // Your desired port
		strictPort: true, // Force this port, exit if in use
	},	
	plugins: [tailwindcss(), sveltekit()]
});
