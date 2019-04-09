const path = require('path');
const CLIENT_PATH = path.join(`${__dirname}/client`);
const PUBLIC_PATH = path.join(`${__dirname}/public`);


module.exports = {
    entry: path.join(__dirname, './client/src/index.jsx'),
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.jsx?/,
            include: CLIENT_PATH,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
          {
            test: /\.css$/,
            include: CLIENT_PATH,
            loader: ['style-loader', 'css-loader'],
          },
          {
            test: /\.svg$/,
            include: CLIENT_PATH,
            loader: ['svg-inline-loader?removeTags'],
          },
        ],
      },
    };