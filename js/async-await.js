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
      reject('kazkas atsitiko kazur');
      // resove();
    }, 3000);
  });
}
function getPosts3() {
  setTimeout(() => {
    console.log('post3');
  }, 1800);
}
// getPosts1(() => getPosts2(getPosts3));

// Promise way
// getPosts1()
//   .then(() => getPosts2())
//   .then(() => getPosts3())
//   .catch((err) => console.warn(err));

async function flow() {
  try {
    await getPosts1();
    const result = await getPosts2();
    getPosts3();
  } catch (error) {
    console.warn('ivyko klaida!!! ', error);
  }
}

flow();
