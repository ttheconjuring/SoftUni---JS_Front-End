function deleteByEmail() {
  const emails = Array.from(
    document.querySelectorAll("tbody tr td:last-child")
  );
  const input = document.querySelector("label input");
  const output = document.getElementById("result");

  const inputText = input.value;
  let flag = false;

  for (const email of emails) {
    if (email.textContent === inputText) {
      const rowToBeDeleted = email.parentNode;
      rowToBeDeleted.parentNode.removeChild(rowToBeDeleted);
      input.value = "";
      flag = true;
    }
  }

  if (flag) {
    output.textContent = "Deleted.";
  } else {
    output.textContent = "Not found.";
  }
}
