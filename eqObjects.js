const eqArrays = require("./eqArrays");

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

  if (keysOfObject1.length !== keysOfObject2.length) {
    result = false;
  }

  for (let key of keysOfObject1) {
    if (Array.isArray(object1[key])) {
      result = (eqArrays(object1[key], object2[key]));
    } else if (typeof object1[key] === "object" && !(Array.isArray(object1[key]))) {
      result = eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      result = false;
    }
  }

  return result;

};

//Exporting module
module.exports = eqObjects;