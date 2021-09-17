const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    host: 'localhost',
    port: 9000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new VueLoaderPlugin(),
  ],
});
