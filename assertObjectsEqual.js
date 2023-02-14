
const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  const isEqual = eqObjects(actual, expected);
  if (isEqual) {
    console.log(`Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

// const obj1 = {a: 1, b: 2, c: [1, 2, 3]};
// const obj2 = {c: [1, 2, 3], b: 2, a: 1};
// const obj3 = {a: 1, b: 2, c: [1, 2, 3], d: 4};
// const obj4 = {a: 1, b: 2, c: [1, 2, 4]};

// assertObjectsEqual(obj1, obj2); // should log "Assertion Passed: { a: 1, b: 2, c: [ 1, 2, 3 ] } === { a: 1, b: 2, c: [ 1, 2, 3 ] }"
// assertObjectsEqual(obj1, obj3); // should log "Assertion Failed: { a: 1, b: 2, c: [ 1, 2, 3 ] } !== { a: 1, b: 2, c: [ 1, 2, 3 ], d: 4 }"
// assertObjectsEqual(obj1, obj4); // should log "Assertion Failed: { a: 1, b: 2, c: [ 1, 2, 3 ] } !== { a: 1, b: 2, c: [ 1, 2, 4 ] }"

module.exports = assertObjectsEqual