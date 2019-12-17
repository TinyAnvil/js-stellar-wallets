const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    "wallet-sdk": "./dist/index.js",
    "wallet-sdk.min": "./dist/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/commonjs"),
    libraryTarget: "commonjs2",
  },
  // resolve: {
  //   extensions: [
  //     ".js",
  //     ".json",
  //     ".ts"
  //   ],
  // },
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "ts-loader",
      //       options: {
      //         transpileOnly: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.min\.js$/,
      }),
    ],
  },
};
