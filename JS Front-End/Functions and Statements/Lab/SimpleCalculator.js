function calc(x, y, operation) {
  const object = {
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
  };
  console.log(object[operation](x, y));
}
