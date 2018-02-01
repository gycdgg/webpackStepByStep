var path = require("path");

module.exports = {
  // javascipt entry
  entry: "./index.js",
  // file name and file path after bundled by webpack
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,"./dist")
  }
};