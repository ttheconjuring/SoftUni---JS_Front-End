const baseURL = "http://localhost:3030/jsonstore/tasks";

const loadMealsButton = document.getElementById("load-meals");
const addMealButton = document.getElementById("add-meal");
const editMealButton = document.getElementById("edit-meal");

const list = document.getElementById("list");

const foodInput = document.getElementById("food");
const timeInput = document.getElementById("time");
const caloriesInput = document.getElementById("calories");

loadMealsButton.addEventListener("click", loadMeals);
addMealButton.addEventListener("click", addMeal);
editMealButton.addEventListener("click", editMeal);

let ID;

function deleteMeal() {
  fetch(`${baseURL}/${ID}`, {
    method: "DELETE",
  })
    .then(loadMeals)
    .catch((err) => console.log(err));
}

function editMeal() {
  const food = foodInput.value;
  const time = timeInput.value;
  const calories = caloriesInput.value;
  const editedMeal = { food, calories, time };
  fetch(`${baseURL}/${ID}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(editedMeal),
  })
    .then(loadMeals)
    .then(() => {
      editMealButton.disabled = true;
      addMealButton.disabled = false;
      foodInput.value = "";
      timeInput.value = "";
      caloriesInput.value = "";
    })
    .catch((err) => console.log(err));
}

function addMeal() {
  const food = foodInput.value;
  const time = timeInput.value;
  const calories = caloriesInput.value;
  const meal = { food, calories, time };
  fetch(baseURL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(meal),
  })
    .then(loadMeals)
    .then(() => {
      foodInput.value = "";
      timeInput.value = "";
      caloriesInput.value = "";
    })
    .catch((err) => console.log(err));
}

function loadMeals() {
  fetch(baseURL)
    .then((response) => response.json())
    .then((result) => {
      const meals = Object.values(result);
      list.innerHTML = "";
      meals.forEach((meal) => {
        vizualizeMeal(meal);
      });
    })
    .catch((err) => console.log(err));
}

function vizualizeMeal(meal) {
  const div = document.createElement("div");
  div.classList.add("meal");

  const h2Food = document.createElement("h2");
  h2Food.textContent = meal.food;

  const h3Time = document.createElement("h3");
  h3Time.textContent = meal.time;

  const h3Calories = document.createElement("h3");
  h3Calories.textContent = meal.calories;

  const divButtons = document.createElement("div");
  divButtons.id = "meal-buttons";

  const buttonChange = document.createElement("button");
  buttonChange.classList.add("change-meal");
  buttonChange.textContent = "Change";
  buttonChange.addEventListener("click", () => {
    list.removeChild(div);
    foodInput.value = meal.food;
    timeInput.value = meal.time;
    caloriesInput.value = meal.calories;
    editMealButton.disabled = false;
    addMealButton.disabled = true;
    ID = meal._id;
  });

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("delete-meal");
  buttonDelete.textContent = "Delete";
  buttonDelete.addEventListener("click", () => {
    ID = meal._id;
    deleteMeal();
  });

  divButtons.appendChild(buttonChange);
  divButtons.appendChild(buttonDelete);

  div.appendChild(h2Food);
  div.appendChild(h3Time);
  div.appendChild(h3Calories);
  div.appendChild(divButtons);

  list.appendChild(div);
}
