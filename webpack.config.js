var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/MonthPickerInput',
  output: {
    libraryTarget: 'umd',
    library: 'ReactMonthPickerInput',
    path: path.resolve('./dist/'),
    filename: 'react-month-picker-input.js'
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
            { loader: 'css-loader', options: { minimize: process.env.NODE_ENV === 'production' } }
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.ts', '.tsx']
  },
  externals: [
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-input-mask': {
        root: 'react-input-mask',
        commonjs2: 'react-input-mask',
        commonjs: 'react-input-mask',
        amd: 'react-input-mask'
      }
    },
    {
      'react-onclickoutside': {
        root: 'onClickOutside',
        commonjs2: 'react-onclickoutside',
        commonjs: 'react-onclickoutside',
        amd: 'react-onclickoutside'
      }
    }
  ],
  node: { Buffer: false },
  plugins: [
    new ExtractTextPlugin('react-month-picker-input.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
