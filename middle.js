//importing required module
const assertArraysEqual = require("./assertArraysEqual");

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

//exporting module
module.exports = middle;