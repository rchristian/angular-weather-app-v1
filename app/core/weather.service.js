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
				var zipCountry = data.postal + ',' + data.country;
				return $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q='
									+ zipCountry
									+ '&APPID=f72650c40fef189a346723016e3b5ca6&units=imperial&callback=JSON_CALLBACK',
									{cache: true})
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