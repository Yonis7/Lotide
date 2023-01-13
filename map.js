const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
  const results = [];
  
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  
  return results;

}




const results1 = map(words, word => word[0]);
console.log(results1);

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)

  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
}

const eqArrays = (arr1, arr2) => {
  if (arr1 === arr2) {
    return true
  } else {
    return false
  }
}

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// console.log("Expected output : 'g','c','t','m','t' ");

// const results2 = map(words, word => word.length);
// console.log(results2);
// assertArraysEqual(results2, [6, 7, 2, 5, 3]);
// console.log("Expected output : 6,7,2,5,3 ");

// const results3 = map(words, word => word.toUpperCase());
// console.log(results3);
// assertArraysEqual(results3, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
// console.log("Expected output : 'GROUND','CONTROL','TO','MAJOR','TOM' ");

// const results4 = map(words, word => word.split('').reverse().join(''));
// console.log(results4);
// assertArraysEqual(results4, ['dnuorg', 'lortnoc', 'ot', 'rojam', 'mot']);
// console.log("Expected output : 'dnuorg','lortnoc','ot','rojam','mot' ");