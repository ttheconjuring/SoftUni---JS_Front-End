function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const input = JSON.parse(document.querySelector("#inputs textarea").value);
    const restaurantsInfoArray = {};
    for (let i = 0; i < input.length; i++) {
      const infoArray = input[i].split(" - ");
      const name = infoArray[0];
      const team = infoArray[1].split(", ");
      if (!restaurantsInfoArray.hasOwnProperty(name)) {
        restaurantsInfoArray[name] = team;
      } else {
        for (let i = 0; i < team.length; i++) {
          restaurantsInfoArray[name].push(team[i]);
        }
      }
    }

    let highestAverageSalary = 0;
    let bestRestaurantName = "";

    Object.entries(restaurantsInfoArray).forEach((entry) => {
      const team = entry[1];
      let averageRestaurantSalary = 0;
      let restaurantName = entry[0];
      team.forEach((employeeInfo) => {
        const infoArray = employeeInfo.split(" ");
        const salary = Number(infoArray[1]);
        averageRestaurantSalary += salary;
      });
      averageRestaurantSalary /= team.length;
      if (averageRestaurantSalary > highestAverageSalary) {
        highestAverageSalary = averageRestaurantSalary;
        bestRestaurantName = restaurantName;
      }
    });

    let highestEmployeeSalary = 0;
    restaurantsInfoArray[bestRestaurantName].forEach((employeeInfo) => {
      const infoArray = employeeInfo.split(" ");
      const salary = Number(infoArray[1]);
      if (salary > highestEmployeeSalary) {
        highestEmployeeSalary = salary;
      }
    });

    const bestRestaurantOutput = document.querySelector("#bestRestaurant p");
    bestRestaurantOutput.textContent = `Name: ${bestRestaurantName} Average Salary: ${highestAverageSalary.toFixed(
      2
    )} Best Salary: ${highestEmployeeSalary.toFixed(2)}`;

    const nameSalaryList = {};
    restaurantsInfoArray[bestRestaurantName].forEach((employeeInfo) => {
      const infoArray = employeeInfo.split(" ");
      const name = infoArray[0];
      const salary = Number(infoArray[1]);
      nameSalaryList[name] = salary;
    });

    const bestRestaurantEmployeesWithSalaries = Object.entries(
      nameSalaryList
    ).sort((a, b) => b[1] - a[1]);
    let bestRestaurantEmployeesWithSalariesOutput = "";
    bestRestaurantEmployeesWithSalaries.forEach((employeeInfo) => {
      const name = employeeInfo[0];
      console.log(name);
      const salary = employeeInfo[1];
      console.log(salary);
      bestRestaurantEmployeesWithSalariesOutput += `Name: ${name} With Salary: ${salary} `;
    });

    const workersOutput = document.querySelector("#workers p");
    workersOutput.textContent = bestRestaurantEmployeesWithSalariesOutput;
  }
}
