const findKeyByValue = (object, value) => {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


module.exports = findKeyByValue;
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// assertEqual(findKeyByValue({a:1,b:2,c:3},2), 'b');
// assertEqual(findKeyByValue({a:1,b:2,c:3},5), undefined);
// assertEqual(findKeyByValue({a:1,b:2,c:3},'a'), undefined);