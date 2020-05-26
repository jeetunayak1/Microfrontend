const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        compress: true,
        port: 3001,
        disableHostCheck: true,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    }
});