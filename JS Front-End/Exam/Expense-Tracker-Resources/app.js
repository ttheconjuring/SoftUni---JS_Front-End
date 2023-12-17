window.addEventListener("load", solve);

function solve() {
  const expenseInput = document.getElementById("expense");
  const amountInput = document.getElementById("amount");
  const dateInput = document.getElementById("date");

  const previewList = document.getElementById("preview-list");
  const expensesList = document.getElementById("expenses-list");

  const addButton = document.getElementById("add-btn");
  const deleteButton = document.querySelector("#expenses:last-child");

  addButton.addEventListener("click", () => {
    const expense = expenseInput.value;
    const amount = amountInput.value;
    const date = dateInput.value;
    if (expense !== "" && amount !== "" && date !== "") {
      const li = document.createElement("li");
      li.classList.add("expense-item");

      const article = document.createElement("article");

      const pType = document.createElement("p");
      pType.textContent = `Type: ${expense}`;

      const pAmount = document.createElement("p");
      pAmount.textContent = `Amount: ${amount}$`;

      const pDate = document.createElement("p");
      pDate.textContent = `Date: ${date}`;

      article.appendChild(pType);
      article.appendChild(pAmount);
      article.appendChild(pDate);

      const div = document.createElement("div");
      div.classList.add("buttons");

      const buttonEdit = document.createElement("button");
      buttonEdit.classList.add("btn");
      buttonEdit.classList.add("edit");
      buttonEdit.textContent = "edit";
      buttonEdit.addEventListener("click", () => {
        expenseInput.value = expense;
        amountInput.value = amount;
        dateInput.value = date;
        previewList.removeChild(li);
        addButton.disabled = false;
      });

      const buttonOk = document.createElement("button");
      buttonOk.classList.add("btn");
      buttonOk.classList.add("ok");
      buttonOk.textContent = "ok";
      buttonOk.addEventListener("click", () => {
        previewList.removeChild(li);
        li.removeChild(div);
        expensesList.appendChild(li);
        addButton.disabled = false;
      });

      div.appendChild(buttonEdit);
      div.appendChild(buttonOk);

      li.appendChild(article);
      li.appendChild(div);

      previewList.appendChild(li);

      addButton.disabled = true;
      expenseInput.value = "";
      amountInput.value = "";
      dateInput.value = "";
    }
  });

  deleteButton.addEventListener("click", () => {
    location.reload();
  });
}
