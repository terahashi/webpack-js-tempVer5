const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { Template } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // devtool: 'source-map',
  devtool: false,
  entry: { app: './src/app.js', sub: './src/sub.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    // filename: '[name].[contenthash].bundle.js', //⬅︎[contenthash]が推奨されている。✖︎[hash]と[chunkhash]は非推奨
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          // process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          //⬆︎上記の意味は　本番ビルドではMiniCssExtractPluginを使い、開発中はstyle-loaderでHotReloadを利用する

          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', //⬅︎css
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]', //出力先
          //publicPath: 'https://', //CDNやブラウザから参照するときのパス
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(
      { filename: 'style.css' } //⬅︎cssのファイル名が「style.css」になる。
      // { filename: '[name].css' } //⬅︎cssのファイル名が「app.css」になる。
    ),
    new ESLintPlugin({
      extensions: ['js'],
      emitWarning: true,
      failOnError: false, //trueにするとエラーでビルド停止
      fix: true, //fixの自動修正を有効化
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    watchFiles: {
      paths: ['src/'],
      options: {
        ignored: /node_modules/,
      },
    },
    port: 3000,
    open: true,
  },
};
