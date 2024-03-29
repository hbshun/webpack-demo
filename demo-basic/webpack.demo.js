const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {

  // 0配置 对应的配置
  // entry: {
  //   main: './src/index.js',
  // },
  // output: {
  //   // filename: 'main.js',
  //   // path: path.join(__dirname, 'dist'),
  // },


  ////////////// Entry ///////////////

  // 单入口
  // entry: {
  //   main: './src/index.js',
  // },

  // 简写
  // entry: './src/index.js',

  // 多入口
  // 应用场景：项目太大、权限分离、共用Components

  // entry: {
  //   index1: './src/index.js',
  //   index2: './src/index2.js',
  // },

  // 数组多入口
  // entry: [
  //   './src/index.js',
  //   './src/index2.js',
  // ],


  ////////////// Output ///////////////

  /**
   * 占位符
   * [name]
   * [hash]
   */

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    // publicPath: 'https://cdn.sparrow.team/webpack-demo/'
  },

  ////////////// Mode ///////////////
  /**
   * mode：值是字符串，以下三个值，默认是production
   * none
   * developement：启用 NamedChunksPlugin 和 NamedModulesPlugin。
   * production：启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 TerserPlugin。
   *
   */
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'less-loader'
        ],
      },
      {
        test: /\.ttf$/,
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[hash:6].[name].[ext]',
              limit: 8190,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 生成文件的文件名
      template: 'index.html', // 源文件文件名，无需引入js css等，打包自动注入
    }),
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
}