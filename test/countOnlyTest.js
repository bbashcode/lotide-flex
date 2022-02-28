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

// //TEST CODE
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

describe("testing countOnly, it...", ()=> {
  it("should return {} if specified keys in the provided object has a value of false", () => {
    assert.deepEqual(countOnly(firstNames, {Karl: false}), {});
  });
  it("should return {Jason: 1} for countOnly(firstName, {Jason: true}", () => {
    assert.deepEqual(countOnly(firstNames, {Jason: true}), {Jason: 1});
  })
})