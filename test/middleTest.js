const assert = require('chai').assert;
const middle = require('../middle');

describe("Test if middle function works", () => {

  it(`Both middle numbers [3,4] should be selected out of the array[1, 2, 3, 4, 5, 6]`, () => {
    const result = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(result, [3, 4]);
  });

  it(`Only 1 middle number [4] should be returned in the array [1, 2, 3, 4, 5, 6, 7]`, () => {
    const result = middle([1, 2, 3, 4, 5, 6, 7]);
    assert.deepEqual(result, [4]);
  });

});
