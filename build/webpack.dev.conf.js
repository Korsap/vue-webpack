const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
	devServer: {
		historyApiFallback: true,
		stats: 'errors-only',
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		host: process.env.HOST,
		port: process.env.PORT
	},
	plugins: [
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
		new ProgressBarPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		}),
	]
}