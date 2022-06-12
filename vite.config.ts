import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgrPlugin from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	// This changes the out put dir from dist to build
	// comment this out if that isn't relevant for your project
	build: {
		outDir: 'build',
	},
	plugins: [
		reactRefresh(),
		svgrPlugin({
			svgrOptions: {
				icon: true,
				// ...svgr options (https://react-svgr.com/docs/options/)
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
