window.addEventListener("load", solve);

function solve() {
  const [nameInput, scoreInput, roundInput] = Array.from(
    document.getElementsByTagName("input")
  );
  const addButton = document.getElementById("add-btn");
  const sureList = document.getElementById("sure-list");
  const scoreboardList = document.getElementById("scoreboard-list");
  const clearButton = document.querySelector("button.clear:last-child");

  addButton.addEventListener("click", addToSureList);
  clearButton.addEventListener("click", () => {
    location.reload();
  });

  function addToSureList() {
    const name = nameInput.value;
    const score = scoreInput.value;
    const round = roundInput.value;
    if (name !== "" && score !== "" && round !== "") {
      const li = document.createElement("li");
      li.className = "dart-item";

      const article = document.createElement("article");

      const pName = document.createElement("p");
      pName.textContent = name;

      const pScore = document.createElement("p");
      pScore.textContent = `Score: ${score}`;

      const pRound = document.createElement("p");
      pRound.textContent = `Round: ${round}`;

      article.appendChild(pName);
      article.appendChild(pScore);
      article.appendChild(pRound);

      const buttonEdit = document.createElement("button");
      buttonEdit.classList.add("btn");
      buttonEdit.classList.add("edit");
      buttonEdit.textContent = "edit";
      buttonEdit.addEventListener("click", () => {
        nameInput.value = name;
        scoreInput.value = score;
        roundInput.value = round;
        sureList.removeChild(li);
        addButton.disabled = false;
      });

      const buttonOk = document.createElement("button");
      buttonOk.classList.add("btn");
      buttonOk.classList.add("ok");
      buttonOk.textContent = "ok";
      buttonOk.addEventListener("click", () => {
        sureList.removeChild(li);
        li.removeChild(buttonEdit);
        li.removeChild(buttonOk);
        scoreboardList.appendChild(li);
        addButton.disabled = false;
      });

      li.appendChild(article);
      li.appendChild(buttonEdit);
      li.appendChild(buttonOk);

      sureList.appendChild(li);

      addButton.disabled = true;
      nameInput.value = "";
      scoreInput.value = "";
      roundInput.value = "";
    }
  }
}
