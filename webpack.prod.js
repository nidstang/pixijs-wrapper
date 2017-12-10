const webpack = require('webpack');
const path = require('path');
const webpackBasicConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

const { UglifyJsPlugin } = webpack.optimize;

const libraryName = 'runengine';
const outputFile = `${libraryName}.min.js`;

module.exports = merge(webpackBasicConfig, {
  entry: path.resolve(__dirname, 'source/entry.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  externals: {
    three: {
      commonjs: 'pixi.js',
      commonjs2: 'pixi.js',
      amd: 'pixi.js',
      root: '_',
    },
  },

  plugins: [
    new UglifyJsPlugin({
      minimize: true,
    }),
  ],

});
