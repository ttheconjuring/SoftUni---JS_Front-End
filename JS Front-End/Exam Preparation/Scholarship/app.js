window.addEventListener("load", solve);

function solve() {
  const applyContent = document.getElementsByTagName("form")[0];
  const [nameInput, universityInput, scoreInput] =
    applyContent.getElementsByTagName("input");
  const nextButton = document.getElementById("next-btn");
  const previewList = document.getElementById("preview-list");
  const candidatesList = document.getElementById("candidates-list");

  nextButton.addEventListener("click", next);

  function next() {
    const name = nameInput.value;
    const university = universityInput.value;
    const score = scoreInput.value;
    if (name !== "" && university !== "" && score !== "") {
      moveToPreview(name, university, score);
      nextButton.disabled = true;
      nameInput.value = "";
      universityInput.value = "";
      scoreInput.value = "";
    }
  }

  function moveToPreview(name, university, score) {
    const li = document.createElement("li");
    li.className = "application";

    const article = document.createElement("article");

    const h4Name = document.createElement("h4");
    h4Name.textContent = name;

    const pUniversity = document.createElement("p");
    pUniversity.textContent = `University: ${university}`;

    const pScore = document.createElement("p");
    pScore.textContent = `Score: ${score}`;

    article.appendChild(h4Name);
    article.appendChild(pUniversity);
    article.appendChild(pScore);

    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.className = "action-btn edit";
    editButton.addEventListener("click", () => {
      nameInput.value = name;
      universityInput.value = university;
      scoreInput.value = score;
      nextButton.disabled = false;
      previewList.innerHTML = "";
    });

    const applyButton = document.createElement("button");
    applyButton.textContent = "apply";
    applyButton.className = "action-btn apply";
    applyButton.addEventListener("click", () => {
      nextButton.disabled = false;
      li.removeChild(editButton);
      li.removeChild(applyButton);
      candidatesList.appendChild(li);
      previewList.innerHTML = "";
    });

    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(applyButton);

    previewList.appendChild(li);
  }
}
