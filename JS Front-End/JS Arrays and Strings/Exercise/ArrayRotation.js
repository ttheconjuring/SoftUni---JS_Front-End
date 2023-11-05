function rotate(array, n) {
  for (let i = 0; i < n; i++) {
    array.push(array.shift());
  }
  console.log(array.join(" "));
}
