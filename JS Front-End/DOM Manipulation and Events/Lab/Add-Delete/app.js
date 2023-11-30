function addItem() {
  const listItems = document.getElementById("items");
  const input = document.getElementById("newItemText");

  addItemToTheList();

  function addItemToTheList() {
    const li = document.createElement("li");
    const inputText = input.value;
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = "[Delete]";
    link.addEventListener("click", deleteListItem);
    li.textContent = inputText;
    li.appendChild(link);
    listItems.appendChild(li);
    input.value = "";
  }

  function deleteListItem(e) {
    const target = e.currentTarget;
    const listItem = target.parentNode;
    const listItems = listItem.parentNode;
    listItems.removeChild(listItem);
  }
}
