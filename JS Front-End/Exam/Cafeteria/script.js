function solve(inputArray) {
  const n = inputArray.shift();

  const baristasTeam = {};

  for (let i = 0; i < n; i++) {
    const baristasInfoArray = inputArray.shift().split(" ");
    const name = baristasInfoArray[0];
    const shift = baristasInfoArray[1];
    const coffeTypes = baristasInfoArray[2].split(",");
    baristasTeam[name] = { shift, coffeTypes };
  }

  let command = inputArray.shift();

  while (command !== "Closed") {
    command = command.split(" / ");
    switch (command[0]) {
      case "Prepare":
        if (baristasTeam[command[1]].shift === command[2]) {
          if (baristasTeam[command[1]].coffeTypes.includes(command[3])) {
            console.log(`${command[1]} has prepared a ${command[3]} for you!`);
          } else {
            console.log(
              `${command[1]} is not available to prepare a ${command[3]}.`
            );
          }
        } else {
          console.log(
            `${command[1]} is not available to prepare a ${command[3]}.`
          );
        }
        break;
      case "Change Shift":
        baristasTeam[command[1]].shift = command[2];
        console.log(`${command[1]} has updated his shift to: ${command[2]}`);
        break;
      case "Learn":
        if (baristasTeam[command[1]].coffeTypes.includes(command[2])) {
          console.log(`${command[1]} knows how to make ${command[2]}.`);
        } else {
          baristasTeam[command[1]].coffeTypes.push(command[2]);
          console.log(
            `${command[1]} has learned a new coffee type: ${command[2]}.`
          );
        }
        break;
      default:
        console.log("error");
    }
    command = inputArray.shift();
  }

  for (const barista in baristasTeam) {
    console.log(
      `Barista: ${barista}, Shift: ${
        baristasTeam[barista].shift
      }, Drinks: ${baristasTeam[barista].coffeTypes.join(", ")}`
    );
  }
}
