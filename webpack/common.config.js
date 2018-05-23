const path = require("path")
const cleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: {
		app: "./src/index.js",
		sw: "./src/sw.js"
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
		globalObject: "this"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			}
		]
	},
	plugins: [
		new cleanWebpackPlugin(["dist"]),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		modules: [
			"node_modules",
			path.resolve(__dirname, "../src")
		],
		extensions: [
			".js"
		]
	}
}
