function create(words) {
  words.forEach((word) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = word;
    p.style.display = "none";
    div.appendChild(p);
    div.addEventListener("click", () => {
      p.style.display = "";
    });
    document.getElementById("content").appendChild(div);
  });
}
