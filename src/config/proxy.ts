export const proxy = {
	"/dev/": {
		target: "http://hvcughet.aibot2.64yhl95u.dhc5yvzt.com:8001",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/dev/, "")
	},

	"/prod/": {
		target: "https://aibot2-104289-5-1259062193.sh.run.tcloudbase.com",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/prod/, "/api")
	}
};
