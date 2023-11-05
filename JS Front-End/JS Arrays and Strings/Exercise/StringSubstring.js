function findMatch(word, text) {
  // text.toLowerCase().includes(word.toLowerCase()) ? console.log(word) : console.log(`${word} not found!`);
  let wordsArray = text.toLowerCase().split(" ");
  let output = `${word} not found!`;

  for (let i = 0; i < wordsArray.length; i++) {
    let currentWord = wordsArray[i];
    if (currentWord === word) {
      output = currentWord;
    }
  }

  console.log(output);
}
