const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }

};
const eqArrays = (arr1, arr2) => {
  if (arr1 = arr2) {
    return true
  } else {
    return false
  }
}

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


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

module.exports = eqObjects