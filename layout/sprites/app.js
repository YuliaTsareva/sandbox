'use strict';

(function() {
  var API_ICON_TO_CLASSES = {
    '01d': 'day-clear',
    '01n': 'night-clear',
    '02d': 'day-few-clouds',
    '02n': 'night-few-clouds',
    '03d': 'day-skattered-clouds',
    '03n': 'night-skattered-clouds',
    '04d': 'day-broken-clouds',
    '04n': 'night-broken-clouds',
    '09d': 'day-shower-rain',
    '09n': 'night-shower-rain',
    '10d': 'day-rain',
    '10n': 'night-rain',
    '11d': 'day-thunderstorm',
    '11n': 'night-thunderstorm',
    '13d': 'day-snow',
    '13n': 'night-snow',
    '50d': 'day-mist',
    '50n': 'night-mist'
  };

  var CITY_ID = 498817; // Saint Petersburg
  var WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather?id=${city_id}&units=metric&appid=1d63d064f834da2c8ea9972c0c7618d7';
  var FORECAST_API_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=${city_id}&units=metric&appid=1d63d064f834da2c8ea9972c0c7618d7';

  Handlebars.registerHelper('formatDegrees', function(temperature) {
    return (temperature > 0 ? '+' : '') + temperature + '°C';
  });

  var template = Handlebars.compile(document.getElementById('template').innerHTML);

  getCurrentWeather(function(data) {
    var forecast = extractForecastFromDTO(data);
    forecast.date = 'Now';

    addForecastToDOM(forecast, 'today');
  });

  getForecast(function(data) {
    var timestampsToShow = getForecastTime();

    data.list.forEach(function(item) {
      if(timestampsToShow.indexOf(item.dt) >= 0) {
        var forecast = extractForecastFromDTO(item);
        forecast.date = moment.unix(item.dt).format('ddd');

        addForecastToDOM(forecast);
      }
    });
  });

  function getForecastTime() {
    var now = moment();
    var todayNoon = moment().hours(12).startOf('hour');

    var duration = moment.duration(todayNoon.diff(now));
    var hours = duration.asHours();

    var showTodayForecast = hours > 2;

    var timestampsToShow = [];
    if(showTodayForecast) {
      timestampsToShow.push(todayNoon.unix());
    }

    var next = todayNoon;
    for (var i = 1; i <= 5; i++) {
      next = next.add(1, 'day');
      timestampsToShow.push(next.unix());
    }

    return timestampsToShow.slice(0, 3);
  }

  function extractForecastFromDTO(dto) {
    var temperature = Math.round(dto.main.temp);
    var description = dto.weather[0].description.toLowerCase();
    var descriptionClass = description.length > 20 ? 'description_long' : '';
    var icon = API_ICON_TO_CLASSES[dto.weather[0].icon];

    return {
      temperature: temperature,
      temperatureClass: getTemperatureClass(temperature),
      description: description,
      descriptionClass: descriptionClass,
      icon: icon
    };
  }

  function getTemperatureClass(temperature) {
    if (temperature < -20) {
      return 'very-cold';
    }

    if (temperature < 0) {
      return 'cold';
    }

    if (temperature < 10) {
      return 'zero';
    }

    if (temperature < 20) {
      return 'warm';
    }

    return 'hot';
  }

  function addForecastToDOM(forecast, className) {
    var div = document.createElement('div');
    div.className = 'forecast-item';
    if(className) {
      div.className += ' ' + className;
    }

    div.innerHTML = template(forecast);
    document.getElementById('forecast').appendChild(div);
  }

  function getCurrentWeather(next) {
    var url = WEATHER_API_URL.replace(/\$\{city_id}/, CITY_ID);
    requestData(url, next);
  }

  function getForecast(next) {
    var url = FORECAST_API_URL.replace(/\$\{city_id}/, CITY_ID);
    requestData(url, next);
  }

  function requestData(url, next) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
      if(xhr.readyState != 4) return;

      if(xhr.status != 200) {
        logError(xhr.status + ' ' + xhr.statusText);
      } else {
        var data = JSON.parse(xhr.responseText);
        if(data.cod && data.cod != 200) {
          logError(data.message);
          return;
        }

        next(data);
      }
    };
  }

  function logError(message) {
    console.log('Failed to receive data', message);
  }
}());
