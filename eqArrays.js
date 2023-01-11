const assertEqual = function(actual, expected) {
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)