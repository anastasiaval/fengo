const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: path.resolve(__dirname, 'src/index.pug')
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        port: 9090,
        historyApiFallback: true
    }
};

