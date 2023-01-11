const without = (source, itemsToRemove) => {
  let newArray = []

  //find elements in source array not in itemsToRemove array
  for (let i = 0; i < source.length; i++) {
  let doesMatch = false;
  
    //Compare all values of source[i] to each index of itemsToRemove and if in there doesMatch will = true for that element and complete rest of code and reloop and finish

    for (let j = 0; j < itemsToRemove.length; j++) {
      if(source[i] === itemsToRemove[j]) {
        doesMatch = true
        break;
      }
    }
    
    // If the variable doesMatch remain false we will add that current source[i] to the newArraY
    if (!doesMatch) {
      newArray.push(source[i])
    }
  } 
  return newArray
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }

};

const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
      return;
    }
  }
  console.log(`Assertion Passed: ${arr1} === ${arr2}`);
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// console.log(without([1, 2, 3], [1]))