function attachEventsListeners() {
  const inputs = Array.from(document.getElementsByTagName("input"));

  const inputDistance = inputs[0];
  const convertButton = inputs[1];
  const outputDistance = inputs[2];

  const selectors = Array.from(document.getElementsByTagName("select"));

  const inputUnits = selectors[0];
  const outputUnits = selectors[1];

  convertButton.addEventListener("click", convert);

  function convert() {
    const inputUnit = inputUnits.value;
    const outputUnit = outputUnits.value;
    const inputDistanceValue = Number(inputDistance.value);
    const meters = convertToMeter(inputUnit, inputDistanceValue);
    const reuslt = convertToOutputUnit(outputUnit, meters);
    outputDistance.value = reuslt;
  }

  function convertToMeter(inputUnit, inputDistance) {
    switch (inputUnit) {
      case "km":
        return inputDistance * 1000;
        break;
      case "m":
        return inputDistance * 1;
        break;
      case "cm":
        return inputDistance * 0.01;
        break;
      case "mm":
        return inputDistance * 0.001;
        break;
      case "mi":
        return inputDistance * 1609.34;
        break;
      case "yrd":
        return inputDistance * 0.9144;
        break;
      case "ft":
        return inputDistance * 0.3048;
        break;
      case "in":
        return inputDistance * 0.0254;
        break;
      default:
        return -1;
    }
  }

  function convertToOutputUnit(outputUnit, meters) {
    switch (outputUnit) {
      case "km":
        return meters / 1000;
        break;
      case "m":
        return meters / 1;
        break;
      case "cm":
        return meters / 0.01;
        break;
      case "mm":
        return meters / 0.001;
        break;
      case "mi":
        return meters / 1609.34;
        break;
      case "yrd":
        return meters / 0.9144;
        break;
      case "ft":
        return meters / 0.3048;
        break;
      case "in":
        return meters / 0.0254;
        break;
      default:
        return -1;
    }
  }
}
