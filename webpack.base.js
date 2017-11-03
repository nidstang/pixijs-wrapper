const path = require('path');

const sourcePath = path.resolve(__dirname, 'source');

module.exports = {
  entry: './source/main.js',
  output: {
    path: path.resolve(__dirname, 'built'),
    filename: 'app.js',
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      '@': sourcePath,
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: sourcePath,
        loader: 'babel-loader',
      },
    ],
  },
};
