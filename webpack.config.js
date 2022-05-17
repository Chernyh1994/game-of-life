const path = require('path');

module.exports = {
  mode: 'none',
  entry: [
    './src/index.js',
    './public/styles/index.css',
  ],
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: '**/node_modules',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
          },
        },
      },
    ],
  },
};
