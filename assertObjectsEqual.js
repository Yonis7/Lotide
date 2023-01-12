const eqObjects = (object1, object2) => {
  // Declare variable to store all keys of input objects
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  console.log(`object1 keys: ${object1Keys}`);
  console.log(`object2 keys: ${object2Keys}`);

  // check if the number of keys in the objects are equal
  if (object1Keys.length !== object2Keys.length) {
    console.log(`Objects have different number of keys`);
    return false;
  }
  
  // iterate through the keys of the first object
  for (let i = 0; i < object1Keys.length; i++) {
    // check if the key exists in the second object and if the value is equal
    if (!object2.hasOwnProperty(object1Keys[i]) || object1[object1Keys[i]] !== object2[object1Keys[i]]) {
      console.log(`Key ${object1Keys[i]} not present or value not equal`);
      return false;
    }
  }

  console.log(`Objects are equal`);
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const isEqual = eqObjects(actual, expected);
  if (isEqual) {
    console.log(`Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

const obj1 = {a: 1, b: 2, c: [1, 2, 3]};
const obj2 = {c: [1, 2, 3], b: 2, a: 1};
const obj3 = {a: 1, b: 2, c: [1, 2, 3], d: 4};
const obj4 = {a: 1, b: 2, c: [1, 2, 4]};

assertObjectsEqual(obj1, obj2); // should log "Assertion Passed: { a: 1, b: 2, c: [ 1, 2, 3 ] } === { a: 1, b: 2, c: [ 1, 2, 3 ] }"
assertObjectsEqual(obj1, obj3); // should log "Assertion Failed: { a: 1, b: 2, c: [ 1, 2, 3 ] } !== { a: 1, b: 2, c: [ 1, 2, 3 ], d: 4 }"
assertObjectsEqual(obj1, obj4); // should log "Assertion Failed: { a: 1, b: 2, c: [ 1, 2, 3 ] } !== { a: 1, b: 2, c: [ 1, 2, 4 ] }"