function solve() {
  const infoText = document.getElementById("info").firstChild;
  const departButton = document.getElementById("depart");
  const arriveButton = document.getElementById("arrive");

  let currentStopId = "";
  let nextStopId = `depot`;

  const baseUrl = `http://localhost:3030/jsonstore/bus/schedule`;

  function depart() {
    fetch(`${baseUrl}/${nextStopId}`)
      .then((response) => response.json())
      .then((data) => {
        infoText.textContent = `Next stop ${data.name}`;
        currentStopId = nextStopId;
        nextStopId = data.next;
        departButton.disabled = true;
        arriveButton.disabled = false;
      })
      .catch((err) => console.log(err));
  }

  async function arrive() {
    const response = await fetch(`${baseUrl}/${currentStopId}`);
    const data = await response.json();
    infoText.textContent = `Arriving at ${data.name}`;
    departButton.disabled = false;
    arriveButton.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
