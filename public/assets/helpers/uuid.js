// Immediately export a function that generates a string of random numbers and letters
let uuid = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);



    module.exports = { uuid };