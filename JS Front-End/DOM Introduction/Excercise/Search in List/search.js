function search() {
  const listItems = Array.from(document.getElementsByTagName("li"));
  const textField = document.getElementById("searchText");
  const input = textField.value;
  const label = document.getElementById("result");

  listItems.forEach((listItem) => {
    listItem.style.textDecoration = "none";
    listItem.style.fontWeight = "normal";
  });

  let counter = 0;
  for (let listItem of listItems) {
    if (listItem.textContent.includes(input)) {
      listItem.style.textDecoration = "underline";
      listItem.style.fontWeight = "bold";
      counter++;
    }
  }

  label.textContent = `${counter} matches found`;
}
