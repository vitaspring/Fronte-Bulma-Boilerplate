const path = require('path');
const autoprefixer = require('autoprefixer');
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
				use: [{
					loader: 'css-loader',
					options: {
						url: false
					}
				},
				{
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers:['ie >= 8', 'last 4 version']
                            })
                        ],
                        sourceMap: true
                    }
                },
				{
					loader: 'sass-loader'
				}]
			})
		}]
	},
	plugins: [
		extractPlugin
	]
};