function findOccurrences(input) {
  const arrayOfWords = input.toLowerCase().split(" ");
  const oddOccurrences = [];
  for (const word of arrayOfWords) {
    if (!oddOccurrences.includes(word)) {
      let occurrnces = 0;
      for (const currentWord of arrayOfWords) {
        if (word === currentWord) {
          occurrnces++;
        }
      }
      if (occurrnces % 2 != 0) {
        oddOccurrences.push(word);
      }
    }
  }
  console.log(oddOccurrences.join(" "));
}
