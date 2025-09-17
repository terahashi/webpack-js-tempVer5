module.exports = {
  root: true,
  parser: '@babel/eslint-parser', //Babelで解析
  parserOptions: {
    requireConfigFile: false, //⬅︎Babel設定ファイルが存在しなくても ESLint が解析できる。小規模プロジェクトやBabel設定を別途作らない場合に役立つ。
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
    ecmaVersion: 2025,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended', // ESLint推奨ルール
    'airbnb-base', // Airbnbベースルール
  ],
  plugins: ['import'], //⬅︎存在しないファイルをimportした場合に警告
  rules: {
    'no-console': 'off', //console.logを使っても警告・エラーが出ない
    'no-debugger': 'warn', //debugger;を使うと警告「warn」が出る
  },
};
