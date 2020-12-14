const mix = require('laravel-mix');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
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

mix.react('resources/js/app.js', 'public/js')
    .js('resources/js/admin.js','public/js')
    .js('resources/js/user.js','public/js')
    .js('resources/js/home.js','public/js')
    .js('resources/js/reset.js','public/js')
    .js('resources/js/blog.js','public/js')
    .js('resources/js/wx/login.js','public/js/wx')
    .sass('resources/sass/app.scss', 'public/css')

    .webpackConfig({
        plugins: [
            new MonacoWebpackPlugin()
        ]
    });

mix.browserSync('TMS/');
