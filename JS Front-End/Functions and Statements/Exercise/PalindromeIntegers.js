function isPalindrome(array) {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    if (String(array[i]) === String(array[i]).split("").reverse().join("")) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
