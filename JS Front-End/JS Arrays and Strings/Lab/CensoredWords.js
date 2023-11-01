function censore(text, wordToReplace) {
    console.log(text.replace(new RegExp(wordToReplace, 'g'), "*".repeat(wordToReplace.length)));
}

censore('A small sentence with some words', 'small');
censore('Find the hidden word', 'hidden');