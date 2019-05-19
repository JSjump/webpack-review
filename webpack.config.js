const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        main:'./src/index.js',
        vendor:[
            'lodash'
        ]},
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Caching'
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization:{
    runtimeChunk: {
        name: 'manifest'
      },
    splitChunks:{
        cacheGroups:{
        vendor: {
            name: 'vendor',
            chunks: 'initial',
            priority: -10,
            reuseExistingChunk: false,
            test: /node_modules\/(.*)\.js/  
        }
    }
  }
},
  output: {
    filename:'[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
};