const webpack = require('webpack');
const config = require('../config');
const webpackBaseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const utils = require('./utils');

const env = config.build.env
process.env.NODE_ENV = env.NODE_ENV

module.exports = merge(webpackBaseConfig, {
  module: {
    rules: [{
      test: /\.(scss|sass)$/,
      use: [
        'style-loader',
        {
          loader: 'typings-for-css-modules-loader',
          options: {
            allowMultiple: true,
            modules: true,
            namedExport: true,
            camelCase: true,
            minimize: true,
            localIdentName: '[local]_[hash:base64:5]',
            handleNotFoundStyleName: 'ignore',
          },
        },
        'postcss-loader',
      ],
    }]
  },
  mode: 'production',
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[hash].js'),
    publicPath: config.build.assetsPublicPath
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        extractComments: true,
      })
    ],
    runtimeChunk: {
      name: 'manifest',
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/main.[hash].css')
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/\.map$/],
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
})