function calc(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
  let totalPrice = 0;
  switch (typeOfTheGroup) {
    case "Students":
      switch (dayOfTheWeek) {
        case "Friday":
          totalPrice = groupOfPeople * 8.45;
          break;
        case "Saturday":
          totalPrice = groupOfPeople * 9.8;
          break;
        case "Sunday":
          totalPrice = groupOfPeople * 10.46;
          break;
        default:
          console.log("Error!");
      }
      if (groupOfPeople >= 30) {
        totalPrice = totalPrice * 0.85;
      }
      break;
    case "Business":
      let ticketPrice = 0;
      switch (dayOfTheWeek) {
        case "Friday":
          ticketPrice = 10.9;
          break;
        case "Saturday":
          ticketPrice = 15.6;
          break;
        case "Sunday":
          ticketPrice = 16;
          break;
        default:
          console.log("Error!");
      }
      if (groupOfPeople >= 100) {
        totalPrice = (groupOfPeople - 10) * ticketPrice;
      } else {
        totalPrice = groupOfPeople * ticketPrice;
      }
      break;
    case "Regular":
      switch (dayOfTheWeek) {
        case "Friday":
          totalPrice = groupOfPeople * 15;
          break;
        case "Saturday":
          totalPrice = groupOfPeople * 20;
          break;
        case "Sunday":
          totalPrice = groupOfPeople * 22.5;
          break;
        default:
          console.log("Error!");
      }
      if(groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice = totalPrice * 0.95;
      }
      break;
    default:
      console.log("Error!");
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
