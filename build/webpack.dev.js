const merage = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merage(common, {
   devtool: 'inline-source-map',
   devServer: {
       contentBase: '../dist'
   }
});

