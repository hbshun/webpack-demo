
const merge = require('webpack-merge');
const baseConfig = require('./webpack.prod');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
};

module.exports = merge(baseConfig, config);
