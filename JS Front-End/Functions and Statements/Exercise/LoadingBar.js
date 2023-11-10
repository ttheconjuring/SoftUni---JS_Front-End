function load(n) {
  if (n == 100) {
    console.log(`100% Complete!`);
    console.log("[%%%%%%%%%%]");
  } else {
    let array = [];

    array.push("[");
    for (let i = 0; i < n / 10; i++) {
      array.push("%");
    }
    for (let i = 0; i < 10 - n / 10; i++) {
      array.push(".");
    }
    array.push("]");

    console.log(`${n}% ${array.join("")}`);
    console.log("Still loading...");
  }
}

