const merge = require("webpack-merge")
const htmlWebpackPlugin = require("html-webpack-plugin")
const common = require("./common.config.js")
const webpack = require("webpack")

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
		https: false,
		port: 5000,
		hot: true,
		compress: true
	},
	plugins: [
		new htmlWebpackPlugin({
			template: "src/index.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
})
