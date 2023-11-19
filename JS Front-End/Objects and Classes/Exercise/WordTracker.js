function findOccurrences(inputArray) {
  const n = inputArray.length;
  const wordsToLookFor = inputArray[0].split(" ");
  const wordsCounter = {};

  for (const word of wordsToLookFor) {
    wordsCounter[word] = lookForWord(word);
  }

  Object.entries(wordsCounter)
    .sort((a, b) => b[1] - a[1])
    .forEach((entry) => console.log(entry[0] + " - " + entry[1]));

  function lookForWord(word) {
    let counter = 0;
    for (let i = 1; i < n; i++) {
      if (word === inputArray[i]) {
        counter++;
      }
    }
    return counter;
  }
}
