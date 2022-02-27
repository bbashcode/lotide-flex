//importing required modules
const assertEqual = require("./assertEqual");


/**
 * eqArrays method is used to compare two arrays for a perfect match
 * @param  {array} array1 The first param
 * @param  {array} array2 The second param
 * @return {boolean} returns true or false depending on whether both arrays are equal or not
 */
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


//Exporting module
module.exports = eqArrays;