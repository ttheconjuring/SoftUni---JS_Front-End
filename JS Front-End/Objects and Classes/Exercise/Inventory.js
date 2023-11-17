function print(inputArray) {
  const heroes = [];
  inputArray.forEach((element) => {
    const [name, lv, ...items] = element.split(" / ");
    const level = Number(lv);
    heroes.push({ name, level, items });
  });
  heroes
    .sort((a, b) => a.level - b.level)
    .forEach((hero) => {
      console.log(`Hero: ${hero.name}`);
      console.log(`level => ${hero.level}`);
      console.log(`items => ${hero.items}`);
    });
}
