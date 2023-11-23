function alphabeticalPrint(array) {
  const lca = array.map((element) => element.toLowerCase()).sort();
  for (let i = 0; i < lca.length; i++) {
    lca[i] = array[findIndexOf(lca[i])];
    lca[i] = lca[i].replace(" : ", ": ");
    if (i === 0) {
      console.log(lca[i].charAt(0).toUpperCase());
      console.log(`  ${lca[i]}`);
    } else {
      if (lca[i].charAt(0) === lca[i - 1].charAt(0)) {
        console.log(`  ${lca[i]}`);
      } else {
        console.log(lca[i].charAt(0).toUpperCase());
        console.log(`  ${lca[i]}`);
      }
    }
  }

  function findIndexOf(element) {
    for (let i = 0; i < array.length; i++) {
      if (element === array[i].toLowerCase()) {
        return i;
      }
    }
    return -1;
  }
}
