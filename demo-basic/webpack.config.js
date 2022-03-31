const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081
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
      name: 'basic',
      // 其他应用引入这个入口
      filename: 'remoteEntry.js',
      // 这里是暴露出去的部分、可以是页面或者组件，当然是一样的，都是react的组件
      exposes: {
        './App': './src/App',
        './MyComponent': './src/components/MyComponent',
      },
      // TODO 这个参数 不知道什么意思
      // shared: { react: { singleton: true, eager: true }, "react-dom": { singleton: true, eager: true } },
    }),

  ],
}
