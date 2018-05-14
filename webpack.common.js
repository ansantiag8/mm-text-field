const path = require('path');

module.exports = {
  entry: {
    app: './src/mm-text-field.js',
  },
  output: {
    filename: 'mm-text-field.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
};
