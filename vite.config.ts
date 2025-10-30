import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/components/pages'),
			'@ui': path.resolve(__dirname, './src/components/ui'),
			'@lib': path.resolve(__dirname, './src/lib'),
		},
	},
})
