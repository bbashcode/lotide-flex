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
 * @param  {array} actual The first param which is an array
 * @param  {array} expected The second param which is also an array
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
 * middle method is used to get the middle element of an array that has more than 2 elements
 * @param  {any except array} inputArraay, take an array as input
 * @return {array} returns the middle element of an array
 */

const middle = function getMiddleElement(inputArray){
  const arrayLength = inputArray.length;
  const evenArray = arrayLength > 2 && arrayLength % 2 === 0;
  let result = [];

  if(arrayLength === 1 || arrayLength === 2 ) {
    return [];
  } else if(evenArray) {
    let secondMidItem = Math.floor (arrayLength / 2);
    let firstMidItem = secondMidItem - 1;
    result.push(inputArray[firstMidItem]);
    result.push(inputArray[secondMidItem]);
  } else {
    let midItem = Math.floor(arrayLength / 2);
    result.push(inputArray[midItem]);
  }

  return result;
}


//TEST CODE
// console.log(middle([1]));                     // => []
// console.log(middle([1, 2]));                  // => []
// console.log(middle([1, 2, 3]));               // => [2]
// console.log(middle([1, 2, 3, 4, 5]));         // => [3]
// console.log(middle([1, 2, 3, 4]));            // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6]));      // => [3, 4]

assertArraysEqual([2, 3], middle([1, 2, 3, 4]));