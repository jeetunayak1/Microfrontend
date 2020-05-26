const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require("webpack");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        libraryTarget: "var"
    },
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        compress: true,
        port: 9001,
        disableHostCheck: true,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.isStandalone": true
        })
    ]
});