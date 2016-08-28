(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('weatherFactory', weatherFactory);

	weatherFactory.$inject = ['$http', 'userLocationFactory'];

	function weatherFactory ($http, userLocationFactory) {
		return {
			getWeather: getWeather,
		};

		function getWeather() {
			
			var URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
			var API = '&APPID=f72650c40fef189a346723016e3b5ca6';
			var tempUnits = '&units=imperial';
			var callback = '&callback=JSON_CALLBACK';
			return $http.jsonp(URL + location + API + tempUnits + callback)
				.then(getWeatherComplete)
				//.catch("WeatherService Error");
				//"cod":401

			function getWeatherComplete(response) {
				return response.data;
			}
		}
	}
})();

/*
var globalVariable;
function function1()
{
  globalVariable=12;
  function2();
}

function function2()
{
  var local = globalVariable;
}

function activateWeather() {
	return userLocationFactory.getUserLocation().then(fetchZipCountry);

	function fetchZipCountry(data) {
		var zipCountry = data.zip + ',' + data.countryCode;
		weatherFactory.getWeather(zipCountry).then(function(data) {
			weatherInfo(data);
		});
	}
}
*/