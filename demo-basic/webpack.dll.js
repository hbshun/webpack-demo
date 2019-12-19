const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: process.cwd(),
  resolve: {
    extensions: ['.js'],
    modules: [__dirname, 'node_modules'],
  },
  entry: {
    library: [
      'react',
      'react-dom',
    ],
    components: [
      './src/components/Loading'
    ],
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader']}
    ]
  },
  output: {
    filename: '[name]_[chunkhash:8].dll.js',
    path: path.join(__dirname, './dll'),
    library: '[name]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]_[chunkhash:8]',
      path: './dll/[name].json',
    }),
    new HtmlWebpackPlugin({                // 将已经插入过vendor.js的html再插入app.js，卧槽，感觉哪里不对
      filename: 'index.html',
      template: './src/assets/index.html',
      inject: 'body',
      hash: true,
    }),
  ]
}