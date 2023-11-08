function calc(product, quantity) {
  const products = {
    coffee: 1.5 * quantity,
    water: quantity,
    coke: 1.4 * quantity,
    snacks: 2 * quantity,
  };
  console.log(products[product].toFixed(2));
}
