function loadRepos() {
  const url = `https://api.github.com/users/testnakov/repos`;
  const res = document.getElementById("res");
  fetch(url)
    .then((response) => response.text())
    .then((result) => res.textContent = result)
    .catch((err) => console.log(err));
}
