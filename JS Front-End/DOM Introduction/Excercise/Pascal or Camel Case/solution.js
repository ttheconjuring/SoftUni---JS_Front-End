function solve() {
  const text = document.getElementById("text");
  const namingConvention = document.getElementById("naming-convention");
  const result = document.getElementById("result");
  let textWords = text.value.toLowerCase().split(" ");
  if (namingConvention.value === "Camel Case") {
    refactor(textWords, 1);
    result.textContent = textWords.join("");
  } else if (namingConvention.value === "Pascal Case") {
    refactor(textWords, 0)
    result.textContent = textWords.join("");
  } else {
    result.textContent = "Error!";
  }

  function refactor(array, index) {
    for (let i = index; i < array.length; i++) {
      array[i] =
        array[i].charAt(0).toUpperCase() + array[i].substring(1);
    }
  }

}
