export const proxy = {
	"/dev/": {
		target: "http://10.34.4.38:8081",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/dev/, "")
	},

	"/prod/": {
		target: "http://10.34.4.38:8081",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/prod/, "/api")
	}
};
