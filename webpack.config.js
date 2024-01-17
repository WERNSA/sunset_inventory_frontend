const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  mode: 'development',
  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|png)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          // "sass-loader",
        ],
      },
      {
        test: /\.(woff|woff2|otf|ttf)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[fullhash].js',
    // filename: "bundle.js",
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
    hot: true,
    // public: 'lvh.me:9000' //para que el login con captcha funcione, comentar si no se esta probando login
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // favicon: "./dist/favicon.png",
    }),
    new Dotenv(),
  ],
};
