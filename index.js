let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

// let city = "London";
let city = prompt("Enter a city?");
let country = "uk";
let key = "4e0f8c897671865af4ea8fd6bec58340";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=${key}`;


fetch(url)
  .then(response => (
    response.json()
  ))
  .then(json => {
    console.log(json)
    let temperature = json.main.temp;
    let city = json.name;
    let weatherDesc = json.weather[0].main;
    console.log(weather)

    console.log(city)
    console.log(temperature)
    document.getElementById("weather-city").innerHTML = city
    document.getElementById("weather-desc").innerHTML = weatherDesc
    document.getElementById("current-temp").innerHTML = temperature
    
  });

console.log("hello!!")

// let city = prompt("Enter a city?");
// city = city.toLowerCase();
// if (weather[city] !== undefined) {
//   let temperature = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celsiusTemperature = Math.round(temperature);
//   let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

//   alert(
//     `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }
