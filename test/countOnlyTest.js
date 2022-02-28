const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// TEST CODE
describe("testing countOnly, it...", ()=> {
  it("should return {} if specified keys in the provided object has a value of false", () => {
    assert.deepEqual(countOnly(firstNames, {Karl: false}), {});
  });
  it("should return {Jason: 1} for countOnly(firstName, {Jason: true}", () => {
    assert.deepEqual(countOnly(firstNames, {Jason: true}), {Jason: 1});
  })
})