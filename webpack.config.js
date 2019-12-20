module.exports = function ({ target } = {}) {
	return require(`./webpack.config.${target}`).apply(this, arguments);
};
