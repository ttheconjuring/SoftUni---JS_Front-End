function attachEvents() {
  const phonebook = document.getElementById("phonebook");
  const loadButton = document.getElementById("btnLoad");

  const personInput = document.getElementById("person");
  const phoneInput = document.getElementById("phone");
  const createButton = document.getElementById("btnCreate");

  const baseURL = "http://localhost:3030/jsonstore/phonebook";

  loadButton.addEventListener("click", loadPhoneBook);
  createButton.addEventListener("click", createContact);

  async function loadPhoneBook() {
    phonebook.innerHTML = "";
    const response = await fetch(baseURL);
    const data = await response.json();
    const contacts = Object.values(data);
    contacts.forEach((contact) => {
      const li = document.createElement("li");
      li.textContent = `${contact.person}: ${contact.phone}`;
      const deleteButton = document.createElement("button");
      deleteButton.addEventListener("click", async () => {
        await fetch(`${baseURL}/${contact._id}`, {
          method: "delete",
        });
        phonebook.removeChild(deleteButton.parentNode);
      });
      deleteButton.textContent = "Delete";
      li.appendChild(deleteButton);
      phonebook.appendChild(li);
    });
  }

  async function createContact() {
    const person = personInput.value;
    const phone = phoneInput.value;
    const contact = { person, phone };

    fetch(`${baseURL}`, {
      method: "post",
      headers: { "Content-type": "application.json" },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then(() => {
        loadPhoneBook();
      });

    personInput.value = "";
    phoneInput.value = "";
  }
}

attachEvents();
