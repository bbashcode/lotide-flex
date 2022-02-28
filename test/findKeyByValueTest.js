// TEST CODE

const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


describe("testing findKeyByValue", ()=>{
  it("should return drama for findKeyByValue(bestTVShowsByGenre, 'The Wire')", ()=>{
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("should return undefined for findKeyByValue(bestTVShowsByGenre, 'That '70s Show')", ()=>{
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
})
