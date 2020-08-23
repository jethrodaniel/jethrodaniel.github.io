const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CnameWebpackPlugin = require('cname-webpack-plugin');

var env = "development";

module.exports = {
  mode: env,
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "public", "index.html")
    }),
    new CnameWebpackPlugin({
      domain: 'jethrodaniel.com',
    }),
    new CleanWebpackPlugin(),
  ]
};
