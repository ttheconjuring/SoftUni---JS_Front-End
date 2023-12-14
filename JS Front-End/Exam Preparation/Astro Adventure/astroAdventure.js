function solve(inputArray) {
  const n = inputArray.shift();

  const austonauts = {};

  for (let i = 0; i < n; i++) {
    const [name, oxygenLevel, energyReserve] = inputArray.shift().split(" ");
    austonauts[name] = {
      oxygen: Number(oxygenLevel),
      energy: Number(energyReserve),
    };
  }

  let command = inputArray.shift();

  while (command !== "End") {
    command = command.split(" - ");
    switch (command[0]) {
      case "Explore":
        if (austonauts[command[1]].energy >= Number(command[2])) {
          austonauts[command[1]].energy =
            austonauts[command[1]].energy - Number(command[2]);
          console.log(
            `${command[1]} has successfully explored a new area and now has ${
              austonauts[command[1]].energy
            } energy!`
          );
        } else {
          console.log(`${command[1]} does not have enough energy to explore!`);
        }
        break;
      case "Refuel":
        if (austonauts[command[1]].energy + Number(command[2]) <= 200) {
          austonauts[command[1]].energy =
            austonauts[command[1]].energy + Number(command[2]);
          console.log(`${command[1]} refueled their energy by ${command[2]}!`);
        } else {
          console.log(
            `${command[1]} refueled their energy by ${
              200 - austonauts[command[1]].energy
            }!`
          );
          austonauts[command[1]].energy = 200;
        }
        break;
      case "Breathe":
        if (austonauts[command[1]].oxygen + Number(command[2]) <= 100) {
          austonauts[command[1]].oxygen =
            austonauts[command[1]].oxygen + Number(command[2]);
          console.log(
            `${command[1]} took a breath and recovered ${command[2]} oxygen!`
          );
        } else {
          console.log(
            `${command[1]} took a breath and recovered ${
              100 - austonauts[command[1]].oxygen
            } oxygen!`
          );
          austonauts[command[1]].oxygen = 100;
        }
        break;
      default:
        console.log("err");
    }
    command = inputArray.shift();
  }

  for (const austonaut in austonauts) {
    console.log(
      `Astronaut: ${austonaut}, Oxygen: ${austonauts[austonaut].oxygen}, Energy: ${austonauts[austonaut].energy}`
    );
  }
}

