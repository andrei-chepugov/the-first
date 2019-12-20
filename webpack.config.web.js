const config = require("config");
const path = require("path");
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = function (env = {}, argv) {
	const { target } = env;
	const { mode } = argv;

	const __webpack_hmr = config.webpack.__webpack_hmr;
	const heartbeat = config.webpack.heartbeat;
	const sourceDir = config.webpack.source;
	const outputDir = config.webpack.output;
	const publicPath = config.webpack.public;

	const sourcePath = path.join(__dirname, sourceDir);
	const outputPath = path.join(__dirname, outputDir, target);

	const plugins = [
		new AssetsPlugin({ filename: path.join(outputDir, target, 'assets.json') }),
	]

	return ({
		entry: `${sourcePath}/${target}.js`,
		output: {
			filename: '[name]-[hash].js',
			chunkFilename: '[name]-chunk-[chunkhash].js',
			libraryTarget: 'umd',
			path: outputPath,
			publicPath,
			hashDigestLength: 8
		},
		target,
		mode,
		plugins,
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: "babel-loader"
					}
				},
				{
					test: /\.css$/,
					use: [
						"isomorphic-style-loader",
						{
							loader: "css-loader",
							options: {
								modules: true
							}
						}
					]
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: ["file-loader"]
				}
			]
		}
	})
};
