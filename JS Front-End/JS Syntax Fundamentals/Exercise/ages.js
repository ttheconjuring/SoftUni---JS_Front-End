function ageRecognition(age) {
    if(age < 0) {
        console.log("out of bounds");
    } else if (age < 3) {
        console.log("baby");
    } else if (age < 14) {
        console.log("child");
    } else if (age < 20) {
        console.log("teenager");
    } else if (age < 66) {
        console.log("adult");
    } else {
        console.log("elder")
    }
}
