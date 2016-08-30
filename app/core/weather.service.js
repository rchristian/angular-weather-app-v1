(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('weatherService', weatherService);

	weatherService.$inject = ['$http', 'locationService'];

	function weatherService ($http, locationService) {
		return {
			getWeather: getWeather,
		};

		function getWeather() {
			return locationService.getLocation().then(weather);

			function weather(data) {
				var URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
				var zipCountry = data.postal + ',' + data.country;
				var API = '&APPID=f72650c40fef189a346723016e3b5ca6';
				var tempUnits = '&units=imperial';
				var callback = '&callback=JSON_CALLBACK';
				return $http.jsonp(URL + zipCountry + API + tempUnits + callback, {cache: true})
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