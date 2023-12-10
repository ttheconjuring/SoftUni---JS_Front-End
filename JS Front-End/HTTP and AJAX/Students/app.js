function attachEvents() {
  const tableBody = document.getElementsByTagName("tbody")[0];
  const [
    firstNameInputField,
    lastNameInputField,
    facultyNumberInputField,
    gradeInputField,
  ] = document.getElementsByTagName("input");
  const submitButton = document.getElementById("submit");

  const baseURL = "http://localhost:3030/jsonstore/collections/students";

  load();
  submitButton.addEventListener("click", submit);

  function load() {
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        const sutdentsInfoArray = Object.values(data);
        sutdentsInfoArray.forEach((student) => {
          addToTable([
            student.firstName,
            student.lastName,
            student.facultyNumber,
            student.grade,
          ]);
        });
      })
      .catch((err) => console.log(err));
  }

  function addToTable(studentInfoArray) {
    const tr = document.createElement("tr");
    const n = studentInfoArray.length;
    for (let i = 0; i < n; i++) {
      const td = document.createElement("td");
      td.textContent = studentInfoArray[i];
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }

  submitButton.addEventListener("click", submit);

  function submit() {
    const firstName = firstNameInputField.value;
    const lastName = lastNameInputField.value;
    const facultyNumber = facultyNumberInputField.value;
    const grade = gradeInputField.value;
    const student = {
      firstName,
      lastName,
      facultyNumber,
      grade,
    };

    fetch(baseURL, {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(student),
    })
      .then((response) => response.json())
      .then(() => {
        load();
        firstNameInputField.value = "";
        lastNameInputField.value = "";
        facultyNumberInputField.value = "";
        gradeInputField.value = "";
      })
      .catch((err) => console.log(err));
  }
}

attachEvents();
