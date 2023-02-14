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

module.exports = middle






