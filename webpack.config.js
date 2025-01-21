// Basically this is just an object that we're going to export.
// And It uses CommonJS syntax.

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode : 'development',
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
    },
    devServer : {
        static : {
            directory : path.resolve(__dirname, 'dist'),
        },
        port : 3000,
        open : true,
        hot : true,
        compress : true,
        historyApiFallback : true,
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ['style-loader', 'css-loader']
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : 'Webpack App Starter',
            filename : 'index.html',
            template : './src/index.html'
        })
    ]
};