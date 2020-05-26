const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const htmlwebpackplugin = require('html-webpack-plugin');
module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new htmlwebpackplugin({
            inject: false,
            template: "src/index.ejs",
            templateParameters: {
                isLocal: "production"
            }
        })
    ]
});