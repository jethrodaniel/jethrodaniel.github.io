// see https://webpack.js.org/configuration/

const path = require('path');

module.exports = {
  // mode: "production",
  mode: "development",

  entry: "./src/index.coffee",

  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|coffee)$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.coffee$/,
        use: [ 'coffee-loader' ]
      }
    ]
  }
};
