function attachEvents() {
  const location = document.getElementById("location");
  const getWeather = document.getElementById("submit");
  const forecast = document.getElementById("forecast");
  const currentWeather = document.getElementById("current");
  const upcomingWeather = document.getElementById("upcoming");

  const baseUrl = `http://localhost:3030/jsonstore/forecaster`;

  const forecastsDiv = document.createElement("div");
  forecastsDiv.classList.add("forecasts");

  const forecastInfo = document.createElement("div");
  forecastInfo.classList.add("forecast-info");

  getWeather.addEventListener("click", showWeather);

  function showWeather() {
    fetch(`${baseUrl}/locations`)
      .then((response) => response.json())
      .then((data) => {
        let locationFound = false;
        data.forEach((currentLocation) => {
          if (location.value === currentLocation.name) {
            locationFound = true;
            showToday(currentLocation.code);
            showUpcoming(currentLocation.code);
          }
        });
        if (!locationFound) {
          forecast.style.display = "block";
          forecast.textContent = "Error";
        }
      })
      .catch(() => {
        forecast.style.display = "block";
        forecast.textContent = "Error";
      });
  }

  function showToday(code) {
    fetch(`${baseUrl}/today/${code}`)
      .then((response) => response.json())
      .then((data) => {
        const condition = data.forecast.condition;
        const low = data.forecast.low;
        const high = data.forecast.high;
        const name = data.name;

        const nameSpan = document.createElement("span");
        nameSpan.classList.add("forecast-data");
        nameSpan.textContent = name;

        const degreesSpan = document.createElement("span");
        degreesSpan.classList.add("forecast-data");
        degreesSpan.innerHTML = `${low}&#176/${high}&#176`;

        const conditionSpan = document.createElement("span");
        conditionSpan.classList.add("forecast-data");
        conditionSpan.textContent = condition;

        const conditionsSpan = document.createElement("span");
        conditionsSpan.classList.add("condition");
        conditionsSpan.appendChild(nameSpan);
        conditionsSpan.appendChild(degreesSpan);
        conditionsSpan.appendChild(conditionSpan);

        const conditionSymbolSpan = document.createElement("span");
        conditionSymbolSpan.classList.add("condition");
        conditionSymbolSpan.classList.add("symbol");
        switch (condition) {
          case "Sunny":
            conditionSymbolSpan.innerHTML = "&#x2600";
            break;
          case "Partly sunny":
            conditionSymbolSpan.innerHTML = " &#x26C5";
            break;
          case "Overcast":
            conditionSymbolSpan.innerHTML = "&#x2601";
            break;
          case "Rain":
            conditionSymbolSpan.innerHTML = "&#x2614";
            break;
        }

        forecastsDiv.appendChild(conditionSymbolSpan);
        forecastsDiv.appendChild(conditionsSpan);

        forecast.style.display = "block";
        currentWeather.appendChild(forecastsDiv);
      })
      .catch((err) => console.log(err));
  }

  function showUpcoming(code) {
    fetch(`${baseUrl}/upcoming/${code}`)
      .then((response) => response.json())
      .then((data) => {
        // ============== DAY ONE==============
        const conditionDayOne = data.forecast[0].condition;
        const lowDayOne = data.forecast[0].low;
        const highDayOne = data.forecast[0].high;

        const upcomingDayOne = document.createElement("span");
        upcomingDayOne.classList.add("upcoming");

        const symbolSpanDayOne = document.createElement("span");
        symbolSpanDayOne.classList.add("symbol");
        switch (conditionDayOne) {
          case "Sunny":
            symbolSpanDayOne.innerHTML = "&#x2600";
            break;
          case "Partly sunny":
            symbolSpanDayOne.innerHTML = " &#x26C5";
            break;
          case "Overcast":
            symbolSpanDayOne.innerHTML = "&#x2601";
            break;
          case "Rain":
            symbolSpanDayOne.innerHTML = "&#x2614";
            break;
        }

        const degreesSpanDayOne = document.createElement("span");
        degreesSpanDayOne.classList.add("forecast-data");
        degreesSpanDayOne.innerHTML = `${lowDayOne}&#176/${highDayOne}&#176`;

        const conditionSpanDayOne = document.createElement("span");
        conditionSpanDayOne.classList.add("forecast-data");
        conditionSpanDayOne.textContent = conditionDayOne;

        upcomingDayOne.appendChild(symbolSpanDayOne);
        upcomingDayOne.appendChild(degreesSpanDayOne);
        upcomingDayOne.appendChild(conditionSpanDayOne);

        forecastInfo.appendChild(upcomingDayOne);

        upcomingWeather.appendChild(forecastInfo);

        // =====================================

        // ============== DAY TWO==============
        const conditionDayTwo = data.forecast[1].condition;
        const lowDayTwo = data.forecast[1].low;
        const highDayTwo = data.forecast[1].high;

        const upcomingDayTwo = document.createElement("span");
        upcomingDayTwo.classList.add("upcoming");

        const symbolSpanDayTwo = document.createElement("span");
        symbolSpanDayTwo.classList.add("symbol");
        switch (conditionDayTwo) {
          case "Sunny":
            symbolSpanDayTwo.innerHTML = "&#x2600";
            break;
          case "Partly sunny":
            symbolSpanDayTwo.innerHTML = " &#x26C5";
            break;
          case "Overcast":
            symbolSpanDayTwo.innerHTML = "&#x2601";
            break;
          case "Rain":
            symbolSpanDayTwo.innerHTML = "&#x2614";
            break;
        }

        const degreesSpanDayTwo = document.createElement("span");
        degreesSpanDayTwo.classList.add("forecast-data");
        degreesSpanDayTwo.innerHTML = `${lowDayTwo}&#176/${highDayTwo}&#176`;

        const conditionSpanDayTwo = document.createElement("span");
        conditionSpanDayTwo.classList.add("forecast-data");
        conditionSpanDayTwo.textContent = conditionDayTwo;

        upcomingDayTwo.appendChild(symbolSpanDayTwo);
        upcomingDayTwo.appendChild(degreesSpanDayTwo);
        upcomingDayTwo.appendChild(conditionSpanDayTwo);

        forecastInfo.appendChild(upcomingDayTwo);

        upcomingWeather.appendChild(forecastInfo);

        // =====================================

        // ============== DAY THREE==============
        const conditionDayThree = data.forecast[2].condition;
        const lowDayThree = data.forecast[2].low;
        const highDayThree = data.forecast[2].high;

        const upcomingDayThree = document.createElement("span");
        upcomingDayThree.classList.add("upcoming");

        const symbolSpanDayThree = document.createElement("span");
        symbolSpanDayThree.classList.add("symbol");
        switch (conditionDayThree) {
          case "Sunny":
            symbolSpanDayThree.innerHTML = "&#x2600";
            break;
          case "Partly sunny":
            symbolSpanDayThree.innerHTML = " &#x26C5";
            break;
          case "Overcast":
            symbolSpanDayThree.innerHTML = "&#x2601";
            break;
          case "Rain":
            symbolSpanDayThree.innerHTML = "&#x2614";
            break;
        }

        const degreesSpanDayThree = document.createElement("span");
        degreesSpanDayThree.classList.add("forecast-data");
        degreesSpanDayThree.innerHTML = `${lowDayThree}&#176/${highDayThree}&#176`;

        const conditionSpanDayThree = document.createElement("span");
        conditionSpanDayThree.classList.add("forecast-data");
        conditionSpanDayThree.textContent = conditionDayThree;

        upcomingDayThree.appendChild(symbolSpanDayThree);
        upcomingDayThree.appendChild(degreesSpanDayThree);
        upcomingDayThree.appendChild(conditionSpanDayThree);

        forecastInfo.appendChild(upcomingDayThree);

        upcomingWeather.appendChild(forecastInfo);

        // =====================================
      })
      .catch((err) => console.log(err));
  }
}

attachEvents();
