// solution 1
function censore(text, wordToReplace) {
    console.log(text.replace(new RegExp(wordToReplace, 'g'), "*".repeat(wordToReplace.length)));
} 

// solution 2
function censore(text, wordToReplace) {
    while(text.includes(wordToReplace)) {
        text = text.replace(wordToReplace, "*".repeat(wordToReplace.length));
    }
    console.log(text);
}
