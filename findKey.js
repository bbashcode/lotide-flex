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
 * findKey method takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
 * @param  {object} objectParam The first param is an object
 * @param  {function} callback The second param is a callback function
 * @return {truthy value/undefined} this method returns either a truthy value or a falsy value depending on the callback function
 */
const findKey = function(objectParam, callback) {
  
  for (let key in objectParam) {
    if (callback(objectParam[key])) {
      return key;
    }
  }
  return undefined;
};

// TEST CODE
// console.log('result: ', findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)); // => "noma")

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');