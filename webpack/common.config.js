const path = require("path")
const cleanWebpackPlugin = require('clean-webpack-plugin')

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
		new cleanWebpackPlugin(["dist"])
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
