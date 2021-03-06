var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');

module.exports = {
    // for faster builds use 'eval'
    debug: true,
    watch: true,

    entry: {
        'lib': [

            // Polyfills
            'core-js/es6',
            'core-js/es7/reflect', 
            'zone.js/dist/zone',            
            'reflect-metadata',
            'zone.js/dist/long-stack-trace-zone',

            // Angular2
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/core',
            '@angular/common',
            '@angular/http',
            '@angular/router-deprecated',

            // RxJS
            'rxjs',
            // Other
            'angular2-jwt',
            'socket.io-client',
            'lodash'
        ],
        'main': './src/main.ts',
        'bootstrap': 'bootstrap-sass!./src/styles/bootstrap.config.js'
    },

    // Config for our build files
    output: {
        path: root('dist'), // our build folder name
        filename: '[name].bundle.js', // [name] is used so the bundle file name matches the entry point defined above
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    devtool: 'source-map',

    resolve: { extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'] },// Add `.ts` and `.tsx` as a resolvable extension. 
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint-loader',
                exclude: [/node_modules/]
            }
        ],
        loaders: [
            {
                test: /\.ts$/, exclude: [/node_modules/], loader: 'ts-loader',
                query: {
                    'ignoreDiagnostics': [
                        2403, // 2403 -> Subsequent variable declarations
                        2300, // 2300 -> Duplicate identifier
                        2374, // 2374 -> Duplicate number index signature
                        2375,  // 2375 -> Duplicate string index signature
                        2309
                    ]
                }
            },
            { test: /\.html$/, loader: 'raw' },
            {
                test: /\.scss$/,
                // loaders can be assigned parameters with '?param=value
                loader: ExtractTextPlugin.extract('style', 'css!' + 'sass?precision=10&outputStyle=expanded&sourceMap=true')
            },
            // parameters: any image smaller than 100000kb is going to be inlined and turned into base64 data. Any other image will be a separate request
            { test: /\.(jpe?g|png|gif)$/, exclude: 'node_modules', loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ],
        noParse: [/.zone-microtask/, /.long-stack-trace-zone/]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({ name: 'lib', filename: 'lib.bundle.js', minChunks: Infinity }),
        new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
        new HtmlWebpackPlugin({ template: 'src/index.html', inject: true }), // generates html
        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), // You can use $ or jquery in all components
        new ExtractTextPlugin('styles.css'),
        new Clean(['dist'], root())
    ]

};

function root(args) {
    var path = require('path');

    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}