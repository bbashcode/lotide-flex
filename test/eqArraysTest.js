// // TEST CODE for: eqArrays
const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("testing eqArrays", ()=> {
  it("should return true for eqArrays([[2, 3], [4]], [[2, 3], [4]])", ()=>{
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("should return false for eeqArrays([[2, 3], [4]], [[2, 3], [4, 5]])", ()=>{
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
})