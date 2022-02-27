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
//  const eqArrays = (array1, array2) =>
//  array1.length === array2.length &&
//  array1.every((element, index) => element === array2[index]);
const eqArrays = function(array1, array2) {
  let result = false;

  if (array1.length === array2.length) {
    array1.forEach((element, index) => {
      if (Array.isArray(element)) {
        result = eqArrays(array1[index], array2[index]);
      } else {
        if (element === array2[index]) {
          result = true;
        }
      }
    });
  }
  return result;
};


 

// TEST CODE
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