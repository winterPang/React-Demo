var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//often use path
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');


module.exports = {
	entry : {
		app : path.resolve(APP_PATH,'app.jsx')
	},
	output : {
		path : BUILD_PATH,
		filename : 'bundle.js'
	},
	// open dev source map
	devtool : "eval-sorce-map",
	//open webpack dev server
	devServer : {
		historyApiFallback:true,
		hot : true,
		inline : true,
		progress : true
	},
	eslint: {
	  configFile: './.eslintrc'
	},
	resolve : {
			extensions : ['','.js', '.jsx']
	},
	module : {
		// config reloaders  add eslint
		preLoaders : [
			{
				test : /\.jsx?$/,
				loaders : ['eslint'],
				include : APP_PATH
			}
		],
		//config loader, add babel
		loaders : [
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				include : APP_PATH
			},
			{
		       test: /\.scss$/,
		       loaders: ['style', 'css', 'sass']
		    }
		] 
	},
	plugins : [
		new HtmlWebpackPlugin({
			title: 'Deskmark app'
		})
		
	]
}
