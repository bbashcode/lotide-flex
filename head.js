const assertEqual = require('./assertEqual');

/**
 * head method is used to get/extract the first element of a given array
 * @param  {array} arr The provided param
 * @return {any}  first element of the array
 */

const head = function extractTheFirstElementOfTheArray(arr) {
  const firstElement = arr.shift();
  return firstElement;
};

//Export Function
module.exports = head;