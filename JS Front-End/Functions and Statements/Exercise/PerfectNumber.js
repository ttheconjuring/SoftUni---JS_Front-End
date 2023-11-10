function isPerfect(n) {
  const array = properDivisors(n);
  const m = array.length;

  let sum = 0;
  for (let i = 0; i < m; i++) {
    sum += array[i];
  }

  if (n === sum) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }

  function properDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        if (n / i === i) {
          divisors.push(i);
        } else {
          divisors.push(i);
          divisors.push(n / i);
        }
      }
    }
    divisors = divisors.filter((divisor) => divisor !== n);
    return divisors;
  }
}
