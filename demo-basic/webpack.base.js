
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.WEBPACK_DEV_SERVER === 'true' || process.env.NODE_ENV === 'development';

const outputs = {
  dev: {
    js: '[name].js',
    css: '[name].css',
    file: '[folder]/[name].[ext]',
  },
  prod: {
    js: '[name]_[contenthash:8].js',
    css: '[name]_[contenthash:8].css',
    file: '[folder]/[name]_[contenthash:8].[ext]',
  }
};
const output = isDev ? outputs.dev : outputs.prod;

module.exports = {
  mode: 'none',

  entry: {
    main: './src/index.js',
  },
  output: {
    filename: output.js,
    path: path.join(__dirname, 'dist'),
    // publicPath: 'https://cdn.sparrow.team/webpack-demo/'
  },


  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
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
              hmr: isDev,
            },
          },
          'css-loader',
          'less-loader'
        ],
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: output.file,
            }
          },
        ],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|png|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: output.file,
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
      minify: isDev ? false : {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: output.css,
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ]
}