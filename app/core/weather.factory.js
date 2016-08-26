(function() {
	'use strict';

	angular
		.module('app.core', []);
		.factory('weatherFactory', weatherFactory);

	weatherFactory.$inject = ['$http'];

	function weatherFactory ($http) {
		return {
			getWeather: getWeather
		};

		function getWeather(zipCountry) {
			var URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
			var API = /*'[API KEY HERE]';*/
			var tempUnits = '&units=imperial';
			var callback = '&callback=JSON_CALLBACK';
			return $http.jsonp(URL + zipCountry + API + tempUnits + callback)
				.then(getWeatherComplete)
				//.catch("WeatherService Error");
				//"cod":401

			function getWeatherComplete(response) {
				return response.data;
			}
		}
	}
})();