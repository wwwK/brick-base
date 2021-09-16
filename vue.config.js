const path = require('path');

const config = {
  publicPath: '/',
  devServer: {
    open: true,
  },
  configureWebpack: {
    entry: path.resolve(__dirname, './app/index.js'),
  }
};

module.exports = config;