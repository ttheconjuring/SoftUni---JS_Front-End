function attachEvents() {
  const textArea = document.getElementById("messages");
  const [nameInput, contentInput, sendButton, refreshButton] =
    document.getElementsByTagName("input");

  const baseURL = " http://localhost:3030/jsonstore/messenger";

  sendButton.addEventListener("click", postMessage);
  refreshButton.addEventListener("click", showMessages);

  function postMessage() {
    const author = nameInput.value;
    const content = contentInput.value;
    const message = { author, content };
    fetch(baseURL, {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(message),
    });
    nameInput.value = "";
    contentInput.value = "";
  }

  function showMessages() {
    fetch(baseURL)
      .then((response) => response.json())
      .then((messages) => {
        const authorContentArray = Object.values(messages);
        let output = "";
        authorContentArray.forEach((message) => {
          output += `${message.author}: ${message.content}\n`;
        });
        textArea.value = output.trim();
      })
      .catch((err) => console.log(err));
  }
}

attachEvents();
