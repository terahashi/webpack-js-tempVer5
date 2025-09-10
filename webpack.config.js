const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  // devtool: 'source-map',
  devtool: false,
  entry: { app: './src/app.js', sub: './src/sub.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          //⬇︎下記の記載の意味は　本番ビルドではMiniCssExtractPluginを使い、開発中はstyle-loaderでHotReloadを利用する
          // process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',

          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader', //⬅︎sass
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
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(
      { filename: 'style.css' }
      // { filename: '[name].css' }
    ),
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
