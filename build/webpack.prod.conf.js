const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const utils = require('./utils')
const config = require('../config')
const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')

const env = config.prod.env

module.exports = merge(baseConf, {
	module: {
		rules: utils.styleLoaders({
			sourceMap: true,
			extract: true
		})
	},
	devtool: config.prod.productionSourceMap ? "#source-map" : false,
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Вы все говно',
			filename: 'index.html',
			inject: true,
			hash: true,
			template: 'index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			}
		}),
		new webpack.DefinePlugin({
			'process.env': env
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new CompressionPlugin({
			asset:'[path].gz[query]',
			algorithm: 'gzip',
			test: new RegExp('\\.(' + config.prod.productionGzipExtension.join('|') + ')$'),
			deleteOriginalAssets: false,
			threshold: 0,
			minRatio: 0.8
		})
	]
})