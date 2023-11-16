function printObject(object) {
  Object.entries(object).forEach((entry) => {
    console.log(`${entry[0]} -> ${entry[1]}`);
  });
}
