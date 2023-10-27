function calc(typeOfFruit, weightInGrams, pricePerKilogram) {
  let total =
    parseInt(weightInGrams / 1000) * pricePerKilogram +
    ((weightInGrams % 1000) * pricePerKilogram) / 1000;
  console.log(
    `I need $${total.toFixed(2)} to buy ${(weightInGrams / 1000).toFixed(
      2
    )} kilograms ${typeOfFruit}.`
  );
}
