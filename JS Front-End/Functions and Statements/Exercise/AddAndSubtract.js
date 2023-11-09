function calc(a, b, c) {
  console.log(subtract());

  function sum() {
    return a + b;
  }

  function subtract() {
    return sum() - c;
  }
}
