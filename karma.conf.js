'use strict';

var path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/helpers/pack/**/*.js',
      'test/helpers/react/**/*.js',
      'test/spec/components/**/*.js',
      'test/spec/stores/**/*.js',
      'test/spec/actions/**/*.js',
      'test/spec/pages/**/*.js'
    ],
    preprocessors: {
      'test/helpers/createComponent.js': ['webpack'],
      'test/spec/components/**/*.js': ['webpack'],
      'test/spec/components/**/*.jsx': ['webpack'],
      'test/spec/stores/**/*.js': ['webpack'],
      'test/spec/actions/**/*.js': ['webpack'],
      'test/spec/pages/**/*.js': ['webpack']
    },
    webpack: {
      cache: true,
      module: {
        loaders: [{
          test: /\.gif/,
          loader: 'url-loader?limit=10000&mimetype=image/gif'
        }, {
          test: /\.jpg/,
          loader: 'url-loader?limit=10000&mimetype=image/jpg'
        }, {
          test: /\.png/,
          loader: 'url-loader?limit=10000&mimetype=image/png'
        }, {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader?plugins=rewire',
          exclude: /node_modules/
        }, {
          test: /\.sass/,
          loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }, {
          test: /\.woff/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        }, {
          test: /\.woff2/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff2'
        }]
      },
      resolve: {
        alias: {
          'styles': path.join(process.cwd(), './src/styles/'),
          'components': path.join(process.cwd(), './src/components/'),
          'stores': path.join(process.cwd(),  './src/stores/'),
          'actions': path.join(process.cwd(),  './src/actions/'),
          'helpers': path.join(process.cwd(), './test/helpers/'),
          'constants': path.join(process.cwd(),  './src/constants/'),
          'pages': path.join(process.cwd(),  './src/pages/')
        }
      }
    },
    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true
      }
    },
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: true,
    browsers: ['PhantomJS'],
    reporters: ['dots'],
    captureTimeout: 60000,
    singleRun: false,
    plugins: [
        require('karma-webpack'),
        require('karma-jasmine'),
        require('karma-phantomjs-launcher')
    ]
  });
};
