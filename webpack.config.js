var webpack            = require('webpack');
var CopyWebpackPlugin  = require('copy-webpack-plugin');
var HtmlWebpackPlugin  = require('html-webpack-plugin');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var Clean              = require('clean-webpack-plugin');
/*
 * Config
 */
module.exports = {
    // for faster builds use 'eval'
    debug: true,
    watch: true,
    
    // webpack-dev-server config
    // in the webpack-dev-server all files are ran from memory and not copied anywhere (no dist/ folder created)
    devServer: {
        port: 8001,
        contentBase: "./dist"
    },
  
    
    entry: { 'lib': './src/lib.ts', 'main': './src/main.ts', 'lib.styles':  'bootstrap-sass!./src/styles/bootstrap.config.js' }, // angular2.0 app
    
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
                test: /\.tsx?$/, // regex which selects which type of files should be ran through this loader ( .ts or .tsx )
                loader: 'ts-loader', // loader name
                query: {
                    'ignoreDiagnostics': [
                        2403, // 2403 -> Subsequent variable declarations
                        2300, // 2300 -> Duplicate identifier
                        2374, // 2374 -> Duplicate number index signature
                        2375  // 2375 -> Duplicate string index signature
                    ]
                } 
            },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!' + 'sass?precision=10&outputStyle=expanded&sourceMap=true') },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
            { test: /\.(jpe?g|png|gif)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]' }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ]), 
        new HtmlWebpackPlugin({ template: 'src/index.html', inject: true }), // generates html
        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery'}), // You can use $ or jquery in all components
        new ExtractTextPlugin('styles.css'),
        new Clean(['dist'], root())
    ]
  
};

function root(args) {
  var path = require('path'); 
    
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}