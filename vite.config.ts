import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgrPlugin from 'vite-plugin-svgr'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
	build: {
		outDir: 'build',
	},
	plugins: [
		react(),
		reactRefresh(),
		svgrPlugin({
			svgrOptions: {
				icon: true,
			},
		}),
	],
	resolve: {
		alias: {
			components: path.resolve(__dirname, './src/components'),
			enums: path.resolve(__dirname, './src/enums'),
			images: path.resolve(__dirname, './src/images'),
		},
	},
})
