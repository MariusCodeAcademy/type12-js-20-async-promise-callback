'use strict';
console.log('promise.js');

// promise anatomy
const pr1 = new Promise((resolve, reject) => {
  // kazkokia logika
  let noError = true;
  if (noError) {
    // jei viskas gerai darom resolve
    resolve('OK');
  } else {
    // kai yra klaidu tai mes darom reject
    reject('BAD');
  }
});
console.log('pr1 ===', pr1);
// pr1 === promise
// resolve('OK') => .then(OK => )
// reject('BAD'); => .catch(err => err)
// pr1.then((data) => console.log(data)).catch((err) => console.warn('something, went wrong', err));
pr1
  .then((data) => {
    console.log(data);
    return data.toLowerCase();
  })
  .then((ka) => {
    console.log('ka ===', ka);
  })
  .catch((err) => console.warn('something, went wrong', err));
