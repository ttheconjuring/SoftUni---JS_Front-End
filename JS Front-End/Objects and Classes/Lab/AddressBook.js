function manage(inputArray) {
  const addressBook = {};
  inputArray.forEach((element) => {
    const [name, address] = element.split(":");
    addressBook[name] = address;
  });
  Object.entries(addressBook)
    .sort()
    .forEach((entry) => {
      console.log(`${entry[0]} -> ${entry[1]}`);
    });
}
