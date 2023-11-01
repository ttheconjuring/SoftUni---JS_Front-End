function calcDistance(x1, y1, x2, y2) {
  let firstPointToTheBeginning = Math.sqrt(
    Math.pow(0 - Number(x1), 2) + Math.pow(0 - Number(y1), 2)
  );
  if (parseInt(firstPointToTheBeginning) === firstPointToTheBeginning) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  let secondPointToTheBeginning = Math.sqrt(
    Math.pow(0 - Number(x2), 2) + Math.pow(0 - Number(y2), 2)
  );
  if (parseInt(secondPointToTheBeginning) === secondPointToTheBeginning) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  let firstPointToSecondPoint = Math.sqrt(
    Math.pow(Number(x2) - Number(x1), 2) + Math.pow(Number(y2) - Number(y1), 2)
  );
  if (parseInt(firstPointToSecondPoint) === firstPointToSecondPoint) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

