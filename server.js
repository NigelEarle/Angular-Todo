const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');

const PORT = process.env.PORT || 3001;
const isDev = process.env.NODE_ENV !== 'production';

const app = express();
const compiler = webpack(config);

if (isDev) {
  /* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
