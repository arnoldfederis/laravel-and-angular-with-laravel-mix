 /*
 |--------------------------------------------------------------------------
 | Custom Webpack Config
 |--------------------------------------------------------------------------
 |
 | Custom Webpack Config for Angular
 |
 */

let mix  = require('laravel-mix');
let path = require('path');
let webpack = require('webpack');

mix.webpackConfig({
	resolve: {
		extensions: ['.ts']
    },

    module: {
    	rules: [
    		{
    			test: /\.ts$/,
    			loaders: [
    				{
    					loader: 'awesome-typescript-loader',
    					options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
    				},  'angular2-template-loader'
    			]
    		}
    	]
    },

    plugins: [
    	new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './client')),
    ]

});