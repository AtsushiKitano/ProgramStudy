const path = require("path");
const outputPath = path.resolve(__dirname, "dist/js");
const webpack = require("webpack");

module.exports = {
  entry: "./src/client.js",

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }]
    }]
  },

  output: {
    path: outputPath,
    publicPath: "/js/",
    filename: "client.min.js"
  },

};
