const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '_icons': path.resolve(__dirname, 'src/assets/icons/'),
            '_logos': path.resolve(__dirname, 'src/assets/logos/'),
            '_components': path.resolve(__dirname, 'src/components/'),
            '_containers': path.resolve(__dirname, 'src/containers/'),
            '_pages': path.resolve(__dirname, 'src/pages/'),
            '_styles': path.resolve(__dirname, 'src/styles/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset'
			}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/Index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        //contentBase: path.join(__dirname,'dist'),
        historyApiFallback: true,
        compress: true,
        port: 3005,
    }
}