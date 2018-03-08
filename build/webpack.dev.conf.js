const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const utils = require('./utils')
const config = require('../config')

const env = config.dev.env
const host = config.dev.host
const port = config.dev.port

module.exports = {
	devServer: {
		historyApiFallback: true,
		stats: 'errors-only',
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		host: host,
		port: port
	},
	module: {
		rules: utils.styleLoaders({ sourceMap: true })
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Вы все говно',
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new webpack.WatchIgnorePlugin([
			path.join(__dirname, '..', 'node_modules')
		]),
		new FriendlyErrorsPlugin({
			compilationSuccessInfo: {
				messages: ['You application is running here: http://localhost:8080'],
				notes: ['Some additional notes']
			},
			onErrors: function (severity, errors) {
				/*console.log("severity=", severity)
				console.log("errors=", errors)*/
			},
			clearConsole: true
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': env
		}),
	]
}