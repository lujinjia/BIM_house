const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {

    entry: {
        index: './src/index.js'
    },

    plugins: [
        new CleanWebpackPlugin(['/dist']),
        new HTMLWebpackPlugin({
            title: 'Caching'
        }),
        new webpack.HashedModuleIdsPlugin()
    ],

    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../dist')
    }


};