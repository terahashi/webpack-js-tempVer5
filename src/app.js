//⬇︎ 「babel.config.js」のuseBuiltInsオプションで「下記を書かなくても良くなる。」
// import 'regenerator-runtime';
// import 'core-js';

import './sub';
import './scss/app.scss';

console.log('Hello, app.js Webpack 5!');

// setTimeout(() => {
//   import('@scss/app');
// }, 2000);

const init = () => {
  console.log('init');
};

const init2 = () => {
  console.log('init');
};

// const init = async () => {
//   utils.log('hello utils.js');
//   await asyncFn();
//   jQuery();
// };

// async function asyncFn() {
//   console.log([1, 2, 3].includes(0));
// }

init();
init2();
