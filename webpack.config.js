const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});


// extract the style sheets into a dedicated file in production. This way styles are not dependent on JavaScript
const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './src/index.js',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            { loader: "css-loader" },
            { loader: "sass-loader" }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, extractSass],
  devServer: {
    historyApiFallback: true,
  }
};