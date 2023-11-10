function calc(n, m) {
  console.log((calcFactorial(n) / calcFactorial(m)).toFixed(2));

  function calcFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
