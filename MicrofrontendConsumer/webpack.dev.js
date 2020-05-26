const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const htmlwebpackplugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        disableHostCheck: true,
        historyApiFallback: true,
        port: 9000
    },
    plugins: [
        new htmlwebpackplugin({
            inject: false,
            template: "src/index.ejs",
            templateParameters: {
                isLocal: "development"
            }
        })
    ]
});