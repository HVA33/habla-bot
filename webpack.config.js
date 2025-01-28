const path = require('path');

module.exports = {
  entry: './src/index.js', // Update this if your main file is in a different path
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'production', // Change to 'development' if needed
};
