function sortAndPrint(arrayOfNames) {
    arrayOfNames.sort((a, b) => {return a.localeCompare(b)});
    let n = arrayOfNames.length;
    for(let i = 0; i < n; i++) {
        console.log(`${i + 1}.${arrayOfNames[i]}`);
    }
}
