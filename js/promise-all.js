'use strict';
console.log('main.js');

const pr1 = Promise.resolve('All good');
const pr2 = 15;
const pr3 = new Promise((resolve) => {
  setTimeout(resolve, 1000, 'Whaaat');
});
const pr4 = fetch('js/user.json').then((resp) => resp.json());

// Promise.all([promiseArr]) = gauti visus promise is promiseArr

Promise.all([pr1, pr2, pr3, pr4])
  .then((values) => console.log('values ===', values))
  .catch((err) => console.warn(err));
