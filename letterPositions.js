const letterPoisitions = (sentance) => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentance[i] !== ' ') {

      if (results[sentance[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
}

module.exports = letterPoisitions