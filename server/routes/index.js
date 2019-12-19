module.exports = (app, ssr) => {
	app
		.get('*', (req, res) => ssr.renderToNodeStream(req.originalUrl).pipe(res))
};
