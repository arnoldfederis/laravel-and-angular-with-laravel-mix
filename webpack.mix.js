 /*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

let mix  = require('laravel-mix');
require('./webpack-custom-config');

mix.js([
	'resources/assets/js/app.js',
	'resources/assets/ts/vendor.ts',
	'resources/assets/ts/polyfills.ts'
], 'public/js/vendor.js');

mix.js([
	'resources/assets/ts/components/app/app.main.ts'
], 'public/js/app-component.js')

mix.js([
	'resources/assets/ts/components/angular/angular.main.ts'
], 'public/js/angular-component.js')

mix.sass('resources/assets/sass/app.scss', 'public/css');