function clean(array) {
  let cleanPercentage = 0;
  for (const command of array) {
    switch (command) {
      case "soap":
        cleanPercentage += 10;
        break;
      case "water":
        cleanPercentage += cleanPercentage * 0.2;
        break;
      case "vacuum cleaner":
        cleanPercentage += cleanPercentage * 0.25;
        break;
      case "mud":
        cleanPercentage -= cleanPercentage * 0.1;
        break;
      default:
        console.log("error");
    }
  }
  console.log(`The car is ${cleanPercentage.toFixed(2)}% clean.`);
}
