const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }

};
let sentence = "The quick brown fox jumps over the lazy dog."

const countLetters = (sentance) => {

  let objCount = {}
 for(let letter of sentance) {
  
  if (letter !== ' ') {
    
    if(objCount[letter]) {
      // console.log(`Incrementing count of ${letter}`)
      objCount[letter] = objCount[letter] + 1
    } else {
      // console.log(`Adding count of ${letter}`)
      objCount[letter] = 1
    }
  }
 }
//  console.log(objCount)
 return objCount
}


console.log(countLetters(sentence)
)