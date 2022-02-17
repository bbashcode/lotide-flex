/**
 * eqArrays method is used to compare two arrays for a perfect match
 * @param  {array} array1 The first param
 * @param  {array} array2 The second param
 * @return {boolean} returns true or false depending on whether both arrays are equal or not
 */
 const eqArrays = (array1, array2) =>
 array1.length === array2.length &&
 array1.every((element, index) => element === array2[index]);


 /**
 * assertArraysEqual method is used for asserting that two arrays are equal
 * @param  {array} actual The first param
 * @param  {array} expected The second param
 * @return {void/undefined} This method does not return anything, rather the side effect is to console log test pass or fail based on comparison
 */
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS (true)