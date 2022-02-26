/**
 * importing inspect library to descriptively check objects
 */
const inspect = require('util').inspect;


/**
 * eqObjects method returns true if both objects have identical keys with identical values, it returns false otherwise
 * @param  {object} object1 The first param object
 * @param  {object} object2 The second param object
 * @return {boolean} returns either true or false depending on the conditions
 */
 const eqObjects = function(object1, object2) {
  const keysOfObject1 = Object.keys(object1);
  const keysOfObject2 = Object.keys(object2);
  let result = true;

  if (keysOfObject1.length === keysOfObject2.length) {
    for (let key in object1) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          result = result && eqArrays(object1[key], object2[key]);
        } else if(typeof(object1[key]) === "object" || typeof(object2[key] === "object")) {
          //result = result && eqObjects(object1[key], object2[key]);
        }
        else {
          if (object1[key] === object2[key]) {
            result = true;
          }
        }
    }
  }
  return result;
};


/**
 * assertObjectsEqual method asserts if both objects are equal or not equal
 * @param  {object} actual The first param object
 * @param  {object} expected The second param object
 * @return {void} does not return anything, only prints whether the assertions are passed or not
 */
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });