function solve() {
  const textAreas = Array.from(document.getElementsByTagName("textarea"));
  const inputTextArea = textAreas[0];
  const outputTextArea = textAreas[1];

  const buttons = Array.from(document.getElementsByTagName("button"));
  const generateButton = buttons[0];
  const buyButton = buttons[1];

  const tbody = document.getElementsByTagName("tbody")[0];

  generateButton.addEventListener("click", addTableRows);
  generateButton.addEventListener("click", activateCheckboxes);

  buyButton.addEventListener("click", showBoughtFunrinute);
  buyButton.addEventListener("click", showTotalPrice);
  buyButton.addEventListener("click", showAverageDecorationFactor);

  function addTableRows() {
    const inputArray = JSON.parse(inputTextArea.value);
    inputArray.forEach((object) => {
      const tr = createTableRow(object);
      tbody.appendChild(tr);
    });

    function createTableRow(object) {
      const tr = document.createElement("tr");

      const imgtd = document.createElement("td");
      const img = document.createElement("img");
      img.src = object.img;
      imgtd.appendChild(img);

      const nametd = document.createElement("td");
      const name = document.createElement("p");
      name.textContent = object.name;
      nametd.appendChild(name);

      const pricetd = document.createElement("td");
      const price = document.createElement("p");
      price.textContent = object.price;
      pricetd.appendChild(price);

      const decFactortd = document.createElement("td");
      const decFactor = document.createElement("p");
      decFactor.textContent = object.decFactor;
      decFactortd.appendChild(decFactor);

      const marktd = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.disabled = true;
      marktd.appendChild(checkbox);

      tr.appendChild(imgtd);
      tr.appendChild(nametd);
      tr.appendChild(pricetd);
      tr.appendChild(decFactortd);
      tr.appendChild(marktd);

      return tr;
    }
  }

  function activateCheckboxes() {
    const checkboxes = Array.from(document.getElementsByTagName("input"));
    checkboxes.forEach((checkbox) => {
      checkbox.disabled = false;
    });
  }

  function getCheckedCheckboxes() {
    const checked = [];
    const checkboxes = Array.from(document.getElementsByTagName("input"));
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checked.push(checkbox);
      }
    });
    return checked;
  }

  function showBoughtFunrinute() {
    const furnitureNames = [];
    const checkboxes = getCheckedCheckboxes();
    checkboxes.forEach((checkbox) => {
      const checkboxRow = checkbox.parentNode.parentNode;
      const furnitureName =
        checkboxRow.querySelector("td:nth-child(2) p").textContent;
      furnitureNames.push(furnitureName);
    });
    outputTextArea.value += `Bought furniture: ${furnitureNames.join(", ")}\n`;
  }

  function showTotalPrice() {
    let totalPrice = 0;
    const checkboxes = getCheckedCheckboxes();
    checkboxes.forEach((checkbox) => {
      const checkboxRow = checkbox.parentNode.parentNode;
      const furniturePrice = Number(
        checkboxRow.querySelector("td:nth-child(3) p").textContent
      );
      totalPrice += furniturePrice;
    });
    outputTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
  }

  function showAverageDecorationFactor() {
    let averageDecorationFactor = 0;
    let denominator = 0;
    const checkboxes = getCheckedCheckboxes();
    checkboxes.forEach((checkbox) => {
      const checkboxRow = checkbox.parentNode.parentNode;
      const furnitureDecorationFactor = Number(
        checkboxRow.querySelector("td:nth-child(4) p").textContent
      );
      averageDecorationFactor += furnitureDecorationFactor;
      denominator++;
    });
    averageDecorationFactor /= denominator;
    outputTextArea.value += `Average decoration factor: ${averageDecorationFactor}`;
  }
}
