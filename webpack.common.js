const path = require('path');

module.exports = {
  entry: {
    app: './src/text-field.js',
  },
  output: {
    filename: 'text-field.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
};
