function modify(n) {
  while (calcAverageSumOfDigits(n) <= 5) {
    n += "9";
  }

  console.log(n);

  function calcAverageSumOfDigits(num) {
    let digits = Array.from(String(num), Number);
    let sum = 0;
    for (const digit of digits) {
      sum += Number(digit);
    }
    const average = sum / digits.length;
    return average;
  }
}
