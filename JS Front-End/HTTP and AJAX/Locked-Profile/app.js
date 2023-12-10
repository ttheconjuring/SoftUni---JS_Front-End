function lockedProfile() {
  const main = document.getElementById("main");

  const baseURL = "http://localhost:3030/jsonstore/advanced/profiles";

  load();

  async function load() {
    const response = await fetch(baseURL);
    const data = await response.json();
    const users = Object.values(data);
    users.forEach((user) => {
      show(user.username, user.email, user.age, user._id);
    });
  }

  function show(username, email, age, id) {
    const div = document.createElement("div");
    div.classList.add("profile");

    const img = document.createElement("img");
    img.src = "./iconProfile2.png";
    img.classList.add("userIcon");

    const lockLabel = document.createElement("label");
    lockLabel.textContent = "Lock";

    const lockInput = document.createElement("input");
    lockInput.type = "radio";
    lockInput.name = `${id}Locked`;
    lockInput.value = "lock";
    lockInput.checked = true;

    const unlockLabel = document.createElement("label");
    unlockLabel.textContent = "Unlock";

    const unlockInput = document.createElement("input");
    unlockInput.type = "radio";
    unlockInput.name = `${id}Locked`;
    unlockInput.value = "unlock";

    const hr1 = document.createElement("hr");

    const usernameLabel = document.createElement("label");
    usernameLabel.textContent = "Username";

    const usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.name = `user1Username`;
    usernameInput.setAttribute("value", username);
    usernameInput.disabled = true;
    usernameInput.readOnly = true;

    const user1HiddenFieldsDiv = document.createElement("div");
    user1HiddenFieldsDiv.classList.add("hiddenInfo");

    const hr2 = document.createElement("hr");

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = `${id}Email`;
    emailInput.value = email;
    emailInput.disabled = true;
    emailInput.readOnly = true;

    const ageLabel = document.createElement("label");
    ageLabel.textContent = "Age:";

    const ageInput = document.createElement("input");
    ageInput.type = "email";
    ageInput.name = `${id}Age`;
    ageInput.value = age;
    ageInput.disabled = true;
    ageInput.readOnly = true;

    const button = document.createElement("button");
    button.textContent = "Show more";
    button.addEventListener("click", () => {
      if (unlockInput.checked) {
        if (button.textContent === "Show more") {
          user1HiddenFieldsDiv.classList.remove("hiddenInfo");
          button.textContent = "Hide it";
        } else {
          user1HiddenFieldsDiv.classList.add("hiddenInfo");
          button.textContent = "Show more";
        }
      }
    });

    div.appendChild(img);
    div.appendChild(lockLabel);
    div.appendChild(lockInput);
    div.appendChild(unlockLabel);
    div.appendChild(unlockInput);
    div.appendChild(document.createElement("br"));
    div.appendChild(hr1);
    div.appendChild(usernameLabel);
    div.appendChild(usernameInput);
    div.appendChild(user1HiddenFieldsDiv);
    user1HiddenFieldsDiv.appendChild(hr2);
    user1HiddenFieldsDiv.appendChild(emailLabel);
    user1HiddenFieldsDiv.appendChild(emailInput);
    user1HiddenFieldsDiv.appendChild(ageLabel);
    user1HiddenFieldsDiv.appendChild(ageInput);
    div.appendChild(button);

    main.appendChild(div);
  }
}
