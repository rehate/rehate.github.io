const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'env',
                'stage-3',
              ],
            },
          },
        ],
        exclude: '/node_modules/',
      },
    ],
  },
};
