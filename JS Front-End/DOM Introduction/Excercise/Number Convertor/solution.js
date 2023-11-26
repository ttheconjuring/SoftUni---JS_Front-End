function solve() {
  const input = Number(document.getElementById("input").value);
  const output = document.getElementById("result");

  let selectTo = document.getElementById("selectMenuTo");

  if (selectTo.value === "binary") {
    output.value = input.toString(2);
  } else if (selectTo.value === "hexadecimal") {
    output.value = input.toString(16).toUpperCase();
  }

  console.log(output.value);
}
