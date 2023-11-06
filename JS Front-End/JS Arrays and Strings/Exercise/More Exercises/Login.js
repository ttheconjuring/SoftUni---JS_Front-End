function login(array) {
  const username = array[0];
  const password = username.split("").reverse().join("");

  const n = array.length;
  let failsCounter = 0;
  for (let i = 1; i < n; i++) {
    if (array[i] == password) {
      console.log(`User ${username} logged in.`);
    } else {
      failsCounter++;
      if (failsCounter == 4) {
        console.log(`User ${username} blocked!`);
      } else {
      console.log("Incorrect password. Try again.");
      }
    }
  }
}

