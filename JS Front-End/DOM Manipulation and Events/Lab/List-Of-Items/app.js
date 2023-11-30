function addItem() {
    const listItems = document.getElementById("items");
    const input = document.getElementById("newItemText");
    const addButton = document.querySelector("main input:last-child");

    addItemToTheList();

    // addButton.addEventListener("click", addItemToTheList);

    function addItemToTheList() {
        const li = document.createElement("li");
        const inputText = input.value;
        li.textContent = inputText;
        listItems.appendChild(li);
        input.value = "";
    }

}