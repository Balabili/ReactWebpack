const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const base = require('./webpack.config.base');

module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js',
    publicPath: '',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
});
