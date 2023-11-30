function focused() {
  const allInputFields = Array.from(document.querySelectorAll("div input"));
  for (const inputField of allInputFields) {
    inputField.addEventListener("focus", addFocusedClass);
    inputField.addEventListener("blur", removeFocusedClass);
  }

  function addFocusedClass(e) {
    const target = e.currentTarget;
    target.parentNode.classList.add("focused");
  }

  function removeFocusedClass(e) {
    const target = e.currentTarget;
    target.parentNode.classList.remove("focused");
  }
}
