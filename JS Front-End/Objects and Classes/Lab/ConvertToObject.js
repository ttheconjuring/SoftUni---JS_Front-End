function convertToObjectAndPrintData(json) {
  Object.entries(JSON.parse(json)).forEach((entry) =>
    console.log(`${entry[0]}: ${entry[1]}`)
  );
}
