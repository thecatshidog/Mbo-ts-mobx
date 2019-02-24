const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const config = require('../config');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');


module.exports = merge(webpackBaseConfig, {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: config.dev.port,
    bonjour: true,
    inline: true,
    hot: true,
    open: true,
    historyApiFallback: true,
    overlay: true
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.(sass|scss)$/,
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
  devtool: 'cheap-module-source-map',
  plugins: [
    new StyleLintPlugin({
      context: 'src',
      quiet: false,
      syntax: 'scss',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
})