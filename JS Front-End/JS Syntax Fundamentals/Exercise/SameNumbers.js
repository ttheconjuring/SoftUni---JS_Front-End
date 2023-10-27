function checkAndSum(num) {
  let stringVersionOfTheNum = String(num);
  let firstChar = String(stringVersionOfTheNum.charAt(0));
  let allDigitsAreTheSame = true;
  let sum = Number(firstChar);
  for (let i = 1; i < stringVersionOfTheNum.length; i++) {
    sum = sum + Number(stringVersionOfTheNum.charAt(i));
    if (firstChar != stringVersionOfTheNum.charAt(i)) {
      allDigitsAreTheSame = false;
    }
  }
  if (allDigitsAreTheSame) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(sum);
}
