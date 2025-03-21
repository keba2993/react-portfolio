import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	root: './',
	build: {
		outDir: '../dist',
		assetsDir: './src/assets',
		emptyOutDir: true,
	},
});
