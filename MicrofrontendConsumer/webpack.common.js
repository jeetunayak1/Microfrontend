const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv-webpack');

module.exports = {
    entry: path.join(__dirname, "src/vue-mf-root-config"),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'vue-mf-root-config.js',
        publicPath: '/',
        libraryTarget: "system"
    },
    module: {
        rules: [
            { parser: { system: false } },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{ loader: "babel-loader" }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new dotenv({
            path: './.env',
            safe: true,
            defaults: false
        })
    ]
};
