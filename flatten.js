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

 
 /**
 * flatten method is used for as the name suggest, flattening nested arrays
 * @param  {array} source, input param
 * @return {array} returns a flattened array of the provided nested source
 * @note Our function however, will for now be much simpler and only handle one level of nesting.
 * @TODO - refactor the method to solve this problem recursively, use isArray to check the type of nested array when looping, do not use typeof becuase it returns type of array as object.
 */
const flatten = function flatNestedArrays(source){
  return source.flat();
}


// TEST CODE
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6])); // => should PASS (true)