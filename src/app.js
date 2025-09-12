import './sub';
import './scss/app.scss';

console.log('Hello, app.js Webpack 5!');

// setTimeout(() => {
//   import('@scss/app');
// }, 2000);

const init = async () => {
  // utils.log('hello utils.js');
  await asyncFn();
  // jQuery();
};

const init2 = () => {
  console.log('hello init2');
};

async function asyncFn() {
  console.log([1, 2, 3].includes(0));
}

init();
init2();
