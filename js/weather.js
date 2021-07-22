const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.5387&lon=-112.186&units=imperial&exclude=minutely&appid=ffe8fd08fbf90ef22ca04d78481b8036"
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      const weather = jsObject
       document.getElementById('alert').textContent = weather.alerts[0].event;
  });



