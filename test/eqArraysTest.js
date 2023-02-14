
const eqArrays = require('../eqArrays.js')
const assert = require('chai').assert;

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)

describe ('Test if eqArrays function works', () => {
  
  it(`[1, 2, 3] should = [1, 2, 3]`, () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.strictEqual(result, true,);
  });
});