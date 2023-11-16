function manage(inputArray) {
  const meetings = {};
  inputArray.forEach((element) => {
    const [weekday, name] = element.split(" ");
    if (!meetings.hasOwnProperty(weekday)) {
      meetings[weekday] = name;
      console.log("Scheduled for " + weekday);
    } else {
      console.log("Conflict on " + weekday + "!");
    }
  });
  Object.entries(meetings).forEach((entry) => {
    const [weekday, name] = entry;
    console.log(weekday + " -> " + name);
  });
}
