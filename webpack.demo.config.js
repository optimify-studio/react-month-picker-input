var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    port: 8080
  },
  entry: [
    './docs/index.tsx'
  ],
  output: {
    path: path.resolve('./docs/'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      'react-month-picker-input/dist/react-month-picker-input.css': path.resolve('./src/styles/index.scss'),
      'react-month-picker-input': path.resolve('./src/MonthPickerInput.tsx')
    }
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader?' + JSON.stringify({
          configFile: 'tsbuild.json'
        }),
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true } }
          ]
        })
      }
    ]
  },
  node: { Buffer: false },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: 'docs/index.ejs',
      inject: 'body'
    })
  ]
}
