const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.otf$/,
        loader: "file-loader",
        options: {
          name: '[name].[ext]',
          outputPath: "fonts/"
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: "./dist"
  }
};

module.exports = config;
