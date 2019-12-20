const config = require('config');

module.exports = (app, ssr, assetsWeb) => {
	app
		.get('/_', (request, response) => response.send(config.app))

		.get('*', (request, response) => ssr
			.renderToNodeStream(request.originalUrl, {}, assetsWeb)
			.pipe(response))
};
