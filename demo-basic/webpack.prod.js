const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  mode: 'production',
  plugins: [
    new OptimizeCSSAssetsPlugin(),
  ],
};

module.exports = merge(baseConfig, config);
