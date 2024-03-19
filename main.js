function getWeather(city) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=5d066958a60d315387d9492393935c19', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            displayWeather(data);
        } else {
            console.error('Request failed. Status: ' + xhr.status);
        }
    };

    xhr.onerror = function() {
        console.error('Request failed');
    };


    xhr.send();
}


function displayWeather(data) {
    var weatherDiv = document.getElementById('weather');
    var weatherString = 'Temperature: ' + data.main.temp + '°C<br>';
    weatherString += 'Pressure: ' + data.main.pressure + ' hPa<br>';
    weatherString += 'Description: ' + data.weather[0].description + '<br>';
    weatherString += 'Humidity: ' + data.main.humidity + '%<br>';
    weatherString += 'Wind Speed: ' + data.wind.speed + ' m/s<br>';
    weatherString += 'Wind Direction: ' + data.wind.deg + '°<br>';
    weatherString += '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png" alt="Weather Icon">';
    weatherDiv.innerHTML = weatherString;
}

getWeather('Lviv');
