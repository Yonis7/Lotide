const eqArrays = function(arr1, arr2) {
  // Make sure the arrays have the same length
  if (arr1.length !== arr2.length) return false;
  // Iterate over each element of both arrays and compare them
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) 
    return false;
  }
  return true;
}

module.exports = eqArrays;