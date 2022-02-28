/**
 * countOnly is a function that takes in a collection of items and returns a specific subset of those items
 * @param  {array} allItems The first param, is a list or array
 * @param  {object} itemsToCount The second param, is an object
 * @return {object} returns an object with count of specified keys depending on the logic
 */
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // inside the loop:
  for(const item of allItems){
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

//exporting modules
module.exports = countOnly;


