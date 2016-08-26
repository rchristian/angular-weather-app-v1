(function() {
	'use strict';

	angular
		.module('app.weather')
		.config(weatherConfig);

		weatherConfig.$inject = ['$routeProvider'];

		function weatherConfig($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'app/weather/weather.html',
			});
		}
})();