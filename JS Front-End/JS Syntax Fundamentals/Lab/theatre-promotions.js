function printPriceOfATicket(day, age) {
  switch (day) {
    case `Weekday`:
        if(age < 0) {
            console.log(`Error!`)
        } else if(age < 19) {
            console.log(`12$`);
        } else if (age < 65) {
            console.log(`18$`);
        } else if (age < 123){
            console.log(`12$`);
        } else {
            console.log(`Error!`);
        }
      break;
    case `Weekend`:
        if(age < 0) {
            console.log(`Error!`)
        } else if(age < 19) {
            console.log(`15$`);
        } else if (age < 65) {
            console.log(`20$`);
        } else if (age < 123){
            console.log(`15$`);
        } else {
            console.log(`Error!`);
        }
      break;
    case `Holiday`:
        if(age < 0) {
            console.log(`Error!`)
        } else if(age < 19) {
            console.log(`5$`);
        } else if (age < 65) {
            console.log(`12$`);
        } else if (age < 123){
            console.log(`10$`);
        } else {
            console.log(`Error!`);
        }
        break;
    default:
      console.log(`Error!`);
  }
}
