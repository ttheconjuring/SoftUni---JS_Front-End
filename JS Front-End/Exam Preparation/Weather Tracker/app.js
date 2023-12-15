const baseURL = "http://localhost:3030/jsonstore/tasks";

const loadHistoryButton = document.getElementById("load-history");
const editWeatherButton = document.getElementById("edit-weather");
const addWeatherButton = document.getElementById("add-weather");

const list = document.getElementById("list");

const locationInput = document.getElementById("location");
const temperatureInput = document.getElementById("temperature");
const dateInput = document.getElementById("date");

let ID;

loadHistoryButton.addEventListener("click", loadHistory);
addWeatherButton.addEventListener("click", addHistory);
editWeatherButton.addEventListener("click", editHistory);

function deleteHistory() {
  fetch(`${baseURL}/${ID}`, {
    method: "DELETE",
  })
    .then(loadHistory)
    .catch((err) => console.log(err));
}

function editHistory() {
  const location = locationInput.value;
  const temperature = temperatureInput.value;
  const date = dateInput.value;
  const editedHistory = { location, temperature, date };
  fetch(`${baseURL}/${ID}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(editedHistory),
  })
    .then(loadHistory)
    .then(() => {
      editWeatherButton.disabled = true;
      addWeatherButton.disabled = false;
    })
    .then(() => {
      locationInput.value = "";
      temperatureInput.value = "";
      dateInput.value = "";
    })
    .catch((err) => console.log(err));
}

function addHistory() {
  const location = locationInput.value;
  const temperature = temperatureInput.value;
  const date = dateInput.value;
  const history = { location, temperature, date };
  fetch(baseURL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(history),
  })
    .then(() => {
      locationInput.value = "";
      temperatureInput.value = "";
      dateInput.value = "";
    })
    .then(loadHistory)
    .catch((err) => console.log(err));
}

function loadHistory() {
  fetch(baseURL)
    .then((response) => response.json())
    .then((result) => {
      const histories = Object.values(result);
      list.innerHTML = "";
      histories.forEach((history) => {
        vizualizeHistory(history);
      });
    })
    .then(() => {
      editWeatherButton.disabled = true;
    })
    .catch((err) => console.log(err));
}

function vizualizeHistory(history) {
  const divContainer = document.createElement("div");
  divContainer.classList.add("container");

  const h2Location = document.createElement("h2");
  h2Location.textContent = history.location;

  const h3Date = document.createElement("h3");
  h3Date.textContent = history.date;

  const h3Temperature = document.createElement("h3");
  h3Temperature.id = "celsius";
  h3Temperature.textContent = history.temperature;

  const divButtonsContainer = document.createElement("div");
  divButtonsContainer.id = "buttons-container";

  const buttonChange = document.createElement("button");
  buttonChange.classList.add("change-btn");
  buttonChange.textContent = "Change";
  buttonChange.addEventListener("click", () => {
    ID = history._id;
    list.removeChild(divContainer);
    locationInput.value = history.location;
    temperatureInput.value = history.temperature;
    dateInput.value = history.date;
    editWeatherButton.disabled = false;
    addWeatherButton.disabled = true;
  });

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("delete-btn");
  buttonDelete.textContent = "Delete";
  buttonDelete.addEventListener("click", () => {
    ID = history._id;
    deleteHistory();
  });

  divButtonsContainer.appendChild(buttonChange);
  divButtonsContainer.appendChild(buttonDelete);

  divContainer.appendChild(h2Location);
  divContainer.appendChild(h3Date);
  divContainer.appendChild(h3Temperature);
  divContainer.appendChild(divButtonsContainer);

  list.appendChild(divContainer);
}
