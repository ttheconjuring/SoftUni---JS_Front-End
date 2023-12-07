function loadRepos() {
  const gitHubUsername = document.getElementById("username").value;
  const ul = document.getElementById("repos");
  const url = `https://api.github.com/users/${gitHubUsername}/repos`;

  clearUl();
  getRepositories();

  function addLiToUl(repositoryHtmlUrl, repositoryFullName) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = repositoryHtmlUrl;
    a.textContent = repositoryFullName;
    li.appendChild(a);
    ul.appendChild(li);
  }

  function getRepositories() {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const repositories = Array.from(result);
        repositories.forEach((repository) =>
          addLiToUl(repository.html_url, repository.full_name)
        );
      })
      .catch((err) => console.log(err));
  }

  function clearUl() {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
}
