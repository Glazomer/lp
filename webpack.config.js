const { resolve } = require('path'),
  webpack = require('webpack'),
  HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'build'),
  },
  devServer: {
    contentBase: './src',
    port: 3000,
    open: true,
    compress: true,
    hot: true,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.png',
      '.jpg',
      '.jpeg',
      '.svg',
      '.eot',
      '.ttf',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(jpe?g|png|svg|eot|ttf)$/i,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      BREAKPOINT_S: JSON.stringify(768),
    }),
    new webpack.DefinePlugin({
      BREAKPOINT_M: JSON.stringify(1024),
    }),
    new webpack.DefinePlugin({
      ROOT_BG_COLOR: JSON.stringify('#ffffff'),
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
