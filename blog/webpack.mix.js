let mix = require('laravel-mix');
let webpack = require('webpack');

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


mix.js('resources/assets/js/app.js', 'public/js')
   .js('resources/assets/js/admin/stamps.js', 'public/js/admin')
   .js('resources/assets/js/admin/prot.js', 'public/js/admin')
   .js('resources/assets/js/admin/froala.js', 'public/js/admin')
   .js('resources/assets/js/guest/stamps.js', 'public/js/guest')
   .sass('resources/assets/sass/admin.scss', 'public/css')
   .sass('resources/assets/sass/admin/stamp-list.scss', 'public/css/admin')
   .sass('resources/assets/sass/admin/stamp-create.scss', 'public/css/admin')
   .sass('resources/assets/sass/guest.scss', 'public/css')
   .webpackConfig({
        plugins: [
            new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery'
            })
          ]
   })
   .sourceMaps(true);

