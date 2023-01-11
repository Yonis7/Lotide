
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
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