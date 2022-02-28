/**
 * findKeyByValue method takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
 * @param  {object} someObject The first param
 * @param  {any} value The second param
 * @return {any} this method returns the key based on value if it exists and returns undefined if the key does not exist
 */
const findKeyByValue = function getKeyFindByValue(someObject, value){
  let result = "";
  for(let key in someObject){
    if(someObject[key]=== value){
      result = key;
    } else {
      result = undefined;
    }
  }
  return result;
};



// Exporting module
module.exports = findKeyByValue;
