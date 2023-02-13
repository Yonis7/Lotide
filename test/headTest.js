const assert = require('chai').assert;
const head  = require('../head');

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    
    const result = head([1, 2, 3])
    assert.strictEqual(result, 1);
  });

  it("returns '5' for ['5']", () => {
    const result = head(['5'])
    assert.strictEqual(result, '5'); 
    });

    
});




// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");