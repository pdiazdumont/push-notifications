const path = require("path")

module.exports = {
	entry: {
		app: ["babel-polyfill", "./src/index.js"],
		sw: ["babel-polyfill", "./src/sw.js"]
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "../docs"),
		globalObject: "this"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.tag$/,
				exclude: /node_modules/,
				use: ["riot-tag-loader"]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: ["file-loader?name=[name].[ext]"]
			}
		]
	},
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
