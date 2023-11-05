function splitWords(text) {
    let matches = text.match(/[A-Z][a-z]*/g);
    console.log(matches.join(', '));
}

splitWords('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitWords('HoldTheDoor');
splitWords('ThisIsSoAnnoyingToDo');