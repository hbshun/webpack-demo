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
  //   main: './src/index.js',
  //   index2: './src/index2.js',
  // },

  // 数组多入口
  // entry: [
  //   './src/index.js',
  //   './src/index2.js',
  // ],

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [

  ],
}