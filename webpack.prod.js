const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = merge(common, {
  mode: "production",
  entry: {
    app: path.join(__dirname, "src", "index.ts")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new VueLoaderPlugin()
  ]
});
