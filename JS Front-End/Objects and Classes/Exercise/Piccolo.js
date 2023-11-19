function idk(inputArray) {
  const parkingLot = {};

  inputArray.forEach((element) => {
    const [direction, carNumber] = element.split(", ");
    parkingLot[carNumber] = direction;
  });

  const carsInParkingLot = {};
  Object.entries(parkingLot).forEach((entry) => {
    if (entry[1] === "IN") {
      carsInParkingLot[entry[0]] = entry[1];
    }
  });

  Object.keys(carsInParkingLot)
    .sort((a, b) => a.localeCompare(b))
    .forEach((key) => console.log(key));
}
