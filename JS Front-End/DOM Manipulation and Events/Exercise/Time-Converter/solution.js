function attachEventsListeners() {
  const days = document.getElementById("days");
  const daysBtn = document.getElementById("daysBtn");

  const hours = document.getElementById("hours");
  const hoursBtn = document.getElementById("hoursBtn");

  const minutes = document.getElementById("minutes");
  const minutesBtn = document.getElementById("minutesBtn");

  const seconds = document.getElementById("seconds");
  const secondsBtn = document.getElementById("secondsBtn");

  daysBtn.addEventListener("click", convertFromDays);
  hoursBtn.addEventListener("click", convertFromHours);
  minutesBtn.addEventListener("click", convertFromMinutes);
  secondsBtn.addEventListener("click", convertFromSeconds);

  function convertFromDays() {
    hours.value = days.value * 24;
    minutes.value = days.value * 24 * 60;
    seconds.value = days.value * 24 * 60 * 60;
  }

  function convertFromHours() {
    minutes.value = hours.value * 60;
    seconds.value = hours.value * 60 * 60;
    days.value = hours.value / 24;
  }

  function convertFromMinutes() {
    seconds.value = minutes.value * 60;
    days.value = minutes.value / 60 / 24;
    hours.value = minutes.value / 60;
  }

  function convertFromSeconds() {
    days.value = seconds.value / 60 / 60 / 24;
    hours.value = seconds.value / 60 / 60;
    minutes.value = seconds.value / 60;
  }
}
