const api = {
  key: "64ed82577ced7f69cb1687f0ce536131",
  base: "https://api.openweathermap.org/data/2.5/",
  lang: "pt_br",
  units: "metric",
  lat: -8.052717031574272,
  long: -34.88514576886238,
};

const url = `${api.base}weather?lat=${api.lat}&lon=${api.long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`;

fetch(url)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.error(error);
  });

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// function displayResults(weather) {
//   console.log(weather);

//   clima = {
//     iconName: weather.weather[0].icon,
//     tempo_desc: capitalizeFirstLetter(weather.weather[0].description),
//     low_high: `▼ ${Math.round(weather.main.temp_min)}°c   |   ▲ ${Math.round(
//       weather.main.temp_max
//     )}°c`,
//     rain: weather.rain[0] + " mm",
//     cidade: `${weather.name}, ${weather.sys.country}`,
//   };

//   return clima;
//   //   container_img.innerHTML = `<img src="./assets/img/${iconName}.png">`;
// }
