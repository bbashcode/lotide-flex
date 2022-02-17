/**
 * assertEqual method is used to compare actual vs expected when testing
 * @param  {any except array} actual The first param
 * @param  {any except array} expected The second param
 * @return {void/undefined}      this method does not return anything, rather the side-effect is to console log test pass or fail based on comparison
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



/**
 * eqArrays method is used to compare two arrays for a perfect match
 * @param  {array} array1 The first param
 * @param  {array} array2 The second param
 * @return {boolean} returns true or false depending on whether both arrays are equal or not
 */

 const eqArrays = (array1, array2) =>
 array1.length === array2.length &&
 array1.every((element, index) => element === array2[index]);

// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true) // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false


assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS (true)
