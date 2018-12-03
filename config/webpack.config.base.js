const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(less|css)?$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      }
    ]
  },
  optimization: {
    // 包清单
    runtimeChunk: {
      name: "manifest"
    },
    // 拆分公共包
    splitChunks: {
      cacheGroups: {
        //项目公共组件
        common: {
          chunks: "initial",
          name: "common",
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        //第三方组件
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'public/index.html',
    }),
  ],
}