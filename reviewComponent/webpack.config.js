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
        rules: [{
            test: /\.jsx?/,
            include: path.join(__dirname, './client/src'),
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
}