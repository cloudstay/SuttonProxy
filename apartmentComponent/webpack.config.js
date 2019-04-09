// const webpack = require('webpack');
// const path = require('path');

module.exports = {
  context: __dirname + '/client',
  entry: './index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/preset-env'],
        },
      },
    ],
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  }
};