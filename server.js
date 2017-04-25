const express = require('express');
const webpack = require('webpack');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./webpack.config');
const db = require('./server/models');
const tasks = require('./server/routes/task');

const PORT = process.env.PORT || 3001;
const isDev = process.env.NODE_ENV !== 'production';

const app = express();
const compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', tasks);

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
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'src', 'index.html')));
}

app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`listening on port: ${PORT}`);
});
