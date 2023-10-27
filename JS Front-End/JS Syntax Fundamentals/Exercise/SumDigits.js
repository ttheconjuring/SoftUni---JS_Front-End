function sumDigits(num) {
    let stringVersionOfTheNum = String(num);
    let sumOfDigits = 0;
    for (let i = 0; i < stringVersionOfTheNum.length; i++) {
        sumOfDigits = sumOfDigits + Number(stringVersionOfTheNum.charAt(i));
    }
    console.log(sumOfDigits);
}