var helpers = require('./webpack/helpers');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack/webpack-isomorphic-tools'));
var fs = require('fs');
var path = require('path');


var babelrc = fs.readFileSync('./.babelrc');
var babelrcObject = {};

try {
  babelrcObject = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

var babelrcObjectDevelopment = babelrcObject.env && babelrcObject.env.development || {};

// merge global and dev-only plugins
var combinedPlugins = babelrcObject.plugins || [];
combinedPlugins = combinedPlugins.concat(babelrcObjectDevelopment.plugins);

var babelLoaderQuery = Object.assign({}, babelrcObject, babelrcObjectDevelopment, {plugins: combinedPlugins});
delete babelLoaderQuery.env;

console.log( path.resolve(__dirname, './example'));
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    '@babel/polyfill',
    './example/Render.js',
    'bootstrap-loader',
    './example/theme/style.css',
    'font-awesome-webpack!./example/theme/font-awesome.config.js',
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/assets',
    filename: 'example.bundle.js'
  },
  devServer: {
    contentBase: '.'
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'happypack/loader?id=jsx',
        include: [path.resolve(__dirname, './src'), path.resolve(__dirname, './example')]
      }, {
        test: /\.json$/,
        loader: 'happypack/loader?id=json',
        include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../example')]
      }, {
        test: /\.less$/,
        loader: 'happypack/loader?id=less',
        include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../example')]
      }, {
        test: /\.scss$/,
        loader: 'happypack/loader?id=sass',
        include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../example')]
      }, {
        test: /\.css$/,
        loader: 'happypack/loader?id=css',
        include: [path.resolve(__dirname, '../src'), 'node_modules', path.resolve(__dirname, './example')]
      }, {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'application/font-woff'
        }
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'application/octet-stream'
        }
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'image/svg+xml'
        }
      }, {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loader: 'url-loader',
        options: {
          limit: 10240
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    helpers.createHappyPlugin('jsx', [
      {
        loader: 'babel-loader',
        options: babelLoaderQuery
      }, {
        loader: 'eslint-loader',
        options: {emitWarning: true}
      }
    ]),

    helpers.createHappyPlugin('less', [
      {
        loader: 'style-loader',
        options: {sourceMap: true}
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          sourceMap: true,
          // localIdentName: '[local]___[hash:base64:5]'
          localIdentName: '[local]'
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true, options: { syntax: 'sugarss' }
        }
      }, {
        loader: 'less-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: true
        }
      }
    ]),
    helpers.createHappyPlugin('sass', [
      {
        loader: 'style-loader',
        options: {sourceMap: true}
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          sourceMap: true,
          localIdentName: '[local]___[hash:base64:5]'
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: true
        }
      }
    ]),
    helpers.createHappyPlugin('css', [
      {
        loader: 'style-loader',
        options: {sourceMap: true}
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          sourceMap: true,
          /* localIdentName: '[local]___[hash:base64:5]' */
          localIdentName: '[local]'
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: true
        }
      }
    ])
  ]
};
