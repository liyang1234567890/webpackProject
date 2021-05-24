// node中的路径解析模块
const path = require('path') 

module.exports = {
    // entry: './src/index.js',
    entry: {
        home: './src/home.js',
        about: './src/about.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[chunkhash:6].js'
    }
}















    // entry: {
    //     home: './src/home.js',
    //     about: './src/about.js',
    // },
    // output: {
    //      path: path.resolve(__dirname, "dist"),
    //      filename: 'main.js'
    // }