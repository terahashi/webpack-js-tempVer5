module.exports = {
  root: true,
  parser: '@babel/eslint-parser', //Babelで解析する
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
    ecmaVersion: 2025, //ECMAScriptのバージョン
    sourceType: 'module', // "script" or "module" (ESModulesを使うならmodule。import/export を使う)
    requireConfigFile: false, //⬅︎Babel設定ファイルが存在しなくてもESLintが動く。小規模プロジェクトやBabel設定を別途作らない場合に役立つ。
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
  globals: {
    jQuery: 'readonly', // 読み取り専用
    $: 'readonly', // 読み取り専用
  },
  plugins: ['import'], //⬅︎存在しないファイルをimportした場合に警告
  rules: {
    'no-undef': 'off', //グローバル変数を定義しているので、'no-undef'を'off'にする
    'no-console': 'off', //'off'でconsole.logを使っても警告やエラーが出ない
    'no-debugger': 'warn', //debuggerを使うと警告「warn」が出る。debuggerは開発中は便利だが、本番ビルドに残すのはダメなので「'no-debugger':'error'にして【jsファイル内のdebugger;を手動で削除する】」
    'no-unused-vars': 'error', // 宣言したけど使っていない変数があるとエラー。
  },
};
