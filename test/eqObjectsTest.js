const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

//Arrays As Values (Tests)
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

describe("testing eqObjects...", () => {
  it("should return true for eqObjects(cd, dc)", ()=> {
    assert.deepEqual(eqObjects(cd, dc), true);
  }); 

  //RECURSIVE TEST CASES
  it("should return true for eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", ()=> {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });  
  it("should return false for eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", ()=> {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

});