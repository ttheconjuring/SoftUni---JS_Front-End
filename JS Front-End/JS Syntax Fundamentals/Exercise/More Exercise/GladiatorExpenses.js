function solve(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPice
) {
  let totalExpenses = 0;
  let brokenShields = 0;
  for (let i = 1; i <= lostFightsCount; i++) {
    if (i % 2 == 0) {
      totalExpenses = totalExpenses + helmetPrice;
    }
    if (i % 3 == 0) {
      totalExpenses = totalExpenses + swordPrice;
    }
    if ((i % 2 == 0) && (i % 3 == 0)) {
        totalExpenses = totalExpenses + shieldPrice;
        brokenShields++;
    }
    if(brokenShields == 2) {
        totalExpenses = totalExpenses + armorPice;
        brokenShields = 0;
    }
  }
  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

solve(23, 12.50, 21.50, 40, 200);
