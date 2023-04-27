var searchFormEl = document.getElementById('search-form');
var textAreaEl = document.getElementById('text-area');
var currentIconEl = document.getElementById('current-icon');

const days = [
  {
    element: document.getElementById("day1"),
    humidity: document.getElementById("day1-humidity"),
    temp: document.getElementById("day1-temp"),
    windSpeed: document.getElementById("day1-windspeed")
  },
  {
    element: document.getElementById("day2"),
    humidity: document.getElementById("day2-humidity"),
    temp: document.getElementById("day2-temp"),
    windSpeed: document.getElementById("day2-windspeed")
  },
  {
    element: document.getElementById("day3"),
    humidity: document.getElementById("day3-humidity"),
    temp: document.getElementById("day3-temp"),
    windSpeed: document.getElementById("day3-windspeed")
  },
  {
    element: document.getElementById("day4"),
    humidity: document.getElementById("day4-humidity"),
    temp: document.getElementById("day4-temp"),
    windSpeed: document.getElementById("day4-windspeed")
  },
  {
    element: document.getElementById("day5"),
    humidity: document.getElementById("day5-humidity"),
    temp: document.getElementById("day5-temp"),
    windSpeed: document.getElementById("day5-windspeed")
  }
];

for (let i = 0; i < days.length; i++) {
  const day = days[i];
  // set values for each element
  day.humidity.textContent = "%";
  day.temp.textContent = "°F";
  day.windSpeed.textContent = " mph";
}

let weatherData = null;

function fetchWeatherData() {
  // make API call and store data in weatherData variable
  // example using fetch API:
  fetch("api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}")
    .then(response => response.json())
    .then(data => {
      weatherData = data;
      // do something with weatherData variable
    })
    .catch(error => console.error(error));
}

fetch("api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Update the HTML content of the elements with the retrieved data
    day1.innerHTML = "Day1 ";
    day1Humidity.innerHTML = data.humidity + "%";
    day1Temp.innerHTML = data.temperature + "°F";
    day1WindSpeed.innerHTML = data.windSpeed + " mph";
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });


fetch("api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Update the HTML content of the elements with the retrieved data
    day2.innerHTML = "Day 2";
    day2Humidity.innerHTML = data.humidity + "%";
    day2Temp.innerHTML = data.temperature + "°F";
    day2WindSpeed.innerHTML = data.windSpeed + " mph";
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });


fetch("api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Update the HTML content of the elements with the retrieved data
    day3.innerHTML = "Day 3";
    day3Humidity.innerHTML = data.humidity + "%";
    day3Temp.innerHTML = data.temperature + "°F";
    day3WindSpeed.innerHTML = data.windSpeed + " mph";
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });


fetch("api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Update the HTML content of the elements with the retrieved data
    day4.innerHTML = "Day 4";
    day4Humidity.innerHTML = data.humidity + "%";
    day4Temp.innerHTML = data.temperature + "°F";
    day4WindSpeed.innerHTML = data.windSpeed + " mph";
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });


fetch("api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Update the HTML content of the elements with the retrieved data
    day5.innerHTML = "Day 5";
    day5Humidity.innerHTML = data.humidity + "%";
    day5Temp.innerHTML = data.temperature + "°F";
    day5WindSpeed.innerHTML = data.windSpeed + " mph";
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });

// Retrieve data from local storage and display it on the page
function displayWeatherDataFromLocalStorage() {
  var weatherData = JSON.parse(localStorage.getItem('weatherData'));
  if (weatherData) {
    currentDay.innerHTML = weatherData.currentDay;
    currentTemp.innerHTML = weatherData.currentTemp;
    currentWind.innerHTML = weatherData.currentWind;
    currentHumidity.innerHTML = weatherData.currentHumidity;
    currentIconEl.src = weatherData.currentIcon;
  }
}

// Save data to local storage
function saveWeatherDataToLocalStorage() {
  var weatherData = {
    currentDay: currentDay.innerHTML,
    currentTemp: currentTemp.innerHTML,
    currentWind: currentWind.innerHTML,
    currentHumidity: currentHumidity.innerHTML,
    currentIcon: currentIconEl.src
  };
  localStorage.setItem('weatherData', JSON.stringify(weatherData));
}

// Fetch data from API and display it on the page
function displayWeatherData(cityName) {
  var apiUrl = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`;

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var currentIcon = data.weather[0].icon;
      var currentpic = currentIconEl.src = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`;
      currentTemp.innerHTML = '' + data.main.temp + '°f';
      currentWind.innerHTML = '' + data.wind.speed + 'MPH';
      currentHumidity.innerHTML = '' + data.main.humidity + '%';
      currentDay.innerHTML = new Date().toLocaleDateString('en-US', { weekday: 'long' });
      saveWeatherDataToLocalStorage();
      getFiveDay(cityName);
    })
    .catch(function (error) {
      console.error(error);
    });
}

// Handle search form submission
searchFormEl.addEventListener('submit', function (event) {
  event.preventDefault();
  var cityName = textAreaEl.value;
  displayWeatherData(cityName);
});

// Display weather data from local storage on page load
displayWeatherDataFromLocalStorage();
