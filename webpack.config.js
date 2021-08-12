const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s(c|a)ss$/,
        use: {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: './',
          },
        },
      },
      {
        test: /\.s(c|a)ss$/,
        use: {
          loader: 'css-loader',
        },
      },
      {
        test: /\.s(c|a)ss$/,
        use: {
          loader: 'sass-loader',
        },
      },

      {
        test: /\.(png|jpg|gif|svg)/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'SmoggyFoggy',
      inject: 'body',
      meta: {
        viewport: 'width=device-width, initial-scale=1.0',
        description: 'Check air condition in your area',
      },
    }),
    new HtmlWebpackTagsPlugin({
      links: [
        {
          append: false,
          path: 'https://fonts.googleapis.com',
          attributes: {
            rel: 'preconnect',
          },
        },
        {
          append: false,
          path: 'https://fonts.gstatic.com',
          attributes: {
            rel: 'preconnect',
            crossorigin: true,
          },
        },
        {
          append: false,
          path: 'https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Indie+Flower&family=Montserrat&family=Oswald:wght@500&display=swap',
          attributes: {
            rel: 'stylesheet',
            crossorigin: 'anonymous',
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
