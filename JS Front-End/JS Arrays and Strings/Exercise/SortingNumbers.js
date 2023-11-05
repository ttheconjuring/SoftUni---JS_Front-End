function specificSort(array) {
  array.sort((a, b) => {
    return a - b;
  });
  let newArray = [];
  while (array.length != 0) {
    newArray.push(array.shift());
    newArray.push(array.pop());
  }
  return newArray;
}
