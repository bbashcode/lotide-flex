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
 * eqArrays method is used to compare two arrays for a perfect match
 * @param  {array} array1 The first param
 * @param  {array} array2 The second param
 * @return {boolean} returns true or false depending on whether both arrays are equal or not
 */
 const eqArrays = (array1, array2) =>
 array1.length === array2.length &&
 array1.every((element, index) => element === array2[index]);

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
  let result = true;

  if (keysOfObject1.length === keysOfObject2.length) {
    for (let key in object1) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          result = result && eqArrays(object1[key], object2[key]);
        } else if(typeof(object1[key]) === "object" || typeof(object2[key] === "object")) {
          result = result && eqObjects(object1[key], object2[key]);
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

// TEST CODE
//Primitives As Values (Tests)
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

//Arrays As Values (Tests)
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false