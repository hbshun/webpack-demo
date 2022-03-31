const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082
  },
  entry:  './src/index.js',
  output: {
    publicPath: 'auto',
  },


  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
        ],
      },
      {
        test: /\.(jpg|png|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8190,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 生成文件的文件名
      template: './src/assets/index.html', // 源文件文件名，无需引入js css等，打包自动注入
      favicon: './src/assets/images/favicon.ico',
    }),
    new ModuleFederationPlugin({
      name: "second",
      remotes: {
        basic: "basic@http://localhost:8081/remoteEntry.js",
      },
    }),
  ],
}
