const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;


describe('Test if assertArraysEqual function works', () => {
  
  it(`["1", "2", "3"] should = ["1", "2", "3"]`, () => {
    
    assert.doesNotThrow(() => {
      assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
    });
  
  });

});


// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Pass
// assertArraysEqual(["1", "2", "3"], ["1", "2", "4"]); // Fail
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]); // Fail
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Fail