function solve() {
  const buttons = Array.from(document.getElementsByTagName("button"));
  const table = document.getElementsByTagName("table")[0];
  const status = document.querySelector("#check p");
  const tableRows = Array.from(table.querySelectorAll("tbody > *"));
  const n = tableRows.length;

  const quickCheckButton = buttons[0];
  const clearButton = buttons[1];

  quickCheckButton.addEventListener("click", quickCheck);
  clearButton.addEventListener("click", clear);

  function quickCheck() {
    let flag = true;
    for (let i = 0; i < n; i++) {
      if (testRow(tableRows[i])) {
        flag = false;
        break;
      }
      if (testColumn(i)) {
        flag = false;
        break;
      }
    }
    if (flag) {
      indicateDone();
    } else {
      indicateWrong();
    }
  }

  function clear() {
    const inputs = Array.from(document.getElementsByTagName("input"));
    inputs.forEach((input) => {
      input.value = "";
    });
    table.style.border = "";
    status.textContent = "";
  }

  function testRow(tableRow) {
    const numbersArray = extractRowNumbers(tableRow);
    let flag = false;
    numbersArray.forEach((number) => {
      if (elementIsDuplicated(numbersArray, number)) {
        flag = true;
      }
    });
    return flag;
  }

  function extractRowNumbers(tableRow) {
    const tds = Array.from(tableRow.querySelectorAll("td"));
    const rowNumbers = [];
    tds.forEach((td) => {
      const inputValue = td.getElementsByTagName("input")[0].value;
      rowNumbers.push(inputValue);
    });
    return rowNumbers;
  }

  function indicateWrong() {
    table.style.border = "2px solid red";
    status.style.color = "red";
    status.textContent = "NOP! You are not done yet...";
  }

  function elementIsDuplicated(arr, element) {
    return arr.indexOf(element) !== arr.lastIndexOf(element);
  }

  function extractColumnNumbers(index) {
    const columnNumbers = [];
    tableRows.forEach((row) => {
      const number = extractRowNumbers(row)[index];
      columnNumbers.push(number);
    });
    return columnNumbers;
  }

  function testColumn(index) {
    const numbersArray = extractColumnNumbers(index);
    let flag = false;
    numbersArray.forEach((number) => {
      if (elementIsDuplicated(numbersArray, number)) {
        flag = true;
      }
    });
    return flag;
  }

  function indicateDone() {
    table.style.border = "2px solid green";
    status.style.color = "green";
    status.textContent = "You solve it! Congratulations!";
  }
}
