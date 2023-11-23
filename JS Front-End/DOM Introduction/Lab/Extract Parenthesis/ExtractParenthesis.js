function extract(content) {
    const textContent = document.getElementById("content").textContent;
    const regex = /\((.+)\)/g;
    const matches = textContent.match(regex);
    const result = [];
    for (const match of matches) {
        result.push(match.substring(1, match.length - 1));
    }
    return result.join("; ");
}