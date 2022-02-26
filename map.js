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
 * map function is used to do some operations on the given array based on the provided callback function
 * @param  {array} actual The first param is an array
 * @param  {callback function} callback The second param is a callback function
 * @return {array}  the method returns another array that satisfies the callback
 */
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


//TEST CODE

//initial test
const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

//assertion test cases using at least three different ways of using map
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], map(words, word => word[0])); //should pass
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]); //should pass
assertArraysEqual([ 'g', 'c', 't', 'm', 'z' ], map(words, word => word[0])); //should fail