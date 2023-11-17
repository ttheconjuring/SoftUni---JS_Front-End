function print(inputArray) {
  const objects = [];
  inputArray.forEach((element) => {
    const array = element.split(" | ");
    const town = array[0];
    const latitude = Number(array[1]).toFixed(2);
    const longitude = Number(array[2]).toFixed(2);
    objects.push({ town, latitude, longitude });
  });
  objects.forEach((object) => console.log(object));
}
