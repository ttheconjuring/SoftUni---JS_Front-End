function printInRange(ch1, ch2) {
  const firstCharacterIndex = ch1.charCodeAt(0);
  const secondCharacterIndex = ch2.charCodeAt(0);
  let array = [];
  for (
    let i = Math.min(firstCharacterIndex, secondCharacterIndex) + 1;
    i < Math.max(firstCharacterIndex, secondCharacterIndex);
    i++
  ) {
    array.push(String.fromCharCode(i));
  }
  console.log(array.join(" "));
}

