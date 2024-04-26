export const proxy = {
	"/dev/": {
		target: "http://10.34.4.38:8001",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/dev/, "")
	},

	"/prod/": {
		target: "http://10.34.4.38:8001",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/prod/, "/api")
	}
};
