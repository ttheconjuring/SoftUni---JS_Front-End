function findWords(text) {
  let regex = /#[a-zA-Z]+/g;
  let matches = text.match(regex);
  for (let i = 0; i < matches.length; i++) {
    console.log(matches[i].substring(1));
  }
}
