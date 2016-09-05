(function() {
	'use strict';

	angular
		.module('app.weather')
		.directive('weather', weather);

	function weather() {
		return {
			templateUrl: 'app/weather/weather.html',
			restrict: 'E',
			scope: {},
			controller: WeatherController,
			controllerAs: 'vm'
		};
})();