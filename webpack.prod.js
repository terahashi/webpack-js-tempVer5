const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common.js');

const outputFile = '[name].[contenthash]'; //jsファイルやcssファイルにハッシュを付ける
const assetFile = '[contenthash]'; //imagesの画像のファイル名

module.exports = () =>
  merge(commonConf({ outputFile, assetFile }), {
    mode: 'production',
    // output: {
    //   filename: '[name].js', //⬅︎【テスト用】prod本番環境で「jsファイル名を[name]だけにする」
    // },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
      }),
    ],
  });
