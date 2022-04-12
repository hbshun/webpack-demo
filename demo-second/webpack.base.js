
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

const isDev = process.env.WEBPACK_DEV_SERVER === 'true' || process.env.NODE_ENV === 'development';

const outputs = {
  dev: {
    js: '[name].js',
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
              name: output.file,
              limit: 8190,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new HardSourceWebpackPlugin(),
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
    new ModuleFederationPlugin({
      name: "second",
      remotes: {
        basic: "basic@http://localhost:8081/remoteEntry.js",
      },
      // shared: ['react']
      // shared: { react: { eager: true } },
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
}