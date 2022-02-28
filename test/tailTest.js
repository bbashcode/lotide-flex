const assert = require("chai").assert;
const tail = require("../tail");

describe("testing the tail function...", ()=>{
  it("should return ['Lighthouse', 'Labs'] for ['Hello','Lighthouse', 'Labs']", ()=> {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("should return [7,8,9,10] for [6,7,8,9,10]", ()=>{
    assert.deepEqual(tail([6,7,8,9,10]), [7,8,9,10]);
  });
});