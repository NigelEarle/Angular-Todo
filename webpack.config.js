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
        use: [
          'babel-loader',
          'ng-annotate-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: nodeModules,
        use: [
          'url-loader?limit=10000',
        ],
      },
      {
        test: /\.s?css$/,
        exclude: nodeModules,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        exclude: nodeModules,
        use: [
          'raw-loader',
        ],
      },
    ],
  },
};

module.exports = config;
