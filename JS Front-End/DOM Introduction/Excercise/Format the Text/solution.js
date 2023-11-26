function solve() {
  const texrArea = document.getElementById("input");
  const input = texrArea.value;
  const output = document.getElementById("output");
  output.textContent = "";
  let sentences = input
    .split(".")
    .map((str) => str.trim())
    .filter((str) => str !== "");
  let paragraphs = [];
  while (sentences.length >= 3) {
    let paragraph = "";
    for (let i = 0; i < 3; i++) {
      paragraph = paragraph + sentences.shift() + ".";
    }
    paragraphs.push(paragraph);
  }

  if (sentences.length > 0) {
    let paragraph = "";
    while (sentences.length != 0) {
      paragraph = paragraph + sentences.shift() + ".";
    }
    paragraphs.push(paragraph);
  }
  paragraphs.forEach((paragraph) => {
    let p = document.createElement("p");
    p.textContent = paragraph;
    output.appendChild(p);
  });
}
