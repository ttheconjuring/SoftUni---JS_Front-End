function rotate(array, n) {
    for (let i = 0; i < n; i++) {
        array.push(array.shift());
    }
    console.log(array.join(" "))
}

rotate([51, 47, 32, 61, 21], 2);
rotate([32, 21, 61, 1], 4);
rotate([2, 4, 15, 31], 5);