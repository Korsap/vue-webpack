'use strict'
const path = require('path')

module.exports ={
	prod: {
		assetsRoot: path.join(__dirname, '..', 'dist'),
		assetsPublicPath: '/',
		stylePath: 'css/styles.css',
		env: {
			NODE_ENV: JSON.stringify('production')
		},
		productionSourceMap: true,
		productionGzipExtension: ['js', 'css']
	},
	dev: {
		assetsRoot: path.join(__dirname, '..', 'dist'),
		assetsPublicPath: '/',
		stylePath: 'css/styles.css',
		env: {
			NODE_ENV: JSON.stringify('development')
		},
		host: process.env.HOST || 'localhost',
		port: process.env.PORT || 8080
	}
}