var path = require('path');
var webpack = require('webpack')

module.exports = {
	entry: './src/js/main.js',
	output:{
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist/js')
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	devServer: {
		contentBase: 'dist',
		port: 8000
	}
};