const laodVacationsButton = document.getElementById("load-vacations");
laodVacationsButton.addEventListener("click", load);

const list = document.getElementById("list");

const [nameInput, daysInput, dateInput] = Array.from(
  document.getElementsByTagName("input")
);
const addVacationButton = document.getElementById("add-vacation");
const editVacationButton = document.getElementById("edit-vacation");

addVacationButton.addEventListener("click", addVacation);
editVacationButton.addEventListener("click", editVacation);

let id;

async function editVacation(e) {
  e.preventDefault();
  const editedVacation = {
    name: nameInput.value,
    days: daysInput.value,
    date: dateInput.value,
    id,
  };
  await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(editedVacation),
  });
  load();
  editVacationButton.disabled = true;
  addVacationButton.disabled = false;
  nameInput.value = "";
  daysInput.value = "";
  dateInput.value = "";
}

async function addVacation(e) {
  e.preventDefault();
  const vacation = {
    name: nameInput.value,
    days: daysInput.value,
    date: dateInput.value,
  };
  await fetch("http://localhost:3030/jsonstore/tasks/", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(vacation),
  });
  nameInput.value = "";
  daysInput.value = "";
  dateInput.value = "";
  load();
}

async function load() {
  list.innerHTML = "";
  const response = await fetch("http://localhost:3030/jsonstore/tasks/");
  const result = await response.json();
  const vacations = Object.values(result);
  vacations.forEach((vacation) => {
    addToList(vacation.name, vacation.date, vacation.days, vacation._id);
  });
}

function addToList(name, date, days, _id) {
  const div = document.createElement("div");
  div.className = "container";

  const h2Name = document.createElement("h2");
  h2Name.textContent = name;

  const h3Date = document.createElement("h3");
  h3Date.textContent = date;

  const h3Days = document.createElement("h3");
  h3Days.textContent = days;

  const buttonChange = document.createElement("button");
  buttonChange.className = "change-btn";
  buttonChange.textContent = "Change";
  buttonChange.addEventListener("click", () => {
    nameInput.value = name;
    daysInput.value = days;
    dateInput.value = date;
    list.removeChild(div);
    editVacationButton.disabled = false;
    addVacationButton.disabled = true;
    id = _id;
  });

  const buttonDone = document.createElement("button");
  buttonDone.className = "done-btn";
  buttonDone.textContent = "Done";
  buttonDone.addEventListener("click", async () => {
    await fetch(`http://localhost:3030/jsonstore/tasks/${_id}`, {
      method: "DELETE",
    });
    load();
  });

  div.appendChild(h2Name);
  div.appendChild(h3Date);
  div.appendChild(h3Days);
  div.appendChild(buttonChange);
  div.appendChild(buttonDone);

  list.appendChild(div);
}
