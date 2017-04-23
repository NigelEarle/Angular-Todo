// const webpack = require('webpack');
const path = require('path');

const nodeModules = path.join(__dirname, 'node_modules');

const config = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, '/build/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: nodeModules,
        loaders: ['babel-loader', 'ng-annotate-loader'],
      },
    ],
  },
  // resolve: {
  //   extensions: ['', '.js', '.css', '.scss'],
  // },
};

module.exports = config;
