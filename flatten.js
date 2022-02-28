const assertArraysEqual = require("./assertArraysEqual");
 
 /**
 * flatten method is used for as the name suggest, flattening nested arrays
 * @param  {array} source, input param
 * @return {array} returns a flattened array of the provided nested source
 */
const flatten = function flatNestedArrays(source){
  return source.flat();
}

//exporting module
module.exports = flatten;