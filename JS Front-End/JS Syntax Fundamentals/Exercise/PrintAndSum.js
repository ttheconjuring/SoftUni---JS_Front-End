function printAndSum(n1, n2) {
  let sum = 0;
  let array = [];
  for (let i = n1; i <= n2; i++) {
    sum = sum + i;
    array.push(i);
  }
  console.log(array.join(" "));
  console.log(`Sum: ${sum}`);
}
