// TEST CODE for: eqArrays
const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
//regular test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS (true)

//RECURSIVE TEST CASES
// console.log('should be true', eqArrays([[2, 3], [4]], [[2, 3], [4]]));
// console.log('should be false', eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
// console.log('should be false', eqArrays([[2, 3], [4]], [[2, 3], 4]));

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);