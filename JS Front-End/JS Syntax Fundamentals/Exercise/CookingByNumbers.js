function calc(num, op1, op2, op3, op4, op5) {
  let result = Number(num);
  let arrayOfOperations = [op1, op2, op3, op4, op5];
  for (let i = 0; i < arrayOfOperations.length; i++) {
    switch (arrayOfOperations[i]) {
      case "chop":
        result = result / 2;
        break;
      case "dice":
        result = Math.sqrt(result);
        break;
      case "spice":
        result = result + 1;
        break;
      case "bake":
        result = result * 3;
        break;
      case "fillet":
        result = result - (result * 0.2);
        break;
      default:
        console.log("Error!");
    }
    console.log(result);
  }
}
