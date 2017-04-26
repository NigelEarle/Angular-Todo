const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeModules = path.join(__dirname, 'node_modules');

const isTest = process.env.NODE_ENV === 'test';

const config = {
  devtool: isTest ? 'inline-source-map' : 'source-map',
  entry: isTest ? null : [
    'webpack-hot-middleware/client?reload=true',
    './src/index.js',
  ],
  output: isTest ? {} : {
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
        include: path.join(__dirname, 'src'),
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

if (isTest) {
  config.module.rules.push({
    enforce: 'pre',
    test: /\.js$/,
    exclude: [
      nodeModules,
      /\.spec.js$/,
    ],
    loader: 'istanbul-instrumenter-loader',
    query: {
      esModules: true,
    },
  });
}

if (!isTest) {
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = config;

