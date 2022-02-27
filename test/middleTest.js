//TEST CODE for: middle.js
// console.log(middle([1]));                     // => []
// console.log(middle([1, 2]));                  // => []
// console.log(middle([1, 2, 3]));               // => [2]
// console.log(middle([1, 2, 3, 4, 5]));         // => [3]
// console.log(middle([1, 2, 3, 4]));            // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6]));      // => [3, 4]

const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual([2, 3], middle([1, 2, 3, 4]));