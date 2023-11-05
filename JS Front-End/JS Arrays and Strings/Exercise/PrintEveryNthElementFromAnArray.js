function print(array, n) {
    let newArray = [];
    const length = array.length;
    for (let i = 0; i < length; i+= n) {
        newArray.push(array[i]);
    }
    return newArray;
}

