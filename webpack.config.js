const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NAMES = {
  images: 'images',
  assets: 'assets',
};

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js" // string
  },
  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // { loader: "style-loader", options: { sourceMap: true } },
          { loader: "css-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: path.join(NAMES.assets, NAMES.images)
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
