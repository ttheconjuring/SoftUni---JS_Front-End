function loadCommits() {
  const gitHubUsername = document.getElementById("username").value;
  const gitHubRepository = document.getElementById("repo").value;
  const ul = document.getElementById("commits");

  const url = `https://api.github.com/repos/${gitHubUsername}/${gitHubRepository}/commits`;

  clearUl();
  getCommits();

  function getCommits() {
    fetch(url)
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(`Error: 404 (Not Found)`);
        }
      })
      .then((data) => {
        const commits = Array.from(data);
        commits.forEach((commit) => {
          const author = commit.commit.author.name;
          const message = commit.commit.message;
          addLi(author, message);
        });
      })
      .catch((err) => {
        const li = document.createElement("li");
        li.textContent = err;
        ul.appendChild(li);
      });
  }

  function addLi(author, message) {
    const li = document.createElement("li");
    li.textContent = `${author}: ${message}`;
    ul.appendChild(li);
  }

  function clearUl() {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
}
