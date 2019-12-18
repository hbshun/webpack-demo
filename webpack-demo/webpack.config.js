const path = require('path');
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
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 1000, // 延迟时间
  },
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
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

  ],
}