function revealWords(words, text) {
  let wordsArray = words.split(", ");
  let textArray = text.split(" ");
  for (let i = 0; i < wordsArray.length; i++) {
    for (let j = 0; j < textArray.length; j++) {
      if (textArray[j].length == wordsArray[i].length) {
        if (textArray[j].includes("*")) {
          textArray.splice(j, 1, wordsArray[i]);
        }
      }
    }
  }
  console.log(textArray.join(" "));
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
