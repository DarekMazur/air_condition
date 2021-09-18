const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    swRegister: './src/swReg.js',
    sw: './src/sw.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name][ext][query]',
    clean: true,
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
        test: /\.(png|jpg|gif|svg|ico)/,
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
      inject: true,
      meta: {
        viewport: 'width=device-width, initial-scale=1.0',
        description: 'Check air condition in your area',
        'og:image': {
          property: 'og:image',
          content: 'images/background.jpg',
        },
        favicon: './src/assets/icons/icon.png',
      },
    }),
    new HtmlWebpackTagsPlugin({
      links: [
        {
          append: true,
          path: 'https://fonts.googleapis.com',
          attributes: {
            rel: 'preconnect',
          },
        },
        {
          append: true,
          path: 'https://fonts.gstatic.com',
          attributes: {
            rel: 'preconnect',
            crossorigin: true,
          },
        },
        {
          append: true,
          path: 'https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Indie+Flower&family=Montserrat&family=Oswald:wght@500&display=swap',
          type: 'css',
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
    new WebpackPwaManifest({
      publicPath: '/',
      name: 'SmoggyFoggy',
      short_name: 'SmoggyFoggy',
      description: 'Check air quality in your area',
      background_color: '#ffffff',
      theme_color: '#A8E2F4',
      crossorigin: 'use-credentials',
      inject: true,
      fingerprints: true,
      includeDirectory: true,
      icons: [
        {
          src: path.resolve('src/assets/icons/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve('src/assets/icons/icon.png'),
          size: '512x512',
          purpose: 'maskable',
        },
      ],
    }),
    // new FaviconsWebpackPlugin({
    //   logo: './src/assets/icons/icon.png',
    //   mode: 'webapp',
    //   favicons: {
    //     appName: 'Smoggy Foggy',
    //     appShortName: 'Smoggy Foggy',
    //     appDescription: 'Check air quality in your area',
    //     developerName: 'Darek Mazur',
    //     background: '#ffffff',
    //     theme_color: '#A8E2F4',
    //     display: 'standalone',
    //     orientation: 'portrait',
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: true,
    //       favicons: true,
    //       firefox: true,
    //       windows: true,
    //       yandex: true,
    //     },
    //   },
    // }),
  ],
};
