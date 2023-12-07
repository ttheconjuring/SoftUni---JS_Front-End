function getInfo() {
  const stopId = document.getElementById("stopId").value;
  const stopNameDiv = document.getElementById("stopName");
  const buses = document.getElementById("buses");
  const baseUrl = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  stopNameDiv.textContent = "";
  while (buses.firstChild) {
    buses.removeChild(buses.firstChild);
  }

  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      const busesTimesArray = Object.entries(data.buses);
      const stopName = data.name;

      stopNameDiv.textContent = stopName;
      busesTimesArray.forEach((entry) => {
        const busNumber = entry[0];
        const arrivesIn = entry[1];
        const bus = document.createElement("li");
        bus.textContent = `Bus ${busNumber} arrives in ${arrivesIn} minutes`;
        buses.appendChild(bus);
      });
    })
    .catch(() => (stopNameDiv.textContent = "Error"));
}
