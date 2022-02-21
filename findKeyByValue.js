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




// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);