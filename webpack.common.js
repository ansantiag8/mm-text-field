const path = require('path');

module.exports = {
  entry: {
    app: './src/text-field.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
};