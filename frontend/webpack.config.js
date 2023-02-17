const path = require("path");

module.exports = {
  entry: "./index.jsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "..", "backend", "public"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "..", "backend", "public"),
    },
    host: "localhost",
    compress: true,
    port: 3000,
    open: true,
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
