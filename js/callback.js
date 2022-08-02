'use strict';
console.log('cb.js');

function getPosts1(callback) {
  setTimeout(() => {
    console.log('post1');
    callback();
  }, 3000);
}
function getPosts2() {
  setTimeout(console.log, 2000, 'post2');
}
function getPosts3() {
  setTimeout(() => {
    console.log('post3');
  }, 1800);
}
// getPosts1(getPosts2);
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
