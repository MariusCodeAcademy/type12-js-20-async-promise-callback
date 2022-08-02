'use strict';
console.log('cb.js');

function getPosts1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('post1');
      resolve();
    }, 3000);
  });
}
function getPosts2() {
  return new Promise((resove, reject) => {
    setTimeout(() => {
      console.log('post2');
      resove();
    }, 3000);
  });
}
function getPosts3() {
  setTimeout(() => {
    console.log('post3');
  }, 3000);
}
// getPosts1(() => getPosts2(getPosts3));

// Promise way
getPosts1()
  .then(() => getPosts2())
  .then(() => getPosts3())
  .catch((err) => console.warn(err));

// // getPosts2();
// getPosts3();

// set timeout HEll
// setTimeout(() => {
//   console.log('3');
//   setTimeout(() => {
//     console.log('2');
//     setTimeout(() => {
//       console.log('1');
//     }, 1000);
//   }, 1000);
// }, 1000);
