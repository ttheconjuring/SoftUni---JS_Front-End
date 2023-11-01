function occurrencesCounter(text, word) {
    let counter = 0;
    let textWordByWord = text.split(" ");
    for (let currentWord of textWordByWord) {
        if(currentWord === word) {
            counter++;
        }
    }
    console.log(counter);
}

