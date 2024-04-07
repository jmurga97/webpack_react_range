const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const ruleForJS = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};

const ruleForTailwindCSS = {
  test: /\.css$/i,
  include: path.resolve(__dirname, "./src"),
  use: [
    "style-loader",
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["postcss-preset-env"],
        },
      },
    },
  ],
};

const ruleForTypescript = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

const ruleForFiles = {
    test: /\.(jpe?g|png|gif|svg)$/i,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "assets/images",
        publicPath: "assets/images"
      },
    },
  ],
};

const rules = [ruleForJS, ruleForTailwindCSS, ruleForTypescript,ruleForFiles];

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: rules,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    open: true,
    port: 8080,
    historyApiFallback:true
  },
};
