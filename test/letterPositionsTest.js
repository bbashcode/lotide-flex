const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return [1] for e in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("should return [2, 3] for l in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
});