function calcDiff(array) {
  let sumOfEven = 0;
  let sumOfOdd = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sumOfEven = sumOfEven + array[i];
    } else {
      sumOfOdd = sumOfOdd + array[i];
    }
  }
  console.log(sumOfEven - sumOfOdd);
}

