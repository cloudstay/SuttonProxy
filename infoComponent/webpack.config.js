const path = require('path');

const CLIENT_PATH = path.join(`${__dirname}/client`);
const PUBLIC_PATH = path.join(`${__dirname}/public/dist`);


module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_PATH,
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
    ],
  },
};


// module.exports = {
//     entry: __dirname + '/client/src/index.jsx',
//     module: {
//       rules: [
//         { 
//           test: [/\.jsx$/],
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-react', '@babel/preset-env']
//             }
//           }
//         }
//       ]
//     },
//      output: {
//       filename: 'bundle.js',
//       path: __dirname + '/public/dist'
//     }
//   };