const apiUrl = "https://api.openweathermap.org/data/2.5/onecall?units=metric&appid=0e616a63239c00c8394c2aaabd20338f&"

function getCurrentWeather(lat, lon) {
    let parametrizedUrl = apiUrl + "lat=" + lat + "&lon=" + lon;
    var promise = fetch(parametrizedUrl)
    .then((value) => {
        return value.json();
    });
    return promise;
}

export { getCurrentWeather };