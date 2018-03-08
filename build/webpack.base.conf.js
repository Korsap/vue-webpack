const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = require('../config')

module.exports = {
	entry: {
		app: path.join(__dirname, '..', 'src')
	},
	output: {
		path: process.env.NODE_ENV === 'production' ? config.prod.assetsRoot : config.dev.assetsRoot,
		filename: 'js/[name].js',
		publicPath: process.env.NODE_ENV === 'production' ? config.prod.assetsPublicPath : config.dev.assetsPublicPath
	},
	stats: {
		colors: true,
		modules: true,
		reasons: true,
		errorDetails: true
	},
	plugins: [
		new ProgressBarPlugin(),
		new ExtractTextPlugin(process.env.NODE_ENV === 'production' ? config.prod.stylePath : config.dev.stylePath)
	],
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: "url-loader",
				options: {
					limit: 10000,
					name: path.join('img', '[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff?2|eot|tff|otf)(\?.*)?$/,
				loader: "url-loader",
				options: {
					limit: 10000,
					name: path.join('fonts', '[name].[hash:7].[ext]')
				}
			}
		]
	}
}