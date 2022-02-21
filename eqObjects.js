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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
/**
 * eqObjects method returns true if both objects have identical keys with identical values, it returns false otherwise
 * @param  {object} object1 The first param object
 * @param  {object} object2 The second param object
 * @return {boolean} returns either true or false depending on the conditions
 */
const eqObjects = function(object1, object2) {
  const keysOfObject1 = Object.keys(object1);
  const keysOfObject2 = Object.keys(object2);
  let result = false;

  if (keysOfObject1.length === keysOfObject2.length) {
    for (let key1 in object1) {
      for (let key2 in object2) {
        if (object1[key1] === object2[key2]) {
          result = true;
        }
      }
    }
  }
  return result;
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false