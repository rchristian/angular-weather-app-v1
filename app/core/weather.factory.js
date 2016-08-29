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
			return userLocationFactory.getUserLocation().then(fetchWeather);

			function weather(data) {
				var URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
				var zipCountry = data.postal + ',' + data.country;
				var API = '&APPID=f72650c40fef189a346723016e3b5ca6';
				var tempUnits = '&units=imperial';
				var callback = '&callback=JSON_CALLBACK';
				return $http.jsonp(URL + zipCountry + API + tempUnits + callback)
					.then(getWeatherComplete);
					//.catch("WeatherService Error");
					//"cod":401

				function getWeatherComplete(response) {
					return response.data;
				}
			}
		}
	}
})();