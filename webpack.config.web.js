// module.exports = (env) => require('./webpack/index')(env);

const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "./main.js"
	},
	target: 'web',
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
};
