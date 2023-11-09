function sum(num) {
  let sumOfEvenDigits = 0;
  let sumOfOddDigits = 0;
  const array = String(num).split("");
  const n = array.length;
  for (let i = 0; i < n; i++) {
    const currentDigit = Number(array[i]);
    if (currentDigit % 2 === 0) {
      sumOfEvenDigits += currentDigit;
    } else {
      sumOfOddDigits += currentDigit;
    }
  }
  console.log(`Odd sum = ${sumOfOddDigits}, Even sum = ${sumOfEvenDigits}`);
}
