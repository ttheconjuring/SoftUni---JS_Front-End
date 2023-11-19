function print(inputArray) {
  const dictionary = {};
  inputArray.forEach((element) => {
    Object.entries(JSON.parse(element)).forEach(
      (entry) => (dictionary[entry[0]] = entry[1])
    );
  });
  Object.keys(dictionary)
    .sort((a, b) => a.localeCompare(b))
    .forEach((key) =>
      console.log(`Term: ${key} => Definition: ${dictionary[key]}`)
    );
}
