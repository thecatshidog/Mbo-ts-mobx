const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const compress = require('koa-compress');
const config = require('../config');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const proxy = require('http-proxy-middleware');
const internalIp = require('internal-ip');

function broadcast(port) {
  const bonjour = require('bonjour')();
  bonjour.publish({
    name: `Mbo`,
    port,
    type: 'http',
    subtypes: ['webpack'],
  });
  process.on('exit', () => {
    bonjour.unpublishAll(() => {
      bonjour.destroy();
    });
  });
}

module.exports = merge(webpackBaseConfig, {
  serve: {
    content: path.resolve(__dirname, '../dist/'),
    add: app => {
      app.use(compress());
      app.use(convert(proxy('/api', { target: 'http://localhost:3001' })));
      app.use(convert(history()));
    },
    on: {
      listen(server) {
        broadcast(server.address().port);
      },
    },
    port: config.dev.port,
    open: true,
    hot: {
      client: internalIp.v4.sync(),
      server: '0.0.0.0',
    }
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
    })
  ],
})
