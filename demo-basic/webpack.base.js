
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const isDev = process.env.WEBPACK_DEV_SERVER === 'true' || process.env.NODE_ENV === 'development';

const outputs = {
  dev: {
    js: '[name].js',
    css: '[name].css',
    file: '[folder]/[name].[ext]',
    chunkFilename: '__page_[name].js',
  },
  prod: {
    js: '[name]_[contenthash:8].js',
    css: '[name]_[contenthash:8].css',
    file: '[folder]/[name]_[contenthash:8].[ext]',
    chunkFilename: '__page_[name]_[contenthash:8].js',
  }
};
const output = isDev ? outputs.dev : outputs.prod;

module.exports = {
  mode: 'none',

  entry: {
    main: './src/index.js',
    index2: './src/index2.js',
    index11: './src/index11.js',
    index12: './src/index12.js',
    index13: './src/index13.js',
  },
  output: {
    filename: output.js,
    chunkFilename: output.chunkFilename,
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
        include: path.join(__dirname, 'src'),
        use: [
          { loader: 'thread-loader' },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'eslint-loader',
          }
        ],
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
    new HardSourceWebpackPlugin(),
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
  ],

  resolve: {
    modules: [path.join(__dirname, 'node_modules')],
    extensions: ['.js'],
    alias: {
      'react': path.join(__dirname, 'node_modules/react/umd/react.production.min.js'),
      'react-dom': path.join(__dirname, 'node_modules/react-dom/umd/react-dom.production.min.js'),
    }
  },

  // 分离基础包
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /(react|react-dom)/,
          name: 'vendors',
          chunks: 'all'
        },
        components: {
          minSize: 1,
          name: 'components',
          minChunks: 2,
          chunks: 'all',
        }
      }
    }
  },

  // optimization: {
  //   splitChunks: {
  //     chunks: 'all', // 默认是async, 还有 initial 和 all
  //     minSize: 30000, // 最小的大小
  //     maxSize: 0, // 最大的大小
  //     minChunks: 10,  // 使用次数
  //     maxAsyncRequests: 5,  // 异步同时请求数量
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: '~',
  //     name: true,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // },
}