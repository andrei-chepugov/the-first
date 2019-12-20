module.exports = (app, ssr, assetsWeb) => {
	app
		.get('*', (req, res) => ssr.renderToNodeStream(req.originalUrl, {}, assetsWeb).pipe(res))
};
