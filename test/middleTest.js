const assert = require('chai').assert;
const middle = require('../middle');

describe("#tail", () => {

  it("result = [3, 4]", () => {
    const result = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(result, [3, 4]);
  });

  it("result = [4]", () => {
    const result = middle([1, 2, 3, 4, 5, 6, 7]);
    assert.deepEqual(result, [4]);
  });

});

// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => true
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]) // => true
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 7]) // => false
