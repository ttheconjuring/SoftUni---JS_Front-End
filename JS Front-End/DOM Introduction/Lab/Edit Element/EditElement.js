function editElement(ref, match, replacement) {
    let elementText = ref.textContent;
    elementText = elementText.replace(new RegExp(match, 'g'), replacement);
    ref.textContent = elementText;
}