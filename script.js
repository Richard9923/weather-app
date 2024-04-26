/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "80adc19b47mshcc68dd2ad0f2452p1c8758jsne3e59a076a7b",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  return fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
    options
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
  //CODE GOES HERE
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  // CODE GOES HERE
  const data = await getWeatherData(city);
  showWeatherData(data);
};

searchCity();
/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */

const showWeatherData = (weatherData) => {
  //CODE GOES HERE

  const temp = document.getElementById("temp");
  const feelslikef = document.getElementById("min-temp");
  const tempo = document.getElementById("max-temp");
  const cityName = document.getElementById("city-name");
  const typeWeather = document.getElementById("weather-type");

  temperatura = weatherData.current.temp_c;
  likefeel = weatherData.current.feelslike_f;
  tempfire = weatherData.current.feelslike_c;
  city = weatherData.location.name;
  weather = weatherData.current.condition.text;

  temp.innerText = `${temperatura}`;
  feelslikef.innerText = `${likefeel}`;
  tempo.innerText = `${tempfire}`;
  cityName.innerText = `${city}`;
  typeWeather.innerText = `${weather}`;
};
