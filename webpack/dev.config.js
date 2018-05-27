const merge = require("webpack-merge")
const common = require("./common.config.js")
const webpack = require("webpack")

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
		https: false,
		port: 7000,
		hot: true,
		compress: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
})
