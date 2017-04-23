const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.resolve(__dirname, 'src'),
  devtool: 'source-map',
  entry: {},
  output: {},
  plugins: [],
  modules: [],
  resolve: {},
};

export default config;
