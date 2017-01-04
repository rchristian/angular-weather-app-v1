(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('weatherService', weatherService);

	weatherService.$inject = ['$http'/*, 'locationService'*/];

	function weatherService ($http) {
		return {
			getWeather: getWeather,
		};

		function getWeather() {
			return weather();

			function weather(data) {
				return $http.get('/api/weather/connect', {cache: true})
					.then(getWeatherComplete)
					.catch(getWeatherCompleteFailed);

				function getWeatherComplete(response) {
					return response.data.body;
				}

				function getWeatherCompleteFailed(err) {
					console.log(err);
					throw err;
				}
			}
		}
	}
})();