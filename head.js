/**
 * assertEqual method is used to compare actual vs expected when testing
 * @param  {any except array} actual The first param
 * @param  {any except array} expected The second param
 * @return {void/undefined}      this method does not return anything, rather the side effect is to console log test pass or fail based on comparison
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/**
 * head method is used to get/extract the first element of a given array
 * @param  {array} arr The provided param
 * @return {any}  first element of the array
 */

const head = function extractTheFirstElementOfTheArray(arr) {
  const firstElement = arr.shift();
  return firstElement;
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");