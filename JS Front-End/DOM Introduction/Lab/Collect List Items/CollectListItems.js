function extractText() {
    const ul = Array.from(document.getElementById("items").children);
    let textContent = [];
    for (const li of ul) {
        textContent.push(li.textContent);
    }
    const textArea = document.getElementById("result");
    textArea.textContent = textContent.join("\n");
}