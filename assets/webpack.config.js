var path = require('path');
var webpack = require('webpack');
var TerserPlugin = require('terser-webpack-plugin');

var relativePath = path.resolve.bind(null, __dirname);
var distPath = './dist';

var babelLoader = {
  loader: 'babel-loader?cacheDirectory',
  query: {
    presets: [
      require.resolve('@babel/preset-env'),
      require.resolve('@babel/preset-react')
    ]
  }
};

module.exports = {
  entry: {
    'any': relativePath('./src/main/Components/Any.jsx'),
  },
  output: {
    path: relativePath(distPath + '/'),
    publicPath: relativePath(distPath + '/'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: babelLoader
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      }
    ]
  },

  resolve: {
    modules: ['node_modules'],
    symlinks: false,
    extensions: ['.js', '.jsx'],
  },

  optimization: {
    moduleIds: 'hashed',
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'es6-promise',
      fetch: 'whatwg-fetch'
    }),
  ],

  parallelism: 1
};
