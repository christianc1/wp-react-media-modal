const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		main: [ 'babel-polyfill', './index.js']
	},
	resolve: {
		modules: [
			path.resolve( './src' ),
			path.resolve( './node_modules' )
		]
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					loader: 'css-loader?importLoaders=1!postcss-loader'
				}),
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								[ "es2015", { modules: false } ],
								"stage-0",
								"react"
							],
							plugins: [
								'transform-async-to-generator',
								'transform-decorators-legacy'
							]
						}
					}
				]
			}
		]
	},
	node: {
		fs: 'empty'
	},
	output: {
		path: path.resolve(__dirname),
		filename: 'index.dist.js'
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new webpack.SourceMapDevToolPlugin()
	],
};
