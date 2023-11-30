function validate() {
  const inputField = document.getElementById("email");
  inputField.addEventListener("change", validate);

  function validate(e) {
    const target = e.currentTarget;
    const email = target.value;
    const regex = /^[a-z]+@[a-z]+\.[a-z]+$/g;
    if (!regex.test(email)) {
      target.classList.add("error");
    } else {
      target.classList.remove("error");
    }
  }
}
