process.env.NODE_ENV = 'production'

const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const prodConf = require('./webpack.prod.conf')

const spinner = ora('Building for production...')
spinner.start()

webpack(prodConf, function (err, stats) {
	spinner.stop()

	if (err) throw err

	process.stdout.write(stats.toString({
		colors: true,
		modules: false,
		children: false,
		chunk: false,
		chunkModules: false
	}))
	console.log('\n')
	console.log(chalk.green('>>>'), chalk.blue('Build complete!'))
	console.log(chalk.red('>>>'), chalk.yellow('Very important information!'), '\n')
})