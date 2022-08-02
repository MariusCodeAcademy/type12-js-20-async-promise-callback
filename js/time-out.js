// kokia eiles tvarka atsivaizduos logai

// padaryti kad logai atsispausdintu is eiles vienas 2 sek du trys
console.log('vienas');

setTimeout(() => {
  console.log('du');
}, 2000);

console.log('trys');
