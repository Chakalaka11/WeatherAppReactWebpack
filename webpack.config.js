const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HtmlWebpackPlugin = require

const config = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
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
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: "./dist"
  }
};

module.exports = config;
