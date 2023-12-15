const baseURL = "http://localhost:3030/jsonstore/tasks";

const loadCoursesButton = document.getElementById("load-course");
const addCourseButton = document.getElementById("add-course");
const editCourseButton = document.getElementById("edit-course");
const list = document.getElementById("list");
const courseNameInput = document.getElementById("course-name");
const courseTypeInput = document.getElementById("course-type");
const courseDescriptionInput = document.getElementById("description");
const courseTeacherInput = document.getElementById("teacher-name");

loadCoursesButton.addEventListener("click", loadCourses);
addCourseButton.addEventListener("click", addCourse);
editCourseButton.addEventListener("click", editCourse);

let ID;

async function finishCourse() {
  await fetch(`${baseURL}/${ID}`, {
    method: "DELETE",
  });
  loadCourses();
}

async function editCourse(e) {
  e.preventDefault();
  const title = courseNameInput.value;
  const type = courseTypeInput.value;
  const description = courseDescriptionInput.value;
  const teacher = courseTeacherInput.value;
  const editedCourse = { title, type, description, teacher };
  await fetch(`${baseURL}/${ID}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(editedCourse),
  });
  loadCourses();
  editCourseButton.disabled = true;
  addCourseButton.disabled = false;
  courseNameInput.value = "";
  courseTypeInput.value = "";
  courseDescriptionInput.value = "";
  courseTeacherInput.value = "";
}

async function addCourse() {
  const title = courseNameInput.value;
  const type = courseTypeInput.value;
  const description = courseDescriptionInput.value;
  const teacher = courseTeacherInput.value;
  const course = { title, type, description, teacher };
  await fetch(baseURL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(course),
  });
  courseNameInput.value = "";
  courseTypeInput.value = "";
  courseDescriptionInput.value = "";
  courseTeacherInput.value = "";
  loadCourses();
}

async function loadCourses() {
  const response = await fetch(baseURL);
  const result = await response.json();
  const courses = Object.values(result);
  list.innerHTML = "";
  courses.forEach((course) => {
    addCourseToList(course);
  });
}

function addCourseToList(course) {
  const div = document.createElement("div");
  div.classList.add("container");

  const h2Title = document.createElement("h2");
  h2Title.textContent = course.title;

  const h3Teacher = document.createElement("h3");
  h3Teacher.textContent = course.teacher;

  const h3Type = document.createElement("h3");
  h3Type.textContent = course.type;

  const h4Description = document.createElement("h4");
  h4Description.textContent = course.description;

  const buttonEdit = document.createElement("button");
  buttonEdit.classList.add("edit-btn");
  buttonEdit.textContent = "Edit Course";
  buttonEdit.addEventListener("click", () => {
    list.removeChild(div);
    courseNameInput.value = course.title;
    courseTypeInput.value = course.type;
    courseDescriptionInput.value = course.description;
    courseTeacherInput.value = course.teacher;
    ID = course._id;
    editCourseButton.disabled = false;
    addCourseButton.disabled = true;
  });

  const buttonFinish = document.createElement("button");
  buttonFinish.classList.add("finish-btn");
  buttonFinish.textContent = "Finish Course";
  buttonFinish.addEventListener("click", () => {
    ID = course._id;
    finishCourse();
  });

  div.appendChild(h2Title);
  div.appendChild(h3Teacher);
  div.appendChild(h3Type);
  div.appendChild(h4Description);
  div.appendChild(buttonEdit);
  div.appendChild(buttonFinish);

  list.appendChild(div);
}
