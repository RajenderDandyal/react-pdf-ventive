const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require("autoprefixer");

const APP_DIR = path.resolve(__dirname, 'src');

// to check the size of bundle.js in build folder ...run     ls -al build

module.exports = env => {
  const {PLATFORM, VERSION} = env;
  return merge([
    {
      entry: APP_DIR,
      output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/build'),
      },
      devtool: 'cheap-module-source-map',
      devServer: {
        open: true,
        port: 12345,
        compress: true,
        /* proxy: {
          '/api': 'http://localhost:3000'
        }
        https://webpack.js.org/configuration/dev-server/#devserverproxy
        */
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.(scss|css)$/,
            use: [
              PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'postcss-loader',
              'sass-loader'
            ],
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',

              {
                loader: 'image-webpack-loader',
                options: {
                  publicPath: 'assets',
                  mozjpeg: {
                    progressive: true,
                    quality: 65
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: '65-90',
                    speed: 4
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  // the webp option will enable WEBP
                  webp: {
                    quality: 75
                  }
                }
              },
            ]
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html',
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(env.VERSION),
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM),
        }),
        new CopyWebpackPlugin([{from: 'src/assets', }]),
        new webpack.LoaderOptionsPlugin({
          options: {
            postcss: [
              autoprefixer()
            ]
          }
        })
      ],
      // output: {
      //   filename: '[name].bundle.js',
      //   chunkFilename: '[name].chunk.bundle.js',
      //   path: path.resolve(__dirname, '..', 'dist'),
      //   publicPath: '/',
      // },
    },
  ]);
};
