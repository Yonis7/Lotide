const assert = require('chai').assert;
const tail = require('../tail');

// test cases

describe("#tail", () => {

  it("result = ['lighthouse', 'labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("result = [1, 2, 3]", () => {
    const result1 = tail([0, 1, 2, 3]);
    assert.deepEqual(result1, [1, 2, 3]);
  });

});

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!