var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  // javascipt entry
  entry: "./index.js",
  // file name and file path after bundled by webpack
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [{
      // use regex to match css file
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        // loader to transfer .css file
        use: ["css-loader"]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `[name]_[contenthash:8].css`
    })
  ]
};