function signCheck(a, b, c) {
  let counter = 0;
  if (a < 0) {
    counter++;
  }
  if (b < 0) {
    counter++;
  }
  if (c < 0) {
    counter++;
  }
  if (counter % 2 == 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

signCheck(5, 5, 5);
signCheck(-5, 5, 5);
signCheck(-5, -5, 5);
signCheck(-5, -5, -5);
