// const assertEqual = require('./assertEqual');

const head = (arr) => {
  if (arr.length == 0 ) {
    return undefined
  
  } else {
    return arr[0]
  }
}

module.exports = head;

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");