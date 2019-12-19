const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './',
    hot: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 1000, // 延迟时间
    },
  }
};

module.exports = merge(baseConfig, config);
