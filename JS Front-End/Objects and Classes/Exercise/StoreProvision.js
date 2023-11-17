function print(currentStockArray, orderedProductsArray) {
  const productQuantityList = {};
  const currentStockArrayLength = currentStockArray.length;
  for (let i = 0; i < currentStockArrayLength; i += 2) {
    productQuantityList[currentStockArray[i]] = Number(
      currentStockArray[i + 1]
    );
  }
  const orderedProductsArrayLength = orderedProductsArray.length;
  for (let i = 0; i < orderedProductsArrayLength; i += 2) {
    if (!productQuantityList.hasOwnProperty(orderedProductsArray[i])) {
      productQuantityList[orderedProductsArray[i]] = Number(
        orderedProductsArray[i + 1]
      );
    } else {
      productQuantityList[orderedProductsArray[i]] += Number(
        orderedProductsArray[i + 1]
      );
    }
  }
  Object.entries(productQuantityList).forEach((entry) =>
    console.log(entry[0] + " -> " + entry[1])
  );
}
