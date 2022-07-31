const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "7fee8073a72bf6d528ee29e8e2d309f4";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=imperial`
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.name);
            city.innerText = data.name;    
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError() {
    alert("Can't find you. Weather service not available.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

