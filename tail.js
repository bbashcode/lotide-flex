const assertEqual = require("./assertEqual");

//"tail" of an array: everything except for the first item (head) of the provided array
/**
 * assertEqual is used to compare actual vs expected when testing
 * @param  {array} arr The provided param
 * @return {array}  returns an array that has all but the first element
 */
const tail = function extractAllButFirstElement(arr) {
  const lastElement = arr.slice(1);
  return lastElement;
};

//exporting module
module.exports = tail;