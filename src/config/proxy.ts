export const proxy = {
	"/dev/": {
		target: "http://hvcughet.aibot2.64yhl95u.dhc5yvzt.com",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/dev/, "")
	},

	"/prod/": {
		target: "https://hvcughet.aibot2.64yhl95u.dhc5yvzt.com",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/prod/, "/api")
	}
};
