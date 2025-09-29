import utils from './utils';

console.log('Hello, sub.js');

const subinit = () => {
  utils.log('hello sub.js(utils/index.js)');
};

subinit();
