const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        // css module
        test: /\.module\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              camelCase: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [commonPaths.styleSheetPath],
            },
          },
        ],
      },
      {
        // regular stylesheet
        test: /\.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [commonPaths.styleSheetPath],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    historyApiFallback: true,
    compress: true,
    hot: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  devtool: '#source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: true,
      API_URL: 'http://localhost:5000/api',
      GOOGLE_CLIENT_ID:
        '737507115735-rm7027jki9vv0k2r12a800pc846h62f6.apps.googleusercontent.com',
    }),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
