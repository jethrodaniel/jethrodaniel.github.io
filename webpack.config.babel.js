// see https://webpack.js.org/configuration/

import path from 'path'

import WriteFilePlugin from 'write-file-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

export default env => {

  const environment = env || 'development'
  console.log(`Env: ${environment}`)

  const isProd = () => env == 'production'

  return {
    mode: environment,
    entry: "./src/index.coffee",
    devtool: isProd() ? 'none' : 'source-map',
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js'
    },
    devServer: {
      historyApiFallback: true
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
          use: ['style-loader','css-loader']
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
    },
    plugins: [
      new CopyPlugin([
        { from: 'public', to: '' } // copy from /public /dist
      ]),
      new WriteFilePlugin()
    ]
  };
}
