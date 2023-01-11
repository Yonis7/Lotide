const eqArrays = (arr1, arr2) => {
  if (arr1 = arr2) {
    return true
  } else {
    return false
  }
}

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }

};

const middle = (arr) => {
 let midElement = []

  if (arr.length === 0) {
    return midElement
  }
  if (arr.length === 1 || arr.length === 2) {
  return midElement
 }

 if (arr.length % 2 === 1) {
  midElement.push(arr[Math.floor(arr.length / 2)])
 } else {
  midElement.push(arr[arr.length / 2 - 1], arr[arr.length / 2])
 }
 return midElement
};






assertArraysEqual(middle([1, 2, 3, 4, 5, 6]));

