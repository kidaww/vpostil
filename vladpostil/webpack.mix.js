const mix 		= require('laravel-mix');
const webpack = require('webpack');

require('laravel-mix-alias');

mix.alias({
	'@': '/src',
});

mix.webpackConfig({
  output: {
		chunkFilename: 'js/chunks/[name].[chunkhash].js',
	},
});

mix.js('src/main.js', 'public/js')