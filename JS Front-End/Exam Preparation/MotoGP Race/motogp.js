function solve(inputArray) {
  const n = inputArray.shift();

  const riders = {};

  for (let i = 0; i < n; i++) {
    const [name, fuelCapacity, position] = inputArray.shift().split("|");
    riders[name] = {
      fuelCapacity: Number(fuelCapacity),
      position: Number(position),
    };
  }

  let command = inputArray.shift();

  while (command !== "Finish") {
    command = command.split(" - ");
    switch (command[0]) {
      case "StopForFuel":
        if (riders[command[1]].fuelCapacity < Number(command[2])) {
          riders[command[1]].position = Number(command[3]);
          console.log(
            `${command[1]} stopped to refuel but lost his position, now he is ${command[3]}.`
          );
        } else {
          console.log(`${command[1]} does not need to stop for fuel!`);
        }
        break;
      case "Overtaking":
        if (riders[command[1]].position < riders[command[2]].position) {
          const temporaryPosition = riders[command[1]].position;
          riders[command[1]].position = riders[command[2]].position;
          riders[command[2]].position = temporaryPosition;
          console.log(`${command[1]} overtook ${command[2]}!`);
        }
        break;
      case "EngineFail":
        delete riders[command[1]];
        console.log(
          `${command[1]} is out of the race because of a technical issue, ${command[2]} laps before the finish.`
        );
        break;
      default:
        console.log("error");
    }
    command = inputArray.shift();
  }

  for (const rider in riders) {
    console.log(rider);
    console.log(`  Final position: ${riders[rider].position}`);
  }
}
