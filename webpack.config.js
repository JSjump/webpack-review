const path = require('path');
// const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    // another: './src/another-module.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    })
    // new webpack.config.optimization.splitChunks({
    //   name:'common' // 指定公共bundule的名称
    // })
  ],
//   optimization:{
//     splitChunks:{
//         cacheGroups:{
//              commons:{
//                  name:"commons",
//                  chunks:"initial",
//                  minChunks:2
//              }
//         }
//     }
//   },
  output: {
    filename: '[name].bundle.js',
    chunkFilename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};