const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
   filename: 'css/main.css'
});


module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, 'static')
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		},
		{
			test: /\.scss$/,
			use: extractPlugin.extract({
				use: ['css-loader?url=false', 'sass-loader']
			})
		}]
	},
	plugins: [
		extractPlugin
	]
};