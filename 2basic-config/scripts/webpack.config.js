const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        // path: path.resolve(__dirname, "dist"),
        path: path.resolve(process.cwd(), "dist"),
        filename: 'js/[name].[chunkhash:6].js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
                // "style-loader", 
                MiniCssExtractPlugin.loader,
                "css-loader"
            ],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash:6].css',
            // chunkFilename: '[id].css'
        })
    ],
    devServer: {
        port: 3000,
        open: true
    }
}