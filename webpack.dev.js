const path = require('path');
const merge = require('webpack-merge');
const webpackBasicConfig = require('./webpack.base.js');

module.exports = merge(webpackBasicConfig, {
  devtool: '#source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'built/'),
    staticOptions: {
      redirect: false,
    },
  },

});
