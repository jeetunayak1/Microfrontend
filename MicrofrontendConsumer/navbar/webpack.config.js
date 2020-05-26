const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/main.js',
    mode: 'production',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'navbar.js',
        publicPath: '/',
        libraryTarget: "system"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]

    },

    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()

    ]
};
