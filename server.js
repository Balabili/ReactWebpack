const express = require('express');
const webpack = require('webpack');
const opn = require('opn');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./config/webpack.config.dev');

const app = express();
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

// Serve the files on port 3000.
app.listen(3000, () => {
  opn('http://localhost:3000');
});
